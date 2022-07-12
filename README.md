# Twitter-header
A Node script to create Dynamic Twitter Header


![This is an image](https://github.com/hmjatt/Twitter-header/blob/main/public/images/headers/twitterHeader.png)

## [Live Preview](https://twitter.com/hmjatt/)

This project is created to create a Twitter Bot in NodeJS that fetches 3 latest followers using Twitter API V2 and create a Dynamic Twitter Header and upload it to Twitter. Dotenv, Axios, Sharp, Cron NPM packages are also used in this project :bird: Feel free to reach me at [Twitter](https://twitter.com/hmjatt/) :robot:



### Technologies Used

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://developer.twitter.com/en/portal/dashboard" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="twitter" width="50" height="50"/> </a> &emsp; <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img style="margin-top:20px;" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="50" height="50"/> </a>


## Includes the following features/components:

	- NPM
	- Twitter API Client
	- Dotenv
	- Axios
	- Sharp
	- Twitter Develeoper Portal
	- Cron
	- Jimp

## Usage

```
	npm install

```

	
## Steps I followed to complete this project

1. ### Twitter Elevated Access
	- [x] Create an application on `Twitter Developer Portal`
	- [x] Apply for `Elevated access` if you don't have one

2. ### Setup Node App
	- [x] Install **NPM** using `npm init -y` to skip questions.
	- [x] Create `index.js` to test node.
	
3. ### Twitter Client
	- [x] Install **Twitter API V2** package using `npm i twitter-api-v2`.
	- [x] Create a `twitterClient.js` module which connects to **Twitter API V2**.
	- [x] Install **Dotenv** package using `npm install dotenv --save`.
	- [x] Create a project at `https://developer.twitter.com/en/portal/projects/new`.
	- [x] Create a `.env` file and copy **API Keys** to that file.
	- [x] Create a `testTweet()` method inside `index.js` to test API.
	- [x] Check Twitter App if it works, it should tweet the string inside method(IT WORKS :tada:)
	- [x] Delete or comment `testTweet()` method because it worked and is no longer needed.

4. ### Get Followers
	- [x] Create a `twitterController.js` module which collects data from **Twitter API**.
	- [x] Get **Twitter ID** from [Tweeterid](https://tweeterid.com/)
	- [x] Create `getFollowers()` method in `twitterController.js` which returns **3 latest followers**
	- [x] Test `getFollowers()` method(IT WORKS :fireworks:)
	- [x] Create a wrapper function `generateHeader()` in `index.js` which allows us to fetch followers, their images, save images and update our header dynamically.

5. ### Save Follower Images
	- [x] Create `getProfileImageUrl()` method in `twitterController.js` which returns **profile image URL from followers**.
	- [x] Create `imageController.js` module which contains methods to manipulate images.
	- [x] Install **Axios** package using `npm i axios`, which performs our HTTP requests.
	- [x] Install **Sharp** package using `npm i sharp`, which modifies fetched images and save it to our **File System**.
	- [x] Create `saveImage()` method in `imageController.js` which fetches **rounded** profile picture of followers using axios and save them to our **images** folder.
	- [x] Call `getProfileImageUrl()` and `saveImage()` methods in `index.js` module.
	- [x] Test `generateHeader()` wrapper function and check if images are fetched(IT WORKS :partying_face:)

6. ### Create Header

	- [x] Install **Jimp** package using `npm install --save jimp`, which will help us create **Dynamic Twitter Header**.
	- [x] Import required dependencies on top of `imageController.js` module.
	- [x] Create a `createHeader()` method in `imageController.js` module which creates `dynamicTwitterHeader.png` using `headerTemplate.png` and fetched profile picture of our **followers**.
	- [x] Test `createHeader()` method and check if **dynamicTwitterHeader.png** is successfuly created(IT WORKS :tada:)


7. ### Update Header
	- [x] Create a `updateHeader()` method in `twitterController.js` module which uploads **dynamicTwitterHeader.png** to Twitter.
	- [x] Test `updateHeader()` method and check if **dynamicTwitterHeader.png** is successfuly uploaded to Twitter(IT WORKS wooohoooo :partying_face:)

8. ### Cron Job
	- [x] Install **Cron** package using `npm install cron`, to create a **CronJob** which generates **dynamicTwitterHeader.png** at a specified time.



## Links to content that helped me with this project

1. Tutorials
	- [Article on Dev.to by Dom The Dev](https://dev.to/dom_the_dev/build-an-automatically-updating-twitter-header-with-nodejs-and-twitter-api-2g2d)
	- [Youtube Video by Dom The Dev](https://www.youtube.com/watch?v=jl9OKxoqVcA)
	- [GitHub Repo by Dom The Dev](https://github.com/dom-the-dev/twitter-banner)
	- [Freecodecamp Article by Spruce Emmanuel](https://www.freecodecamp.org/news/create-a-dynamic-twitter-header/)

2. Twitter
	- [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
	
3. Canva
	- [Twitter Header Template](https://www.canva.com/twitter/templates/headers/)

4. NPM Packages
	- [Twitter API v2](https://www.npmjs.com/package/twitter-api-v2)
	- [Dotenv Package](https://www.npmjs.com/package/dotenv)
	- [Cron Package](https://www.npmjs.com/package/cron)
	- [Sharp Package](https://www.npmjs.com/package/sharp)
	- [Axios Package](https://www.npmjs.com/package/axios)
	- [Jimp Package](https://www.npmjs.com/package/jimp)




#### Quote

    “Keep your face always toward the sunshine - and shadows will fall behind you.”
    — Walt Whitman
>  	
> :package: :yarn: :watch: