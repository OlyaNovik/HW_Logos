import {CheckAdd} from './shop.js';
import {ShopBuy} from './shop.js';
import {CheckSklad} from './shop.js';

// Блок 1
let ShopForm = document.forms['container1'];
let Accaunt = ShopForm.accaunt;
let Beer = ShopForm.beer;
let Wine = ShopForm.wine;
let Pepsi = ShopForm.pepsi;

// Блок 2
let MenuForm = document.forms['container2'];
let Amount = MenuForm.amount;
let GoodsSelect = MenuForm.goods; //radiobutton with goods

let AddBTN = MenuForm.add;
let BuyBTN = MenuForm.buy;
let TextArea = document.querySelector('.textarea');

// Блок 3
let ListForm = document.querySelector('.three');

AddBTN.addEventListener('click', ()=>{
    CheckAdd(GoodsSelect,Amount,TextArea);
});   

BuyBTN.addEventListener('click', ()=>{
    ShopBuy(TextArea,ListForm);
    CheckSklad(Accaunt,Beer,Wine,Pepsi);
});