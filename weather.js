// fetch data from restCountries API
var data = fetch('https://restcountries.eu/rest/v2/all');

data
.then(function(res){
    return res.json();
})
.then(function(res){
  //create conatainer
    var container = document.createElement('div');
    container.setAttribute('class','container bg-dark text-white');
    container.innerHTML="<h1>Countries Information With Live Weather Report</h1>";
    container.style.textAlign = "center";
// create row
    var row = document.createElement('row');
    row.setAttribute('class','row');
    //create card for each country
    for(let i in res){
    var col1 = document.createElement('col');
    col1.setAttribute('class','col-lg-4 col-sm-12');
   
    var card =  document.createElement('div');
    card.setAttribute('class','card');
    card.style.border = "2px solid black";
   

    var img = document.createElement("img");
    img.setAttribute("src",res[i].flag);
    

    var cardBody =  document.createElement('div');
    cardBody.setAttribute('class','card-body');
    
    var countryName =  document.createElement('h3');
    countryName.setAttribute('class','name text-success');
    countryName.innerHTML = res[i].name;

    var countryRegion =  document.createElement('h5');
    countryRegion.setAttribute('class','region text-info');
    countryRegion.innerHTML = res[i].region;

    var countryPopulation =  document.createElement('h5');
    countryPopulation.setAttribute('class','population text-warning');
    countryPopulation.innerHTML = res[i].population;
    
    var button =  document.createElement('button');
    button.setAttribute('class','btn btn-primary');
    button.innerHTML = "Weather";
    button.addEventListener('click',function(){
        getWeatherData(res[i].name);
    })
   
    
//append all element inside body
    cardBody.append(countryName , countryRegion , countryPopulation , button);
    card.append(img , cardBody);
    col1.append(card);
    row.append(col1);
    container.append(row);
    document.body.append(container);
    }

    //function to handle weather button
    function getWeatherData(button){
        //fetch data from open weather map
        var weatherData = fetch('https://api.openweathermap.org/data/2.5/weather?q=' +button+ '&appid=e4239a13ec2249d41db473766d8cd69d')
        weatherData
        
        .then(function(res){
            return res.json();
        })
        .then(function(res){
//display current temprature
             alert("temprature is: "+res.main.temp+" kelvin");
             //display longitude and latitude
             alert("longitude is: " +res.coord.lon + " " +"Lattitude is: "+  res.coord.lat);
    })
        
    }
    
})
.catch(function(err){
    console.log(err);
})


