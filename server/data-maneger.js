'use strict';

class DataManeger {
    constructor(model) {
        this.model = model;
    }
    read(_id) {
        if (_id) {
            return this.model.find({ _id });
        } else {
            return this.model.find({});
        }
    }
    creat(obj) {
        const doc = new this.model(obj);
        return doc.save();
    }
    update(_id, obj) {
        return this.model.findByIdAndUpdate(_id, obj, { new: true });
    }
    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}


module.exports = DataManeger;
