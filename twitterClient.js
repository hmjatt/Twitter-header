const {TwitterApi} = require("twitter-api-v2")

module.exports = new TwitterApi({
    appKey: "<your-api-key>",
    appSecret: "<your-api-secret>",
    accessToken: "<your-access-token>",
    accessSecret: "<your-access-secret>"
})