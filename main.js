// Value Type

let numValue1=10;
console.log(numValue1);//10
console.log(typeof(numValue1));//number

let numValue2=numValue1;//copy the Value
console.log(numValue2);//10

numValue2=20;
console.log(numValue2);//20

console.log(numValue1);//10

//Reference Type

function userModel(){
    this.firstName=undefined;
    this.lastName=undefined;
}

let userModelObj1=new userModel();
    userModelObj1.firstName="Nahid";//Set
    userModelObj1.lastName="Ansari";//Set

    console.log(userModelObj1.firstName);//Get
    console.log(userModelObj1.lastName);//Get

let userModelObj2=userModelObj1;//Copy Refer Instance 

    console.log(userModelObj2.firstName);//Nahid
    console.log(userModelObj2.lastName);//Ansari

    userModelObj2.firstName="Asra";
    userModelObj2.lastName="ansari";

    console.log(userModelObj2.firstName);//Asra
    console.log(userModelObj2.lastName);//ansari

    console.log(userModelObj1.firstName);//asra
    console.log(userModelObj1.lastName);//ansari

    let userModelObj3= new userModel();
       userModelObj3.firstName="Aliya";
       userModelObj3.lastName="Ansari";

       console.log(userModelObj3.firstName);//Aliya
       console.log(userModelObj3.lastName);//Ansari

       userModelObj3=userModelObj1;
       console.log(userModelObj3.firstName);//Asra 
       console.log(userModelObj3.lastName);//ansari

       console.log(userModelObj1.firstName);//Asra
       console.log(userModelObj3.lastName);//ansari