define(['exports'], (function (exports) { 'use strict';

    const log = msg => {
        console.log("----------Log----------");
        console.log(msg);
        console.log("----------Log----------");
    };

    exports.log = log;

}));
