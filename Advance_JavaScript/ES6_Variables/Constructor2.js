class Products{

    constructor(){

        this.realmex2=35000;
        this.samsungS20=50000;
        this.appleXR=75000;
    }
    getRealmeX2(){
        console.log(this.realmex2 * 2);
    }
    getSamsungS20(){
        console.log(this.samsungS20 + 5000);
    }
    getAppleXR(){
        console.log(this.appleXR ** 2);
    }
}
P1 = new Products();
P1.getRealmeX2();
P1.getSamsungS20();
P1.getAppleXR();