const client = require("./public/modules/twitterClient");
const {getFollowers} = require("./public/modules/twitterController")


// TEST TWEETER API
// async function testTweet() {
//     await client.v2.tweet("Hi, I am building a twitter bot!")
// }

// testTweet()


// Wrapper Function which fetches followers, images, save images and update our header dynamically
async function generateHeader() {
    const followers = await getFollowers()
}
