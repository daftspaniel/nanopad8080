'use strict';

function showDialog() {
    getById('dialog').style.display = 'inline';
}

function hideDialog() {
    getById('dialog').style.display = 'none';
}

function start() {
    app.init();
}