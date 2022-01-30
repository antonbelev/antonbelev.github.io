# Wordle clone in bulgarian

- Go play the real Wordle [here](https://www.powerlanguage.co.uk/wordle/)
- This is a fork of a React implementation of Wordle [here](https://github.com/hannahcode/wordle)
- Try a demo of this clone in bulgarian [here](https://antonbelev.github.io/)

I wanted to make this fine game into bulgarian, so that none-native english speakers can enjoy the trend too. Instead of
implementing it from the ground up, I decided to leverage existing open-source clone implementation of Wordle, linked above.

For the dictionary, I decided to craw an online bulgarian dictionary, and filter 5 letter words, which are not names of places etc.


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

