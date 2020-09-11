# _Currency Exchange Calculator_

#### _Application that will allow a user to enter an amount in US dollars and find out the current exchange rate for other countries currencies using an API with real-time data, 9.11.2020_

#### By _**Chloe Hellberg**_

## Description

_This application uses the Exchange Rate free API to calculate in real time, the current exchange rate from US dollars to at least 5 different currencies. A user is able to type in an amount in U.S. dollars and then choose which currency it should be converted to and see the total amount they entered in converted currency. If the API call results in an error, the application should also return a notification to the user that states what the error is. If the query response doesn't include a particular currency, the application should also return a notification that states the currency in question doesn't exist._

## Setup/Installation Requirements

* _Open computer terminal_
* _Type "cd desktop", then press enter_
* _Type "git clone {URL}", then press enter_
* _Locate and open folder on desktop named "exchange-rate"_
* _User will need to make an account on ExchangeRate-API (https://www.exchangerate-api.com/) to get an API to run application_
  * _Input email address and click "Get Free Key" button_
  * _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
  * _At this point, you'll be able to access a dashboard taht includes your API key as well as your remaining API calls for the month."_
  * _Add API key to a .env file at the top level of your directory, naming it "API_KEY" to correctly match the API URL in the scripts.js file._
* _Once API is all set up, inside the folder named 'src', open the file named "index.html"_
* _Right click in the "index.html" file and choose "open with live server"_

_Please note: This requires a desktop and a web browser to run._

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you run into issues, please email chloe.hellberg@gmail.com with questions or concerns. Feel free to contribute to this code._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_
* _Exchange Rate API_
* _webpack_

### License

*MIT License*

Copyright (c) 2020 **_Chloe Hellberg_**
