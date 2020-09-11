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
    let usDollars = $('#dollars').val();
    let country = $('#country').val();
    clearOptions();

    let promise = Exchange.getExchangeRate();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#rate').text(`Rate is ${body.conversion_rates}`);
    });
  });
});