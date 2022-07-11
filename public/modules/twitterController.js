const client = require("./twitterClient");
const TWITTER_ID = process.env.TWITTER_ID;


async function getFollowers() {
    const followers = await client.v2.followers(`${TWITTER_ID}`)
    return followers.data.slice(0, 3)
}

module.exports = {getFollowers}