// const client = require("./public/modules/twitterClient");
const {
    getFollowers,
    getProfileImageUrl,
    updateHeader,
} = require("./public/modules/twitterController");

const { saveImage, createHeader } = require("./public/modules/imageController");

const CronJob = require("cron").CronJob;

const testFolder = './public/images/profilePics/';
const fs = require('fs');

// TEST TWEETER API
// async function testTweet() {
//     await client.v2.tweet("Hi, I am building a twitter bot!")
// }

// testTweet()

console.log("starting node app");
const job = new CronJob("* * * * *", async function () {
    console.log("start generating header");
    generateHeader();
});

job.start();

// Wrapper Function which fetches followers, images, save images and update our header dynamically
async function generateHeader() {
    const followers = await getFollowers();

    for (const follower of followers) {
        const url = await getProfileImageUrl(follower.id);
        await saveImage(follower.id, url);
    }


	// get all files

	// fs.readdir(testFolder, (err, files) => {
	// 	files.forEach(file => {
	// 	  console.log(file);
	// 	});
	//   });

	//get latest modified file
	fs.readdir(testFolder ,function(err, list){
		list.forEach(function(file){
			console.log(file);
			stats = fs.statSync(file);
			console.log(stats.mtime);
			console.log(stats.ctime);
		})
	})

	// GET 3 LATEST FILES AND DELETE REST


    // await createHeader();
    // await updateHeader();
}
