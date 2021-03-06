import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from "./js/exchange.js";

function clearOptions() {
  $('#dollars').val("");
  $('#country').val("");
}


$(document).ready(function() {
  $("#btn-calculate").click(function(){
    let usDollars = parseFloat($('#dollars').val()).toFixed(2);
    let country = $('#country').val();
    clearOptions();

    let promise = Exchange.getExchangeRate(country);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.conversion_rates && body.conversion_rates[country]) {
        $('#goodOutput').show();
        $('#rate').text((body.conversion_rates[country] * usDollars).toFixed(2));
        $('#countryCode').text(country);
        $('#errorOutput').hide();
      } else {
        $('#errorOutput').show();
        $('#goodOutput').hide();
        $('#showErrors').text(body["error-type"]);
      }
    }), function(error) {
      $('#output').show();
      $('.apiError').text(`There was an error processing your request: ${error}`);
    };
  });
});

