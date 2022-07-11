const client = require("./twitterClient");
const TWITTER_ID = process.env.TWITTER_ID;


async function getFollowers() {
    const followers = await client.v2.followers(`${TWITTER_ID}`);
	let getLatestFollowers = followers.data.slice(0, 3);
	console.log(getLatestFollowers);
    // return 

	// console.log()
}

module.exports = {getFollowers}