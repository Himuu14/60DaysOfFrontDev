let xp=0;
let health =100;
let gold =50;
let currentWeapon =0;
let fighting;
let monsterHealth;
let inventory ="stick";

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterstats = document.querySelector('#monsterstats');
const  monsterNameText= document.querySelector('#monsterNameText');
const monsterHealthText = document.querySelector('#monsterHealthText');

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick =fightDragon;

function goStore() {
    button1.innerText="Buy 10 health (10 Gold)";
    button2.innerText="Buy Weapon (30 Gold)";
    button3.innerText="Go To TownSquare";
    button1.onclick = BuyHealth;
    button2.onclick = BuyWeapon;
    button3.onclick = GoTownSquare;
    text.innerText="Welcome to store ";
}

function goCave (){
    console.log("Going to Cave");
}

function fightDragon (){
    console.log("fighting dragon");
}

function BuyHealth() {
console.log("Buying health");    
}
function BuyWeapon() {
    console.log("Buying weapon");
    
}
function GoTownSquare() {
    console.log("Going to TownSquare");
    
}