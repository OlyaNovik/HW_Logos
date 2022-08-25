 class Human{
     constructor( weight,height,color_hair,color_body){
         this.weight=weight;
         this.height=height;
         this.color_body=color_body;
         this.color_hair=color_hair;
     }
     Talk_skill(){
         console.log('talk-skill is true');
     }
     Walk_skill(){
        console.log('walk-skill is true');
    }
 }

 class Man extends Human{
     constructor(weight,height,color_hair,color_body,sex,muscles){
         super(weight,height,color_hair,color_body);
         this.sex=sex;
         this.muscles=muscles;
     }
     WorkOut(){
        this.muscles++;
        console.log('work out:', this.muscles);
     }

}

 class Woman extends Human{
    constructor(weight,height,color_hair,color_body,sex,child){
        super(weight,height,color_hair,color_body);
        this.sex=sex;
        this.child=child;
    }
    HaveChild(){
        console.log('have child', this.child);
    }
}

class Librarian extends Woman{
    constructor(weight,height,color_hair,color_body,sex,child,time_work,place_work){
        super(weight,height,color_hair,color_body,sex,child);
        this.time_work=time_work;
        this.place_work=place_work;
    }
    Job(){
        console.log('I am librarian');
    }
}
class Nurse extends Woman{
    constructor(weight,height,color_hair,color_body,sex,child,patient){
        super(weight,height,color_hair,color_body,sex,child);
        this.patient=patient;
    }
}
class Hunter extends Man{
    constructor(weight,height,color_hair,color_body,sex,muscles,type,experience){
        super(weight,height,color_hair,color_body,sex,muscles);
        this.experience=experience;
        this.type=type;
    }
    TypeHunter(){
        console.log('Hunter is', this.type);
    }
}
class Worker extends Man{
    constructor(weight,height,color_hair,color_body,sex,muscles,type_worker){
        super(weight,height,color_hair,color_body,sex,muscles);
        this.type_worker=type_worker
    }
    HaveHead(){
    console.log('the worker has two directors');
    }

}
const Ivan= new Hunter(100,200,'white','light','man','yes','hunter animal','2 years');
console.log(Ivan);
2

class Animal{
    constructor(run,fur,hunter_skill,kind,paw,wings){
        this.run=run;
        this.fur=fur;
        this.hunter_skill=hunter_skill;
        this.kind=kind;
        this.paw=paw;
        this.wings=wings;
    }
    Avaible(){
        console.log('run-', this.run);
        console.log('fur-', this.fur);
        console.log('paw-', this.paw);
        console.log('wings-', this.wings);
    }
}
class Herbivorous extends Animal{
constructor(run,fur,hunter_skill,kind,paw,wings,food,plant){
    super(run,fur,hunter_skill,kind,paw,wings)
    this.food=food;
    this.plant=plant;
}
    NeedHunt(){
    this.hunter_skill=null;
    console.log('This type animal does not hunt');
    }
}
class Predator extends Animal{
    constructor(run,fur,hunter_skill,kind,paw,wings,meat,insects){
        super(run,fur,hunter_skill,kind,paw,wings)
        this.meat=meat;
        this.insects=insects;
    }
    WhatEat(){
        console.log(this.meat,this.insects);
    }

}
class Elk extends Herbivorous{
    constructor(run,fur,hunter_skill,kind,paw,wings,food,plant,elktype,ages){
        super(run,fur,hunter_skill,kind,paw,wings,food,plant)
        this.elktype=elktype;
        this.ages=ages;
        
}}
class Rabbit extends Herbivorous{
    constructor(run,fur,hunter_skill,kind,paw,wings,food,plant,rabbittype,ages){
        super(run,fur,hunter_skill,kind,paw,wings,food,plant)
        this.rabbittype=rabbittype;
        this.ages=ages;    
}
}
class Wolf extends Predator{
    constructor(run,fur,hunter_skill,kind,paw,wings,food,plant,wolftype,ages){
        super(run,fur,hunter_skill,kind,paw,wings,food,plant)
        this.wolftype=wolftype;
        this.ages=ages;    
}
}

class Lion extends Predator{
    constructor(run,fur,hunter_skill,kind,paw,wings,food,plant,liontype,ages){
        super(run,fur,hunter_skill,kind,paw,wings,food,plant)
        this.liontype=liontype;
        this.ages=ages;    
}
}