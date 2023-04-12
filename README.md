## Description

The Breeze app is a weather forecast app that allows the user to view the weather forecast for one or more cities based on the city name.

### The application is divided into three main components:

1. On the left side we have a sidebar component, which contains a toggle button to change the theme for day or night. It also contains menu buttons to navigate between the main page (this is what we have by default), the list of cities and the map where we can choose a city. These are not yet implemented and are not functional.

2. The hub-area component allows city searches and displays the most recent searches in chronological order.
In addition to displaying the city, degrees Celsius and the current time in each city are also displayed here.
After the cities have been displayed, you can select that city as a favorite and when the page is reloaded, it will remain on the page and the other cities in the search list will be deleted.

3. The right component displays the weather details for the last searched city. We will have the weather for 3 predefined hours, and at the bottom it shows us the weather for the next 7 days.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.
Node version: 16.14.2


## Install packages

npm install
Package Manager: npm 8.5.5

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
