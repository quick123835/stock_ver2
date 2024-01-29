exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 671:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ListItem_card__jqs9j",
	"cardName": "ListItem_cardName__3tcdo",
	"counts": "ListItem_counts__gWOfl",
	"red": "ListItem_red__3be1z"
};


/***/ }),

/***/ 960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(671);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(418);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_redux_actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(983);






const { card , cardName , counts , red  } = (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default());
const ListItem = ({ item: item1 , stocks , onStockClick  })=>{
    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const pathname = router.pathname;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const handleCategoryClick = (item, categoryStocks)=>{
        dispatch((0,_lib_redux_actions_actions__WEBPACK_IMPORTED_MODULE_5__/* .clickCategory */ .jc)(item));
        dispatch((0,_lib_redux_actions_actions__WEBPACK_IMPORTED_MODULE_5__/* .clickCategoryStocks */ .$g)(categoryStocks));
        router.push('/category');
    };
    if (pathname === '/') {
        const categoryStocks = stocks.filter((stock)=>stock.industry_category === item1
        );
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: card,
            onClick: ()=>{
                handleCategoryClick(item1, categoryStocks);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: cardName,
                    children: item1
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: counts,
                    children: [
                        categoryStocks.length,
                        "檔股票"
                    ]
                })
            ]
        }));
    } else if (pathname === '/category') {
        if (item1.pressure && item1.pressure.length > 0) {
            const date = new Date(item1.pressure[0]);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以+1，并转换为两位字符串
            const day = date.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}/${month}/${day}`;
            const roundedNumber = Number(item1.pressure[1]).toFixed(4);
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${card} ${roundedNumber <= 0.6 && red} `,
                onClick: ()=>{
                    onStockClick === null || onStockClick === void 0 ? void 0 : onStockClick(item1.id, item1.name);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: cardName,
                        children: item1.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "代碼: ",
                            item1.id
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "時間: ",
                            formattedDate
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "力道: ",
                            roundedNumber
                        ]
                    })
                ]
            }));
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);


/***/ }),

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qu": () => (/* binding */ getTotalStocks),
/* harmony export */   "vp": () => (/* binding */ getTtlCategories),
/* harmony export */   "GB": () => (/* binding */ StockInfo),
/* harmony export */   "jc": () => (/* binding */ clickCategory),
/* harmony export */   "$g": () => (/* binding */ clickCategoryStocks)
/* harmony export */ });
const getTotalStocks = (stocks)=>{
    return {
        type: 'getTtlStocks',
        payload: stocks
    };
};
const getTtlCategories = (categories)=>{
    return {
        type: 'getTtlCategories',
        payload: categories
    };
};
const StockInfo = (stockInfo)=>{
    return {
        type: 'StockInfo',
        payload: stockInfo
    };
};
const clickCategory = (category)=>{
    return {
        type: 'categoryClick',
        payload: category
    };
};
const clickCategoryStocks = (stocks)=>{
    return {
        type: 'clickCategoryStocks',
        payload: stocks
    };
};


/***/ })

};
;