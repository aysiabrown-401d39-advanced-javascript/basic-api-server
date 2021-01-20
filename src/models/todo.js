'use strict';

class ToDoModel {
    constructor() {
        this._id = 0;
        this.complete;
        this.text;
        this.difficulty;
        this.assignee;
        this.db = [];
    }

    get(_id) {
        if(_id) {
           return  this.db.find(record => record._id == _id);
        } else {
            return this.db;
        }
    }

    create(obj) {  
        obj._id = ++this._id;
        this.db.push(obj);
        return obj;
    }

    update(_id, obj) {
        // console.log(obj)
        if(!_id) { return null; }
        let item = this.get(_id);
        item.text = obj.text || item.text;
        item.assignee = obj.assignee || item.assignee;
        item.difficulty = obj.difficulty ||  item.difficulty;
        item.complete = obj.complete == null || obj.complete == undefined ? item.complete : obj.complete;
        this.db[this.grabIndex(_id)] = item;
        // console.log(obj)
        // console.log(pet)
        return item;

    }

    delete(_id) {
        if(!_id){return null; }
        console.log('before ', this.db)
        this.db.splice(this.grabIndex(_id),1);
        console.log('after ', this.db)
        return null;
    }

    grabIndex(_id) {
        return this.db.findIndex(record => record._id === _id);
    }
}


module.exports = ToDoModel;