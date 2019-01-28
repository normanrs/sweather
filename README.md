# 📱 Sweather!
> A Weather App

Sweather gets the current weather for a US city.

## ⚙️ Initial Setup

OS X & Linux:

```sh
npm install
```

## 🕹 How to Use

USER INPUT
Users can enter a city/state. Accommodates any mix of CAPITAL and lowercase letters. States can be spelled out or in two-letter abbreviation.
Displays an error with instructions on bad input.

CURRENT WEATHER AND FORECAST
Site returns current weather conditions with a sign-language gif. Also displays an hourly forecast for the next eight hours, and a daily forecast for the next five days.

API CALL
All data is returned from the Sweater Weather API at https://stormy-depths-85632.herokuapp.com .

## 🚧 Known Issues

UNKNOWN CITY or STATE
If the user enters an incorrect city or state, the site does not show anything. Dev tools reveals a 500 error behind the scenes. I intend to add a lookup for all US cities/towns and states (added to issues).

(Sometimes) SLOW API CALL
The Sweater Weather API is sometimes slow. This is probably because it is hosted as a free site on Heroku. I intend to find other hosting.

## 📊 How to Run Tests

OS X & Linux:

```sh
Open the fetch_test.html document in the 'test' directory. (BETA)
```

## 🏗 Tech Stack List

* JavaScript
* HTML/CSS
* NPM
* Mocha

## 📥 How To Contribute

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/thingamajig`)
3. Commit your changes (`git commit -am 'Added a cool doodad!'`)
4. Push to the branch (`git push origin feature/thingamajig`)
5. Create a new Pull Request

## 🚀 Core Contributors

**Norm Schultz**
Twitter:[@normanrs](https://twitter.com/normanrs)
Github:[https://github.com/normanrs](https://github.com/normanrs/)
Web:[http://www.normanrschultz.com](http://www.normanrschultz.com)
