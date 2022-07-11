const client = require("./twitterClient");
const TWITTER_ID = process.env.TWITTER_ID;


async function getFollowers() {
    const followers = await client.v2.followers(`${TWITTER_ID}`);
	let getLatestFollowers = followers.data.slice(0, 3);
	return getLatestFollowers;
}

async function getProfileImageUrl(user_id) {
    const {profile_image_url} = await client.v1.user({user_id})
    return profile_image_url
}

module.exports = {getFollowers, getProfileImageUrl}