// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");

// URL of the page we want to scrape
const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    const rawData = pretty($.html());
    console.log(rawData);
    // Select all the list items in plainlist class
    // const listItems = $(".plainlist ul li");
    // // Stores data for all countries
    // const countries = [];
    // // Use .each method to loop through the li we selected
    // listItems.each((idx, el) => {
    //   // Object holding data for each country/jurisdiction
    //   const country = { name: "", iso3: "" };
    //   // Select the text content of a and span elements
    //   // Store the textcontent in the above object
    //   country.name = $(el).children("a").text();
    //   country.iso3 = $(el).children("span").text();
    //   // Populate countries array with country data
    //   countries.push(country);
    // });
    // Logs countries array to the console
    // console.dir(countries);
    // Write countries array in countries.json file
    fs.writeFile('data.html', rawData, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log("Successfully written data to file");
    });
    fs.writeFile('data2.html', rawData, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log("Successfully written data to file");
    });
    } 
    catch (err) {
        console.error(err);
  }
}
// Invoke the above function
scrapeData();