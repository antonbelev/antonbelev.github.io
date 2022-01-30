# My personal space and side projects
   This repo contains my personal space hosted on GitHub Pages. Right now it only contains contact details and a Wordle implementation in Bulgarian.

# Wordle clone in Bulgarian

- Go play the real Wordle [here](https://www.powerlanguage.co.uk/wordle/)
- This is a fork of a React implementation of Wordle [here](https://github.com/hannahcode/wordle)
- Try a demo of this clone in bulgarian [here](https://antonbelev.github.io/#/wordle-bg)

I wanted to make the original Wordle available in bulgarian, so that none-native english speakers can enjoy this trendy game too. Instead of
implementing it from the ground up, I decided to leverage existing open-source clone implementation of Wordle, linked above.

For the dictionary, I decided to craw an online bulgarian dictionary and filter 5 letter words, which are not names of places etc.

This implementation contains over 58,000 valid guess words and over 3700 daily words.

I've used the following resources to build this dictionary of words.

- for the list of valid guess words I've used open-source project [here](https://github.com/miglen/bulgarian-wordlists)
- for the list of daily solution words I've used [this website](https://slovored.com/sitemap/pravopisen-rechnik)

_To Run Locally:_
Clone the repository and perform the following command line actions:
```bash
$ cd wordle
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t notwordle .
$ docker run -d -p 3000:3000 notwordle
```
open http://localhost:3000 in browser.

