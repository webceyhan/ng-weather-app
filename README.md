<!-- AUTOMATION BADGES -->

[![Deploy to Heroku](https://github.com/webceyhan/ng-weather-app/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/ng-weather-app/actions/workflows/heroku.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Angular Weather Application

This is a simple weather application built on Angular Framework.
It uses GeoCities API to provide auto-suggestion for world city names.
After choosing a city, weather forecast information will be fetched from OpeanWeatherMap API to demonstrate the weather cards for given city.

[View Demo](https://webceyhan-ng-weather-app.herokuapp.com) |
[Report Issue](https://github.com/webceyhan/ng-weather-app/issues) |
[Request Feature](https://github.com/webceyhan/ng-weather-app/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- BUILT WITH ////////////////////////////////////////////////////////// -->

## Built With

- [Node.js](https://nodejs.dev/)
- [TypeScript](https://www.typescriptlang.org)
- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com)
- [Express](https://expressjs.com/) (backend server)

<br>
<!-- PREREQUISITES /////////////////////////////////////////////////////// -->

## Prerequisites

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

You also need to create an account on [OpenWeatherMap](https://openweathermap.org/) to obtain API key which is required to grab weather info.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

## Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/webceyhan/ng-weather-app.git
   ```
2. Get inside the cloned project folder.
   ```sh
   cd <project folder>
   ```
3. Install NPM packages.
   ```sh
   npm install
   ```
4. Rename `.env.sample` file to `.env` and put your API key in it.
   ```sh
   OPENWEATHER_API_KEY=
   ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm start           # serve the app for production
npm run serve       # serve the app for development
npm run test        # run the test suits
npm run build       # build for production
```

> Take a look at the other scripts in [`package.json`](https://github.com/webceyhan/ng-weather-app/blob/master/package.json)

<br>
<!-- DEVELOPMENT //////////////////// -->

## Development

Run the backend server first with `npm start` which is needed for API calls.

Then Run `ng serve` for a dev server. Navigate to `http://localhost:4200`.
The app will automatically reload if you change any of the source files.

<br>
<!-- TESTING //////////////////////// -->

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

<br>
<!-- BUILDING /////////////////////// -->

## Building

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.
Use the `--prod` flag for a production build.

<br>
<!-- DEPLOYMENT ///////////////////// -->

## Deployment (Heroku)

A built-in Github Action will automatically deploy the project to Heroku on every push.

1. Create an [Heroku](https://www.heroku.com/home) account.

2. Install the heroku-cli as shown in the [guide](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

3. Create a new Heroku app inside the project folder to bind it.

   ```sh
   heroku create
   ```

   > This will create a new application on Heroku server and bind it to your project by adding a remote `heroku` upstream to your git repository.

4. Setup the repository secrets on your github as shown below:
   ```yaml
   name: Deploy to Heroku
   on:
       push:
           branches:
               - master
   jobs:
       build:
           runs-on: ubuntu-latest
           steps:
               - uses: actions/checkout@v2
               - uses: akhileshns/heroku-deploy@v3.12.12
               with:
                   heroku_api_key: ${{secrets.HEROKU_API_KEY}}
                   heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
                   heroku_email: ${{secrets.HEROKU_EMAIL}}
   ```
5. Visit your Heroku dashboard and go to app/settings/config-vars
   and set `OPENWEATHER_API_KEY` value (same as in .env file)

> Heroku will run the followin steps during the deploy process:
> - `npm run build` to create /dist/<project-name> folder.
> - `npm start` to start backend for serving app.

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

- [Heroku](https://www.heroku.com)
- [GeoCities API](http://geodb-free-service.wirefreethought.com/v1/geo/cities)
- [OpeanWeatherMap API](https://api.openweathermap.org/data/2.5)
- [GitHub Actions](https://docs.github.com/en/actions)
