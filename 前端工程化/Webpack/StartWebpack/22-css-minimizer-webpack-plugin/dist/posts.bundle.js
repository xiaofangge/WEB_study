"use strict";
(self["webpackChunk_21_dynamic_import"] = self["webpackChunk_21_dynamic_import"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _common_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _posts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    const posts = document.createElement('div')
    posts.className = 'posts'

    posts.innerHTML = '<h2>Posts</h2>'

    ;(0,_common_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/posts').then(data => {
        data.forEach(item => {
            const article = document.createElement('article')
            article.className = 'post'

            const h3 = document.createElement('h3')
            h3.textContent = item.title
            article.appendChild(h3)

            const paragraph = document.createElement('p')
            paragraph.textContent = item.body
            article.appendChild(paragraph)

            posts.appendChild(article)
        })
    })

    return posts
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endpoint => {
    return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
        .then(response => response.json())
});

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
]]);