//ex1
class Worker{
    constructor(firstName,SecondName,rate,days){
        this.firstName=firstName;
        this.SecondName=SecondName;
        this.rate=rate;
        this.days=days;
    }
    getSalary(){
        let salary=this.rate*this.days;
        return salary;

    }
}
const worker=new Worker('Ivan','Ivanov',10,31);
console.log(worker.firstName);
console.log(worker.SecondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

ex2
class MyString{
    constructor(){
    }
    reverse(str){
        let splitStr=str.split('');
        let reverseStr=splitStr.reverse('');
        let str2=reverseStr.join('');
        return str2;
    }
    ucFirst(str){
        let UpperStr=str[0].toUpperCase()+str.slice(1);
        return UpperStr;
    }
    ucWords(str){
        let UpperCase = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
        return UpperCase; 
    }

}

const string = new MyString();

console.log(string.reverse('ivan')); //виведе 'NAVI'
console.log(string.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(string.ucWords('arsenal ivan ivanov')); 


//ex3
class CoffeeMake {
    constructor(latte, kapuchino, americano, espresso, flatWhite){
        this.latte = latte;
        this.kapuchino = kapuchino;
        this.americano = americano;
        this.expresso = espresso;
        this.flatWhite = flatWhite;
    }
    on(){
        console.log('method_on');

    };
    off(){
        console.log('method_off');
    };
}

class Dropper extends CoffeeMake {
    constructor(latte, kapuchino, americano, espresso, flatWhite,heater,water){
    super(latte, kapuchino, americano, espresso, flatWhite)
    this.heater=heater;
    this.water=water;
    } 
}

class Horner extends CoffeeMake {
constructor(latte, kapuchino, americano, espresso, flatWhite,grain){
    super(latte, kapuchino, americano, espresso, flatWhite)
    this.grain=grain;

    } 
}

class CoffeeMachine extends CoffeeMake {
    constructor(latte, kapuchino, americano, espresso, flatWhite,property){
        super(latte, kapuchino, americano, espresso, flatWhite)
        this.property=property;
    
        } 
}