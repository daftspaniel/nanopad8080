'use strict';

class Editor extends Widget {
    constructor(id) {
        super(id);
        this.boundData = new BoundData();
    }

    onKeyUp() {
    }

    setup() {
        this.control().addEventListener('keyup', this.changeHandler);
    }

    changeHandler() {
        let value = super.control().value;
        msgBus.post('TEXT_CHANGE', value);
        storage.storeValue('note', value);
    }
}
