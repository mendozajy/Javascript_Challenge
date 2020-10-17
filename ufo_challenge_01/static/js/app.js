// from data.js
var tableData = data;
tbody = d3.select("tbody");

// YOUR CODE HERE!

// Add Table Data Each time the page loads

tableData.forEach(item => {
// Add a new row to the table body
tablerow = tbody.append("tr");
Object.values(item).forEach(value => {
    // Add td tag for each item
    tabledata = tablerow.append("td");
    // Add the vaulue in the data file
    tabledata.text(value);   
});
});

// Creating a function to filter the table results based on date

function filtertable() {

  
    // Get the date entered in the datetime field
    date = d3.select("#datetime").property("value");

    // Filter the results in the data.js file that match the date entered
    filterData = tableData.filter((row) => row.datetime == date);
    // If there are results to show display as a new table
    if (filterData.length >= 1 ) {
     // clear the existing table
     tbody.html("");
   
    // Create the table for when the page loads
    filterData.forEach(item => {
        // Add a new row to the table body
    tablerow = tbody.append("tr");
    Object.values(item).forEach(value => {
            // Add td tag for each item
            tabledata = tablerow.append("td");
            // Add the value
            tabledata.text(value);
        });
    });

}
    // if there isn't results let the person know
    else {
        alert("No Data Found for that Date Please Pick a New One")
    }
   
// Find the button on the web page and tell it to run the function
// when clicked
d3.select("#filter-btn").on("click", filtertable)


}
