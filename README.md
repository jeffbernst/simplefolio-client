# Simplefol.io

link to live app: https://simplefol.io/

![landing](landing.png)

![portfoloi](portfolio.png)

## Project Summary

This is the front end for a very simple cryptocurrency portfolio and watchlist. It uses the [Coin Market Cap API](https://coinmarketcap.com/api/) to fetch price data.

The goal with this site is to have a very barebones site to keep track of crypto holdings. A lot of the other portfolio sides come with a ton of useful features, but I just wanted something simple where I only have to worry about updating my balances.

After you create an account, you just have to pick which cryptocurrencies are in portfolio and add balances. If there are some cryptocurrencies you'd like to keep an eye on, there's also a watchlist feature.

## Technology Used

This site was built with React/Router/Redux.

## API Documentation

Please see the [back end repo](https://github.com/jeffbernst/simplefolio-api) for the API documentation.

## Usage & Installation

Getting a copy of this project running locally shouldn't be too difficult. There is one environmental variable used on the server to point to the API, but if you get a local copy of the [API](https://github.com/jeffbernst/simplefolio-api) up and running there won't be any problems. After making a local clone, just run `npm install` and then `npm start`.

The only feature that won't work initially is the "or try a demo" link under the "Get Started" button. Take a look at the `tryDemo` function in `landing-page-top-section.js` to see the format of the 10 demo accounts that are required. Just let me know if you have any questions about how to set them up.