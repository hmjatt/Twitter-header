const axios = require("axios")
const sharp = require("sharp")
const Jimp = require("jimp")
const fs = require("fs")
const fsPromises = fs.promises


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
                        .toFile(`public/images/profilePics/${name}.png`)
                );
            })
    );
}

// async function createHeader() {
//     const header = await Jimp.read("../images/headers/images.png")
//     const files = await fsPromises.readdir("./images/profilePics")

//     let index = 0;
//     for (const avatar of files) {
//         const imgPath = `./images/${avatar}`
//         const image = await Jimp.read(imgPath)

//         const position = 475 + index * (100 + 10);
//         banner.composite(image, position, 380);

//         index++
//     }

//     await banner.writeAsync("./final.png");

// }



// async function saveImage(name, url) {
//     const { data } = await axios.get(url, {
//         responseType: "arraybuffer",
//     });

//     await sharp(data).resize(100, 100).toFile(`public/images/${name}.png`);
// }



module.exports = { saveImage};
