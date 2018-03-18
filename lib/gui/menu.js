class Menu extends Widget {
    menuexpand() {
        setHeight(this.id, 14 * 4 + 10);
    }

    menushrink() {
        setHeight(this.id, 14);
    }

    setup() {
        super.control().addEventListener('mouseover', this.menuexpand);
        super.control().addEventListener('mouseleave', this.menushrink);
    }
}

class MenuItem extends Widget {
    setup() {
        super.control().addEventListener('click', function () {
            console.log('asdf');
        });
    }
}
