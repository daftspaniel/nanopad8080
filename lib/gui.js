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

    addEventListener(name, handler){
        getById(this.id).addEventListener(name,handler);
    }
}

class Dialog extends Widget {
    showDialog() {
        getById('dialog').style.display = 'inline';
    }

    hideDialog() {
        getById('dialog').style.display = 'none';
    }
}

class Menu extends Widget {
    menuexpand() {
        setHeight(this.id, 14 * 4 + 10);
    }

    menushrink() {
        setHeight(this.id, 14);
    }
}

class MenuItem extends Widget {
}

class StatusPanel extends Widget {

    update() {
        getById(this.id).innerText = 'BAA';
    }
}