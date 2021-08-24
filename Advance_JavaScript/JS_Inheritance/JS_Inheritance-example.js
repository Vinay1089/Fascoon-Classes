class Family{
    constructor(){
        this.members = 3
        this.names = ["Vinay "+ "Sandeep "+ "Shobha"]; 
    }

    getFamilyNames(){

        console.log("In a family we are 3. " + this.names);
    }
}
class Introduction extends Family{
    constructor(){
       super();
       this.location = "Hyderabad";
    }
    getCurrentLocation(){

        console.log("We are located in " + this.location);
    }

}
F1 = new Introduction();
F1.getFamilyNames();
F1.getCurrentLocation();