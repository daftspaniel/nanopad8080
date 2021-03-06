'use strict';

const DefaultLineEnding = '\r\n';

class StringProcess {
    constructor(lineEnding) {
        if (!lineEnding) {
            lineEnding = DefaultLineEnding;
        }
        this.lineend = lineEnding;
    }

    reverse(text) {
        return text.split('').reverse().join('');
    }

    trim(text) {
        return text.trim();
    }

    getWordCount(text) {
        return text.split(' ').length;
    }

    getLineCount(text) {
        return text.split('\n').length;
    }

}

//console.log(stringProcess.reverse('olleH'));
//console.log('[' + stringProcess.trim('  Hello   ') + ']');