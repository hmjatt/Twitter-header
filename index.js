// const client = require("./public/modules/twitterClient");
const {
    getFollowers,
    getProfileImageUrl,
    updateHeader,
} = require("./public/modules/twitterController");

const { saveImage, createHeader } = require("./public/modules/imageController");

const CronJob = require("cron").CronJob;

const testFolder = "./public/images/profilePics/";
const fs = require("fs");
const path = require('path');

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

	// delete all profile pictures of follwers when script runs, so that we only 
	//grab the latest profile pictures and it helps keep our directory clean

	// fs.readdir(testFolder, (err, files) => {
    //     if (err) throw err;

    //     for (const file of files) {
    //         fs.unlink(path.join(testFolder, file), (err) => {
    //             if (err) throw err;
    //         });
    //     }
    // });


    const followers = await getFollowers();

    for (const follower of followers) {
        const url = await getProfileImageUrl(follower.id);
        await saveImage(follower.id, url);
    }

    // await createHeader();
    // await updateHeader();
}
