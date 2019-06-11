'use strict';

// Global variables
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeContainerUlEl = document.getElementById('pike');
var seaTacContainerUlEl = document.getElementById('seaTac');
var seattleCenterContainerUlEl = document.getElementById('seattleCenter');
var capitolHillContainerUlEl = document.getElementById('capitolHill');
var alkiContainerUlEl = document.getElementById('alki');

// Create store Objects

var pike = {
  name: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 64,
  avgCookiesPerSale: 6.3,
  randomCustomersPerHr : function() { // Generate random number of customers per hour.
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour;
  },
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  randomCustomersPerHr : function() { // Generate random number of customers per hour.
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour;
  },
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  randomCustomersPerHr : function() { // Generate random number of customers per hour.
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour;
  },
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  randomCustomersPerHr : function() { // Generate random number of customers per hour.
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour;
  },
};

var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  randomCustomersPerHr : function() { // Generate random number of customers per hour.
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour;
  },
  
};

var storeLocations = [pike, seaTac, seattleCenter, capitolHill, alki];
var storeContainers = [pikeContainerUlEl, seaTacContainerUlEl, seattleCenterContainerUlEl, 
  capitolHillContainerUlEl, alkiContainerUlEl];

// Helper function to calculate sales for each hour and return array.
function generateSalesPerHourArray (store) {
  var totalSales = 0;
  var salesPerHourArr = [];
  for (var i = 0; i < storeHours.length; i++) {
    // var uLEl = document.createElement('li');
    var currentHourSales = Math.round(store.randomCustomersPerHr() * store.avgCookiesPerSale);
    totalSales += currentHourSales;
    salesPerHourArr[i] = storeHours[i] + ': ' + currentHourSales + ' cookies';
  }
  store.total = totalSales;
  return salesPerHourArr;
}

// Call helper function to generate hourly sales for each store location 
// (calling generateSalesPerHourArray) and add it as property (.hourlySalesArr) of object.
for (var l = 0; l < storeLocations.length; l++) {
  var hrSalesArr = generateSalesPerHourArray(storeLocations[l]); //use helper function
  storeLocations[l].hourlySalesArr = hrSalesArr; //store it in each store object.
  var currContainer = storeContainers[l]; //grab container element.
  // Print each stores hourly sales in <li> 
  for (var r = 0; r < storeLocations[l].hourlySalesArr.length; r++){
    var liEL = document.createElement('li');
    liEL.textContent = storeLocations[l].hourlySalesArr[r];
    currContainer.appendChild(liEL);
  }
  var totalLiEL = document.createElement('li');
  totalLiEL.textContent = 'Total: ' + storeLocations[l].total + ' cookies';
  currContainer.appendChild(totalLiEL);
}
