(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 196:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Nav_navbar__1b6a7"
};


/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./lib/api/stocks.js
var stocks = __webpack_require__(907);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./components/Nav/index.module.scss
var index_module = __webpack_require__(196);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: ./components/Nav/index.js






function Navbar1() {
    const inputValue = (0,external_react_redux_.useSelector)((state)=>state.SearchReducer
    );
    const allStocks = (0,external_react_redux_.useSelector)((state)=>state.stocksReducer
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const con = (0,external_react_redux_.useSelector)((state)=>state.stockInfoReducer
    );
    const handleChange = (e)=>{
        dispatch(inputChange(e.target.value));
    };
    const handleClick = ()=>{
        if (allStocks.find((s)=>s.stock_id === inputValue
        )) {
            const info = allStocks.filter((s)=>s.stock_id === inputValue
            );
            dispatch(stockInfo(info[0]));
            router.push({
                pathname: '/stock',
                query: {
                    id: inputValue
                }
            });
        } else {
            external_sweetalert2_default().fire({
                icon: 'error',
                title: 'Oops...',
                text: '查無此股票代號!'
            });
        }
        dispatch(inputChange(''));
        inputValue = '';
    };
    const { navbar  } = (index_module_default());
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `${navbar} navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 border-bottom w-100`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand w-25",
                    href: "/",
                    children: "買賣力道基地"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex w-50 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-control me-1",
                            type: "search",
                            placeholder: "股票代號",
                            "aria-label": "Search",
                            value: inputValue,
                            onChange: handleChange
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-outline-success w-50",
                            onClick: handleClick,
                            children: "Search"
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const Nav = (Navbar1);

;// CONCATENATED MODULE: ./components/Layout/index.js


function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./lib/redux/reducers/getTtlStocksReducer.js
const getTtlStocksReducer = (state = '', action)=>{
    switch(action.type){
        case 'getTtlStocks':
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_getTtlStocksReducer = (getTtlStocksReducer);

;// CONCATENATED MODULE: ./lib/redux/reducers/getTtlCategoriesReducer.js
const getTtlCategoriesReducer = (state = '', action)=>{
    switch(action.type){
        case 'getTtlCategories':
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_getTtlCategoriesReducer = (getTtlCategoriesReducer);

;// CONCATENATED MODULE: ./lib/redux/reducers/getStockInfoReducer.js
const initialState = [];
const getStockInfoReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'StockInfo':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};
/* harmony default export */ const reducers_getStockInfoReducer = (getStockInfoReducer);

;// CONCATENATED MODULE: ./lib/redux/reducers/clickCategoryReducer.js
const clickCategoryReducer = (state = '', action)=>{
    switch(action.type){
        case 'categoryClick':
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_clickCategoryReducer = (clickCategoryReducer);

;// CONCATENATED MODULE: ./lib/redux/reducers/clickCategoryStocksReducer.js
const clickCategoryStocksReducer = (state = [], action)=>{
    switch(action.type){
        case 'clickCategoryStocks':
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const reducers_clickCategoryStocksReducer = (clickCategoryStocksReducer);

;// CONCATENATED MODULE: ./lib/redux/reducers/index.js






const allReducers = (0,external_redux_namespaceObject.combineReducers)({
    getTtlStocksReducer: reducers_getTtlStocksReducer,
    getTtlCategoriesReducer: reducers_getTtlCategoriesReducer,
    getStockInfoReducer: reducers_getStockInfoReducer,
    clickCategoryReducer: reducers_clickCategoryReducer,
    clickCategoryStocksReducer: reducers_clickCategoryStocksReducer
});
/* harmony default export */ const reducers = (allReducers);

;// CONCATENATED MODULE: ./lib/redux/store.js


const store = (0,external_redux_namespaceObject.createStore)(reducers);
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js

// pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907], () => (__webpack_exec__(107)));
module.exports = __webpack_exports__;

})();