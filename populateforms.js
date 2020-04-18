let cmbCity = d3.select("#cmbCity")
function populateCityCombo(){
    cmbCity.selectAll("option").remove()    
    let city = []
    //push all elements in an array
    tableData.forEach(function(d){
        city.push(d.city)
    })

    //putting array in set to get distinct records
    cmbCity.append("option").text("Select All")
    Array.from(new Set(city)).sort().forEach(function(d){
        cmbCity.append("option").text(d)
    })
}//populate CityCombo

let cmbState = d3.select("#cmbState")
function populateStateCombo(){
    cmbState.selectAll("option").remove()    
    let state = []
    //push all elements in an array
    tableData.forEach(function(d){
        state.push(d.state)
    })

    //array set up to get diff records
    cmbState.append("option").text("Select All")
    Array.from(new Set(state)).sort().forEach(function(d){
        cmbState.append("option").text(d)
    })
}//populates StateCombo

let cmbCountry = d3.select("#cmbCountry")
function populateCountryCombo(){
    cmbCountry.selectAll("option").remove()    
    let country = []
    //push all elements in an array
    tableData.forEach(function(d){
        country.push(d.country)
    })

    //array set up for display of diff records
    
    cmbCountry.append("option").text("Select All")
    Array.from(new Set(country)).sort().forEach(function(d){
        cmbCountry.append("option").text(d)
    })
}//populates CountryCombo


let cmbShape = d3.select("#cmbShape")
function populateShapeCombo(){
    cmbShape.selectAll("option").remove()    
    let shape = []
    //push all elements in an array
    tableData.forEach(function(d){
        shape.push(d.shape)
    })

    //array set up for diff display of records
    cmbShape.append("option").text("Select All")
    Array.from(new Set(shape)).sort().forEach(function(d){
        cmbShape.append("option").text(d)
    })
}//populates shapecombo
