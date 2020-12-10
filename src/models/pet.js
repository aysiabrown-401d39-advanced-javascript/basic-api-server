'use strict';

class PetModel {
    constructor() {
        this.name;
        this.type;
        this.age;
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
           return  this.db.find(record => record.id == id);
        } else {
            return this.db;
        }
    }

    create(obj) {  
        obj.id = ++this.id;
        this.db.push(obj);
        return obj;
    }

    update(id, obj) {
        if(!id) { return null; }
        let pet = this.get(id);
        pet.name = obj.name || pet.name;
        pet.type = obj.type || pet.type;
        pet.age = obj.age ||  pet.age;
        this.db[this.grabIndex(id)] = pet;
        return obj;

    }

    delete(id) {
        console.log('DEL id ', id);
        if(!id){return null; }
        this.db.splice(this.grabIndex(id),1);
        return null;
    }

    grabIndex(id) {
        return this.db.findIndex(record => record.id === id);
    }
}


module.exports = PetModel;