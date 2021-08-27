//JSON objects:
let player ={

    "Name":"Rohit Sharma",
    "Role":"Opening Batsman",
    "Designation":"Vice Captain"
}
//Print the JSON object:
    console.log(player.Name+" is the best "+ player.Role+" in the World. He is the "+player.Designation+" of the Indian Cricket Team.");
//JSON Arreys:
const players=[
    
    {"Name":"Virat Kohli","Role":"Batsman","Designation":"fourthIndia skipper ICC ranking","Centuries":70},
    {"Name":"Lokesh Rahul","Role":"Batsman","Designation":"Assistant Manager, Reserve Bank of India","Centuries":11},
    {"Name":"MS.Dhoni","Role":"Wicket Keeper Batsman","Designation":"Lieutenant Colonel in the Territorial Army","Centuries":16},
    {"Name":"Sachine Tendulkar","Role":"Batsman","Designation":"honorary rank of group captain by the Indian Air Force","Centuries":100}

]
players.forEach(function(Cricketers){
console.log(Cricketers.Name+" is on of the best "+ Cricketers.Role+" in the World. He is the "
+Cricketers.Designation+". He has "+Cricketers.Centuries+" Centuries in Cricket.");
})
