# Twitter-header
A Node script to create Dynamic Twitter Header


<!-- ![This is an image](https://github.com/hmjatt/hmjatt.github.io/blob/master/images/battleship/Page-1%20updated.png) -->


This project is created to create a Twitter Bot in NodeJS that fetches 3 latest followers using Twitter API V2 and create a Dynamic Twitter Header and upload it to Twitter. Dotenv, Axios, Sharp, Cron NPM packages are also used in this project :bird: Feel free to reach me at [Twitter](https://twitter.com/hmjatt/) :robot:



### Technologies Used

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> 
 <!-- &emsp;   <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg" alt="babel" width="50" height="50"/> </a>  &emsp;   <a href="https://jestjs.io/" target="_blank" rel="noreferrer"> <img src="https://jestjs.io/img/jest.png" alt="jest" width="50" height="50"/> </a>  &emsp;  <a href="https://webpack.js.org/" target="_blank" rel="noreferrer"> <img style="margin-top:40px;" src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-dark-bg.svg" alt="webpack" width="120" height="70"/> </a> -->
   &emsp;   
<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img style="margin-top:20px;" src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg" alt="npm" width="50" height="50"/> </a>


## Includes the following features/components:

	- NPM
	- Twitter API Client
	- Dotenv
	- Axios
	- Sharp
	- Twitter Develeoper Portal
	- Cron

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
	- [x] Create a `twitterClient.js` file.
	- [x] Install **Dotenv** package using `npm install dotenv --save`.
	- [x] Create a project at `https://developer.twitter.com/en/portal/projects/new`.
	- [x] Create a `.env` file and copy **API Keys** to that file.
	- [x] Create a `testTweet()` method inside `index.js` to test API.
	- [x] Check Twitter App if it works, it should tweet the string inside method(IT WORKS :tada:)
	- [x] Delete or comment `testTweet()` method because it worked and is no longer needed.

4. ### Get Followers
	- [x] Create a `twitterController.js` file which collects data from **Twitter API**.
	- [x] Get **Twitter ID** from [Tweeterid](https://tweeterid.com/)
	- [x] Create `getFollowers()` method in `twitterController.js` which returns **3 latest followers**
	- [x] Test `getFollowers()` method(IT WORKS :fireworks:)
	- [x] Create a wrapper function `generateHeader()` in `index.js` which allows us to fetch followers, their images, save images and update our header dynamically.

5. ### Save Follower Images
	- [x] Create `getProfileImageUrl()` method in `twitterController.js` which returns **profile image URL from followers**

6. ### Create Banner

7. ### Update Banner

8. ### Cron Job



## Links to content that helped me with this project

1. Dom the dev
	- [Article on Dev.to](https://dev.to/dom_the_dev/build-an-automatically-updating-twitter-header-with-nodejs-and-twitter-api-2g2d)
	- [Youtube Video](https://www.youtube.com/watch?v=jl9OKxoqVcA)
	- [GitHub Repo](https://github.com/dom-the-dev/twitter-banner)

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




#### Quote

    “Keep your face always toward the sunshine - and shadows will fall behind you.”
    — Walt Whitman
>  	
> :package: :yarn: :watch: