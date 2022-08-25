let chooseGoods = [0,0,0]; //масив для кількості обраних нами товарів
let SkladGoods = [100,50,80]; //масив складу товарів
let newGoods=[]; 
let TotalSum=0;

// функція додавання продукту в корзину
export function CheckAdd(goods,amount,area){
    //проходимся по нашим товарам та перевіряєм checked
    for(let i=0;i<goods.length;i++){
        if(goods[i].checked == true){
            chooseGoods[i]=amount.value;
            //перетворення масиву з кількостю вираних нами товарів в масив з числами
            newGoods=chooseGoods.map(elemets =>{
            let NumberofGoods=Number(elemets);
                return NumberofGoods;
            })
            //перевірка чи є стільки товару на складі, якщо так добавляєм в корзину
            if(SkladGoods[i]-newGoods[i] >= 0){
                let p = document.createElement('p');
                p.innerHTML = `${goods[i].value}: ${newGoods[i]} шт.`;
                area.appendChild(p); 
                SkladGoods[i]=SkladGoods[i]-newGoods[i];
            }
            //в інакшому випадку виводимо помилку
            else {
                alert('This product is no longer in stock');
                amount.value='';
                newGoods=false;
            }
        
        }
    }
}
// функція реалізації покупки, додавання товарів з корзини в список та підрахунок суми
export function ShopBuy(area,list){
    //якщо товар є на складі, робимо наступне: рахуємо суму товарів та додаємо їх у список
    if(newGoods !=false){
        let TotalBeer = newGoods[0] * 30;
        let TotalWine = newGoods[1] * 50;
        let TotalPepsi = newGoods[2] * 45;
        TotalSum = TotalBeer + TotalWine + TotalPepsi;
        
        list.innerHTML=area.innerHTML;
        let p = document.createElement('p');
        p.innerHTML = `Total: ${TotalSum} UAH`
        list.appendChild(p);
        area.innerHTML='';
        chooseGoods=[0,0,0];
    }
    
}
//функція перевірки товару на складі 
export function CheckSklad(Accaunt,TextBeer,TextWine,TextPepsi){
    // Якщо товар є на складі, віднімаємо його
    if(newGoods !=false){
        let AccauntNumber = Number(Accaunt.value);
        AccauntNumber += TotalSum;
        Accaunt.value = AccauntNumber;
        TextBeer.value = TextBeer.value - newGoods[0];
        TextWine.value = TextWine.value - newGoods[1];
        TextPepsi.value = TextPepsi.value - newGoods[2];
    }
}