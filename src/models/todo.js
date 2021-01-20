'use strict';

class ToDoModel {
    constructor() {
        this.text;
        this.completed;
        this.assignee;
        this.difficulty;
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
        // console.log(obj)
        if(!id) { return null; }
        let item = this.get(id);
        item.text = obj.text || item.text;
        item.assignee = obj.assignee || item.assignee;
        item.difficulty = obj.difficulty ||  item.difficulty;
        item.compeleted = obj.completed || item.completed;
        this.db[this.grabIndex(id)] = item;
        // console.log(obj)
        // console.log(pet)
        return item;

    }

    delete(id) {
        // console.log('DEL id ', id);
        if(!id){return null; }
        console.log('before ', this.db)
        this.db.splice(this.grabIndex(id),1);
        console.log('after ', this.db)
        return null;
    }

    grabIndex(id) {
        return this.db.findIndex(record => record.id === id);
    }
}


module.exports = ToDoModel;