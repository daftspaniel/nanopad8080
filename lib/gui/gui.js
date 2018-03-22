'use strict';

function getById(id) {
    return document.getElementById(id);
}

function setHeight(id, height) {
    getById(id).style.height = height + "px";
}

class Widget {
    constructor(id) {
        this.id = id;
    }

    addEventListener(name, handler) {
        this.control().addEventListener(name, handler);
    }

    control() {
        return getById(this.id);
    }

    setup() {
    }

    focus() {
        this.control().focus();
    }
}

class Dialog extends Widget {
    showDialog() {
        super.control().style.display = 'inline';
    }

    hideDialog() {
        super.control().style.display = 'none';
    }

    setup() {
        super.control().addEventListener('click', this.hideDialog);
    }
}

class StatusPanel extends Widget {

    update(data) {
        let text = 'Chars: ' + data.length + ' Lines: ' + stringProcess.getLineCount(data) + ' Words: ' + 2;
        super.control().innerText = text;
    }

    setup() {
        msgBus.subscribe('TEXT_CHANGE', (dp) => {
            this.update(dp);
        });
    }
}