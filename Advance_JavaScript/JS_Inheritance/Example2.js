class Inheritance_defination{

    constructor(){

        this.heading = "Inheritance: ";
    }
    getDefination(){

        console.log(this.heading);
    }
}
class Theory extends Inheritance_defination{

    constructor(){

        super();
        this.text ="The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes."+ 
        " It provides flexibility to the child class to reuse the methods and variables of a parent class."+ 
        " ... It facilitates child class to acquire all the properties and behavior of its parent class."
    }

    getTheory(){

        console.log(this.text);
    }
}
I1 = new Theory();
I1.getDefination();
I1.getTheory();