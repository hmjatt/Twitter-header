const axios = require("axios");
const sharp = require("sharp");

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
			  .toFile(`public/images/${name}.png`)
		  );
		})
	);
  }


// async function saveImage(name, url) {
//     const { data } = await axios.get(url, {
//         responseType: "arraybuffer",
//     });

//     await sharp(data).resize(100, 100).toFile(`public/images/${name}.png`);
// }



module.exports = { saveImage };
