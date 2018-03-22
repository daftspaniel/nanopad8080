'use strict';

class Storage {
    constructor(storename) {
        let result = undefined;
        if (localStorage[storename]) {
            result = JSON.parse(localStorage[storename]);
        }
        this.store = result === undefined ? {} : result;
        this.storename = storename;
    }

    getValue(key) {
        return this.store[key];
    }

    storeValue(key, value) {
        this.store[key] = value;
        this.saveStore();
    }

    saveStore() {
        localStorage[this.storename] = JSON.stringify(this.store);
    }
}

// const store1 = new Storage('test');
// store1.storeValue('hello', 'world');
// store1.storeValue('hello1', 'world2');
//
// const store2 = new Storage('test');
// // console.log(store1.getValue('hello'));
// // console.log(store1.getValue('hello1'));
// // console.log(store2.getValue('hello'));