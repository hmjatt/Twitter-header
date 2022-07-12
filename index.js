// const client = require("./public/modules/twitterClient");
const {
    getFollowers,
    getProfileImageUrl,
    updateHeader,
} = require("./public/modules/twitterController");

const { saveImage, createHeader } = require("./public/modules/imageController");

const CronJob = require("cron").CronJob;

// TEST TWEETER API
// async function testTweet() {
//     await client.v2.tweet("Hi, I am building a twitter bot!")
// }

// testTweet()

console.log("starting node app");
const job = new CronJob("* * * * *", async function () {
    console.log("start generating banner");
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

    await createHeader();
    await updateHeader();
}
