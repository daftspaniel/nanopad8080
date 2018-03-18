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
        console.log('CHANGE!', super.control().value);
    }
}
