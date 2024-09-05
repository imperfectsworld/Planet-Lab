let planets = [
    {name: "Mercury" , inner: true, diameter: 3031.9, color: "#696969"},
    {name: "Venus" , inner: true, diameter: 7520.8, color: "#b89165"},
    {name: "Earth" , inner: true, diameter: 7917.5, color: "#5a5b86"},
    {name: "Mars" , inner: true, diameter: 4212.3, color: "#df8c4e"},
    {name: "Jupiter" , inner: false, diameter: 86881, color: "#f6a049"},
    {name: "Saturn" , inner: false, diameter: 72367, color: "#dcd3a1"},
    {name: "Uranus" , inner: false, diameter: 31518, color: "#696969"},
    {name: "Neptune" , inner: false, diameter: 30599, color: "#456eff"}
    
];

for(let i = 0; i < planets.length; i++)
{
    console.log(planets[i].name);
}


function avgDiameter(planets){
let totalAvg = 0;
    for(let i = 0; i < planets.length; i++)
        {
            totalAvg+= planets[i].diameter; 
        }
        totalAvg = totalAvg / 8;
        return totalAvg;
}

let avg = avgDiameter(planets);
console.log(`Average Diameter: ${avg}`);

let index = 0;
document.querySelector("#indexCount").textContent = "Index: " + index ;

let indexOutput = document.querySelector("#indexCount");


document.querySelector("#planetName").textContent = planets[index].name;

let planetNameOutput = document.querySelector("#planetName");

let iButtonNode = document.querySelector("#increase");
let dButtonNode = document.querySelector("#decrease");
let planetCircle = document.querySelector("#planetCircle");
/*
function updatePlanetDisplay(){
    for(let i = 0; i < planets.length; i++) {
         planetCircle.color = planets[i].color;
        
      }
}
*/

function increaseIndex()
{   
    
    if (index < 8)
        {
            index++;
            planetNameOutput.textContent = planets[index].name;
            indexOutput.textContent = "Index: " + index;
            //planetCircle.color = planets[index].color;
        }
        dButtonNode.disabled =  (index === 0);
        iButtonNode.disabled = (index === planets.length);
        
}

function decreaseIndex()
{    
    if (index > 0)
    {
        index--;
        planetNameOutput.textContent = planets[index].name;
        indexOutput.textContent = "Index: " + index;
       // planetCircle.color = planets[index].color;
    }
    iButtonNode.disabled = (index === planets.length);
    dButtonNode.disabled =  (index === 0);
    
}

