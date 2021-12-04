// Loading the dependencies
// Axios for HTTP request, Cheerio for parsing markup, 
// Pretty for beautifying HTML and fs to write HTML into a new file 
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs");

// URL of the page to scrape
const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the above webpage
    const { data } = await axios.get(url);

    // Load HTML fetched in the previous line
    const $ = cheerio.load(data);

    //make the HTML readable
    const rawData = pretty($.html());
    console.log(rawData);

    // write a new local file with beautified HTML for original iframe
    fs.writeFile('data.html', rawData, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log("Successfully written data to file");
    });
    // write a new local file with beautified HTML for changing design iframe
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

// Call the above function to scrape data
scrapeData();