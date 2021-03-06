const axios = require("axios");
const sharp = require("sharp");
const Jimp = require("jimp");
const fs = require("fs");
const fsPromises = fs.promises;

async function saveImage(name, url) {
    await axios({
        url,
        responseType: "arraybuffer",
    }).then(
        (response) =>
            new Promise((resolve, reject) => {
                const roundedCorners = new Buffer.from(
                    '<svg><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>'
                );
                resolve(
                    sharp(response.data)
                        .resize(100, 100)
                        .composite([
                            {
                                input: roundedCorners,
                                blend: "dest-in",
                            },
                        ])
                        .toFile(`./public/images/profilePics/${name}.png`)
                );
            })
    );
}

async function createHeader() {
    const header = await Jimp.read("./public/images/headers/twitterHeader.png");
    const files = await fsPromises.readdir("./public/images/profilePics");

    let index = 0;
    for (const avatar of files) {
        const imgPath = `./public/images/profilePics/${avatar}`;
        const image = await Jimp.read(imgPath);

        const position = 1135 + index * (100 + 10);
        header.composite(image, position, 360);

        index++;
    }

    await header.writeAsync("./public/images/headers/dynamicTwitterHeader.png");
}

module.exports = { saveImage, createHeader };
