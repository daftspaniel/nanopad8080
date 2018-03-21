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
    }

    update() {

    }
}

let app = new Notepad();