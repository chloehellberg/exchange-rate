export default class Exchange {  
  static getExchangeRate(country) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      console.log("key", process.env.API_KEY);
      request.onload = function() {
        if (this.status === 200) {     //&& request.response.conversion_rates[country] === undefined)
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}