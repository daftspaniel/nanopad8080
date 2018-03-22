'use strict';

class Notepad {

    constructor() {
        this.stringProcess = new StringProcess(DefaultLineEnding);
        this.startMenu = new Menu('menu1');
        this.clear = new MenuItem('clear');
        this.editor = new Editor('editor1');
        this.dialog = new Dialog('dialog');
        this.statusPanel = new StatusPanel('statusbar');
        this.gui = [this.clear, this.startMenu, this.editor, this.dialog, this.statusPanel];
    }

    setupGUI() {
        this.gui.forEach(function (ctrl) {
            ctrl.setup();
        });
        this.editor.focus();
    }

    init() {
        this.setupGUI();
        var tmp = storage.getValue('note');
        if (tmp) {
            console.log('loaded:' + tmp)
        }
    }

    update() {

    }
}

let app = new Notepad();
let stringProcess = new StringProcess();
let storage = new Storage('nanopad');