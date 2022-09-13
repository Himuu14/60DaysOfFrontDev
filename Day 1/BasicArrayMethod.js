const x=[1200,400,500,200,1000];
x.sort();
console.log(x);

const number =[1200,400,500,200,1000];
number.sort((a,b)=>{
    return a-b;
});
console.log(number);


const products=[
    {p_id:1,productName:"mobile",P_price:12000},
    {p_id:2,productName:"laptop",P_price:38000},
    {p_id:3,productName:"trimmer",P_price:1500}
];

products.sort((a,b)=>{
    return a.P_price-b.P_price
});
console.log(products);

const lowToHigh =products.slice(0).sort((a,b)=>{
    return a.P_price - b.P_price
});
console.log(lowToHigh);

const highToLow =products.slice(0).sort((a,b)=>{
    return b.P_price - a.P_price
});
console.log(highToLow);
console.log(products);