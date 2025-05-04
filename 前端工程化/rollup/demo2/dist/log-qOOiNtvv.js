define(['exports'], (function (exports) { 'use strict';

    var fetchApi = endpoint => {
        return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(response => response.json())
    };

    const log = msg => {
        console.log("----------Log----------");
        console.log(msg);
        console.log("----------Log----------");
    };

    exports.fetchApi = fetchApi;
    exports.log = log;

}));
