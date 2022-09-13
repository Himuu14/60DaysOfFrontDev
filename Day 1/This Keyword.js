//This keyword

function personInfo() {
    console.log('My name is'+this.name +  " and my age is "+ this.age);
}

const person1={
    name:'Himansh Mishra',
    age: 21,
    about: personInfo
};
const person2={
    name:"xyz",
    age:30,
    about: personInfo 
}
person1.about();