[![Deploy to Heroku](https://github.com/webceyhan/ng-weather-app/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/ng-weather-app/actions/workflows/heroku.yml)

# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.
Upgraded to version 13.0.0 manually later.

## Install

- Go to https://openweathermap.org/ and create an account to obtain API key which will be used to grab weather info.
- Inside your project folder, locate .env.sample file and rename it to .env
- Put your OPENWEATHER_API_KEY in .env file (also read Heroku section)
  
## Development server

You should first run the express server by `npm start` command (This is needed for API calls and serving angular app on Heroku)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy to Heroku

In terminal, get inside your project folder by `cd <project-root>`. 
Bind existing project folder with heroku; `heroku create` which will create an git remote-url called 'heroku'
Go to your Heroku dashboard and go to app/settings/config-vars and set OPENWEATHER_API_KEY value (same as in .env file)

Below Github action will to deploy to Heroku on every push to master.
```
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
      - uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
          heroku_email: ${{secrets.HEROKU_EMAIL}}
```

After project is being push to Heroku server, `"heroku-postbuild": "ng build --prod"` in package.json, 
will be run before on each build process and create /dist/<project-name> folder. 

> Make sure to add expressJs to dependencies!

After the build is complete, Heroku will execute  `npm start` automatically which refers to `"start": "node server.js"` 
which will serve the static contents under /dist/<project-name> folder.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
  
## Resources
  
- Hosting on Heroku: https://www.heroku.com
- Geo Cities API: http://geodb-free-service.wirefreethought.com/v1/geo/cities
- OpeanWeatherMap API: https://api.openweathermap.org/data/2.5
