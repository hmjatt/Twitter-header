// const client = require("./public/modules/twitterClient");
const {
    getFollowers,
    getProfileImageUrl,
} = require("./public/modules/twitterController");

const {saveImage} = require("./public/modules/imageController");

// TEST TWEETER API
// async function testTweet() {
//     await client.v2.tweet("Hi, I am building a twitter bot!")
// }

// testTweet()

// Wrapper Function which fetches followers, images, save images and update our header dynamically
async function generateHeader() {
    const followers = await getFollowers();

	for(const follower of followers) {
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }
}


generateHeader();