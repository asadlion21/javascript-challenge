// from data.js
var tableData = data;

//console.log(tableData);
// YOUR CODE HERE!

//creating references
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFeildDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings =>{
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });

}

addData(tableData);

//creating event listener for the button
//setting up filter button 

button.on("click", () => {
    d3.event.preventDefault();

    var inputDate = inputFeildDate.property("value").trim();
    //console.log(inputDate)
    




}



)
