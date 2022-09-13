// lets learn about map 
const x= new Map();
x.set('firstName','Himansh');
x.set('age',21);
x.set('hobby','science');
console.log(x);

const person1 ={
    id:1,
    'firstName':'Himansh'
};
const person2={
    id:2,
    'firstName' :'xyz'
};

const extraInfo = new Map()
    extraInfo.set(person1,{'age':21,'mobileNumber':9989});
    extraInfo.set(person2, {'age': 20,'mobileNumber':9999});
console.log(extraInfo.get(person1).age);
