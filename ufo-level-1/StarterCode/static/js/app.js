var tableData = data;
console.log(tableData);
//console.log(tableData);
// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append("tr");
    
    Object.entries(ufo).forEach(function([key,value])
    {console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    })
})

var button = d3.select("#filter-btn");
button.on("click", function(){
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    var filteredData = tableData.filter(record=>record.datetime===dateTime);
    console.log(filteredData);

    filteredData.forEach(function(selections){
        console.log(selections);

        var row = tbody.append("tr");

        Object.entries(selections).forEach(function([key, value]){
            console.log(key,value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});