// from HTML_column_data.js
const tableData = data;

// Add variables for paging
const pageSize = 25;
let curPage = 1;


// get table references
var tbody = d3.select("tbody");

// Add click handlers for the Next/Previous buttons
document.querySelector('#nextButton').addEventListener('click', nextPage, false);
document.querySelector('#prevButton').addEventListener('click', previousPage, false);



function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  data.filter((row, index) => {
    let start = (curPage-1)*pageSize;
    let end =curPage*pageSize;
    if(index >= start && index < end) return true;
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
  }).forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");

      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      });
    });
}


// Add functions for previous/next page buttons
function previousPage() {
  if(curPage > 1) curPage--;
  buildTable(tableData);
}

function nextPage() {
  if((curPage * pageSize) < data.length) curPage++;
  buildTable(tableData);
}


// Create a variable to keep track of all the filters as an object.
var filters = {};

// Use this function to update the filters. 
function updateFilters() {

    // Save the element that was changed as a variable.
    let filterInput = d3.select(this);

    // Save the value that was changed as a variable.
    let filterInputValue = filterInput.property("value");
    console.log(filterInputValue);

    // Save the id of the filter that was changed as a variable.
    let filterInputID = filterInput.attr("id");
    console.log(filterInputID);

    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
    if (filterInputValue) {
      filters[filterInputID] = filterInputValue;
    }

    else {delete filters[filterId];
    }

    // Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // Use this function to filter the table when data is entered.
  function filterTable() {
  
    // Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
  
      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
      });

    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // Attach an event to listen for changes to each filter
  d3.selectAll("input").on("click", updateFilters);
  

  // Build the table when the page loads
  buildTable(tableData);
