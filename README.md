# My personal space and side projects
   This repo contains my personal space hosted on GitHub Pages. Right now it only contains contact details and Guess the word in Bulgarian.

# Guess the word in Bulgarian
- Try a demo of this clone in bulgarian [here](https://antonbelev.github.io/#/guess-the-word-bg)

I wanted to make the original guess the word game available in bulgarian, so that none-native english speakers can enjoy this trendy game too. Instead of
implementing it from the ground up, I decided to leverage existing open-source implementation.

For the dictionary, I decided to craw an online bulgarian dictionary and filter 5 letter words, which are not names of places etc.

This implementation contains over 58,000 valid guess words and over 3700 daily words.

I've used the following resources to build this dictionary of words.

- for the list of valid guess words I've used open-source project [here](https://github.com/miglen/bulgarian-wordlists)
- for the list of daily solution words I've used [this dictionary](https://slovored.com/sitemap/pravopisen-rechnik)