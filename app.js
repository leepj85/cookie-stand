'use strict';

// Global variables
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStoreHourlyTotals = [];

// Modify Object Literals to Contructor
var SalmonStore = function(name, minCustPerHour, maxCustPerHour, avgCookiesPerSale) 
{
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlySalesArr = [];
  this.randomCustomersPerHr = function() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour +1)) + this.minCustPerHour; 
  };
  SalmonStore.storeLocations.push(this);

  // Function to traverse sales-table and add hourly sales data
  this.render = function () {
    calculateDailySales();
    // Adding SalmonStore name
    var tableEl = document.getElementById('sales-table');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
    // Looping through SalmonShops hourlySalesArray and add to table
    for (var i = 0; i < this.hourlySalesArr.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySalesArr[i];
      trEl.appendChild(tdEl);
      tableEl.appendChild(trEl);
    }
    // Adding daily total sales at right-end of table
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalSales;
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
  };
};
// Array of Store Objects
SalmonStore.storeLocations = [];

// Creating SalmonStore Objects using Constructor
var pike = new SalmonStore('1st and Pike', 23, 64, 6.3);
var seaTac = new SalmonStore('SeaTac Airport', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
var seattleCenter = new SalmonStore('Seattle Center', 11, 38, 3.7);
// eslint-disable-next-line no-unused-vars
var capitolHill = new SalmonStore('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonStore('Alki', 2, 16, 4.6);

function calculateDailySales () {
  // Calculating hourly totals from all stores.
  var sum=0;
  for (var h = 0; h < storeHours.length; h++) {
    for (var c = 0; c <SalmonStore.storeLocations.length; c++) {
      sum += SalmonStore.storeLocations[c].hourlySalesArr[h];
    }
    allStoreHourlyTotals[h] = sum;
    sum=0;
  }
}

// Helper function to calculate store sales for each hour and returns array
function generateSalesPerHour (store) {
  let total = 0;
  let salesPerHourArr = [];
  for (var i = 0; i < storeHours.length; i++) {
    var currentHourSales = Math.round(store.randomCustomersPerHr() * store.avgCookiesPerSale);
    total += currentHourSales;
    salesPerHourArr[i] = currentHourSales;
  }
  // Adding new property totalSales to SalmonStore
  store.totalSales = total;
  return salesPerHourArr;
}

function headerRender() {
  // Adding location column
  var tableEl = document.getElementById('sales-table');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Locations';
  trEl.appendChild(tdEl);

  // Looping to add all open hours columns
  for (var e = 0; e < storeHours.length; e++) {
    tdEl = document.createElement('td');
    tdEl.textContent = storeHours[e];
    trEl.appendChild(tdEl);
  }
  // Adding column for store totals
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  console.log(trEl);
  // Appending <tr> back to the table.
  tableEl.appendChild(trEl);
}

function footerRender() {

  // Adding Totals column
  var tableEl = document.getElementById('sales-table');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);

  var summation=0;
  for (var t = 0; t < allStoreHourlyTotals.length; t++) {
    tdEl = document.createElement('td');
    summation += allStoreHourlyTotals[t];
    tdEl.textContent = allStoreHourlyTotals[t];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = summation;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);
}

// ONLY USE WHEN ADDING NEW STORE
// Deletes all current rows in table 'sales-table.
function deleteTableRows() {
  var tempTable = document.getElementById('sales-table');
  while (tempTable.hasChildNodes()) {
    tempTable.removeChild(tempTable.firstChild);
  }
}

function start() {
// Call helper function (generateSalesPerHour) to generate hourly sales for each store location
// and add it to SalmonStore property hourlySalesArr).
  for (var l = 0; l < SalmonStore.storeLocations.length; l++) {
    var tempSalesArr = generateSalesPerHour(SalmonStore.storeLocations[l]); //use helper function

    // Adding new array property (hourlySalesArr) to SalmonStore object.
    SalmonStore.storeLocations[l].hourlySalesArr = tempSalesArr;
  }
  // Calling headerRender() function to create column headers for table
  headerRender();

  // Calling SalmonStore render() method for all stores
  for (var s = 0; s < SalmonStore.storeLocations.length; s++) {
    SalmonStore.storeLocations[s].render();
  }
  // Calling footerRender() function to create total rows for table
  footerRender();
}

// Calling start() function to initialize table rendering.
start();

// Grabbing input values from 'store-form' on sales.html
var storeForm = document.getElementById('store-form');

storeForm.addEventListener('submit', function(event){
  event.preventDefault();
  var newStore = new SalmonStore(event.target.storeName.value, event.target.minCustomer.value, event.target.maxCustomer.value, event.target.avgCookie.value);
  newStore.hourlySalesArr = generateSalesPerHour(newStore);
  deleteTableRows();
  start();
});
