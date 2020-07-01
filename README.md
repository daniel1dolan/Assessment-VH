### Instructions

Create a web app using react, node, express, knex.js, and postgresql. App should take city name as input and display the results to user. User should be presented a save button, and if they click it, certain results should be sent to the server
and stored in the DB. You can make your own github repos for these.

1. Sign up for the [open weather API ](https://openweathermap.org/guide)
2. Use create-react-app to create client
3. client should allow input for a city name
4. clicking submit button will send request to open weather api
5. user should see main.temp and main.humidity
6. If user clicks save button, server/db should save city name, temp, humidity, and time in db
7. User should be able to view/delete saved searches

### How to run locally

The web app lets you search weather info based on a city and save searches to a database using node and knex. All data is fetched from the server (including data from OpenWeather to protect API key) for security purposes. I have left the .env for the server, so it can be run from a local machine.

1. Git clone the repository. git@github.com:daniel1dolan/Assessment-VH.git
2. Run: `npm run getDependencies`
3. Run: `npm run setupDB` to get a database on your local machine and run migrations.
4. Run: `npm run runApp`
5. React-app should pull up localhost:3000 to view the application, and the application should be up and running.

Possible issue: may run into issue if you have a database called WeatherApp on your local machine.
