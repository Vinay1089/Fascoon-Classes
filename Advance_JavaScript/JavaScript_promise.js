var promise = new Promise (function(resolve, reject){

    const a = "Virat Kohli";
    const b = "Virat Kohli";
    if(a===b){

        resolve();
    }
    else{
    
        reject();
    }
})

promise.then(function(){

    console.log("This promise got resolved");
}).catch(function(){

    console.log("This promise got reject. Due to some error!");
})