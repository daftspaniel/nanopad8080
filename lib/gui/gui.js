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

    update() {
        super.control().innerText = 'BAA';
    }

    setup() {
    }
}