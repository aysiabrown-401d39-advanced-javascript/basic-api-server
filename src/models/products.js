class ProductsModel {
    constructor() {
        this._id = 0;
        this.category;
        this.title;
        this.price;
        this.img;
        this.count;
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
        let product = this.get(_id);
        product.category = obj.category || product.category;
        product.title = obj.title || product.title;
        product.price = obj.price ||  item.price;
        product.img = obj.img || product.img;
        product.count = obj.count || product.count;
        this.db[this.grabIndex(_id)] = product;
        // console.log(obj)
        // console.log(pet)
        return product;

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


module.exports = ProductsModel;