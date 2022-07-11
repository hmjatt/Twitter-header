const client = require("./public/modules/twitterClient");
const {getFollowers} = require("./public/modules/twitterController")


// document.addEventListener("DOMContentLoaded", getFollowers);

// async function testTweet() {
//     await client.v2.tweet("Hi, I am building a twitter bot!")
// }

// testTweet()

getFollowers();