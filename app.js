'use strict';

/*
Requirements:
  1) Display individual store data for Salmon Cookie Shops
  2) Store data in list format.
*/

var shop1 = {
  name: '1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 64,
  avgCookiesPerSale: 6.3,
  operatingHrsArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHrArr: [],
  //Function to calculate store's random number of customers per hour.
  calcRandomCustPerHr: function() {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr +1)) + this.minCustPerHr;
  },
  //Function to calculate cookies sold per hour.
  calcCookiesPerHr: function() {
    //Iterate through each open hour and calculate cookies sold.
    for (var i = 0; i < this.operatingHrsArr.length; i++) {
      var cust = this.calcRandomCustPerHr();
      var cookies = this.avgCookiesPerSale;
      this.cookiesPerHrArr[i] = Math.round(cust * cookies);
    }
  },
};

var shop2 = {
  name: 'SeaTac Airport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  avgCookiesPerSale: 1.2,
  operatingHrsArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHrArr: [],
  calcRandomCustPerHr: function() {
    // return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * (+this.maxCustPerHr - +this.minCustPerHr) + +this.minCustPerHr);
  },
  //Function to calculate cookies sold per hour.
  calcCookiesPerHr: function() {
    //Iterate through each open hour and calculate cookies sold.
    for (var i = 0; i < this.operatingHrsArr.length; i++) {
      var cust = this.calcRandomCustPerHr();
      var cookies = this.avgCookiesPerSale;
      this.cookiesPerHrArr[i] = Math.round(cust * cookies);
    }
  },
};

var shop3 = {
  name: 'Seattle Center',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  avgCookiesPerSale: 3.7,
  operatingHrsArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHrArr: [],
  calcRandomCustPerHr: function() {
    // return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * (+this.maxCustPerHr - +this.minCustPerHr) + +this.minCustPerHr);
  },
  //Function to calculate cookies sold per hour.
  calcCookiesPerHr: function() {
    //Iterate through each open hour and calculate cookies sold.
    for (var i = 0; i < this.operatingHrsArr.length; i++) {
      var cust = this.calcRandomCustPerHr();
      var cookies = this.avgCookiesPerSale;
      this.cookiesPerHrArr[i] = Math.round(cust * cookies);
    }
  },
};

var shop4 = {
  name: 'Capitol Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  avgCookiesPerSale: 2.3,
  operatingHrsArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHrArr: [],
  calcRandomCustPerHr: function() {
    // return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * (+this.maxCustPerHr - +this.minCustPerHr) + +this.minCustPerHr);
  },
  //Function to calculate cookies sold per hour.
  calcCookiesPerHr: function() {
    //Iterate through each open hour and calculate cookies sold.
    for (var i = 0; i < this.operatingHrsArr.length; i++) {
      var cust = this.calcRandomCustPerHr();
      var cookies = this.avgCookiesPerSale;
      this.cookiesPerHrArr[i] = Math.round(cust * cookies);
    }
  },
};

var shop5 = {
  name: 'Alki',
  minCustPerHr: 2,
  maxCustPerHr: 16,
  avgCookiesPerSale: 4.6,
  operatingHrsArr: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPerHrArr: [],
  calcRandomCustPerHr: function() {
    // return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * (+this.maxCustPerHr - +this.minCustPerHr) + +this.minCustPerHr);
  },
  //Function to calculate cookies sold per hour.
  calcCookiesPerHr: function() {
    //Iterate through each open hour and calculate cookies sold.
    for (var i = 0; i < this.operatingHrsArr.length; i++) {
      var cust = this.calcRandomCustPerHr();
      var cookies = this.avgCookiesPerSale;
      this.cookiesPerHrArr[i] = Math.round(cust * cookies);
    }
  },
};

//Array to store all shop locations
var shopLocationsArr = [shop1, shop2, shop3, shop4, shop5];
var shopLocationsArrString = ['shop1', 'shop2', 'shop3', 'shop4', 'shop5'];
//Run calcCookiesPerHr() function to populate cookiesPerHrArr array.
shop1.calcCookiesPerHr();
shop2.calcCookiesPerHr();
shop3.calcCookiesPerHr();
shop4.calcCookiesPerHr();
shop5.calcCookiesPerHr();

//Output each stores hourly totals for cookies sold.

// //ADD EACH SHOP'S NAME TO UNORDERED LISTS IN SALES.HTML

// for (var j = 0; j < shopLocationsArr.length; j++) {
//   var loc = shopLocationsArrString[j] + '-container';
//   //assign unorderdList element
//   var shopContainerUlEl = document.getElementById(loc);
//   //create h3 tag element
//   var h3El = document.createElement('h3');
//   //pass shopX.name to h3 element.
//   h3El.textContent = shopLocationsArr[j].name;
//   console.log(shopLocationsArr[j].name);
//   console.log(loc);
//   console.log(h3El);
//   //add listItem element to unorderedList element.
//   shopContainerUlEl.appendChild(h3El);
// }


//loop through array to output time & cookies sold.
for (var i = 0; i < shop1.operatingHrsArr.length; i++) {
  var hr = shop1.operatingHrsArr[i];
  var cookies = shop1.cookiesPerHrArr[i];
  console.log(hr + ': ' + cookies + ' cookies');
  var liEl = document.createElement('li');
  liEl.textContent = hr + ': ' + cookies + ' cookies';
  shop1ContainerUlEl.appendChild(liEl);
}


//assign unorderdList element
var shop1ContainerUlEl = document.getElementById('shop1-container');
//create h3 tag element
var h3El = document.createElement('h3');
//pass shopX.name to h3 element.
h3El.textContent = shop1.name;
//add listItem element to unorderedList element.
shop1ContainerUlEl.appendChild(h3El);

var shop2ContainerUlEl = document.getElementById('shop2-container');
h3El = document.createElement('h3');
h3El.textContent = shop2.name;
shop2ContainerUlEl.appendChild(h3El);

var shop3ContainerUlEl = document.getElementById('shop3-container');
h3El = document.createElement('h3');
h3El.textContent = shop3.name;
shop3ContainerUlEl.appendChild(h3El);

var shop4ContainerUlEl = document.getElementById('shop4-container');
h3El = document.createElement('h3');
h3El.textContent = shop4.name;
shop4ContainerUlEl.appendChild(h3El);

var shop5ContainerUlEl = document.getElementById('shop5-container');
h3El = document.createElement('h3');
h3El.textContent = shop4.name;
shop5ContainerUlEl.appendChild(h3El);
