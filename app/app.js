var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.js');

// Destruct
// var Provider  = require('react-redux').Provider;
var {Provider}  = require('react-redux');
var store = require('./reducers/reducer.js');

ReactDOM.render(
    <Provider store={store}  >
      <List />
      </Provider>,
  document.getElementById('root')
);



/*
    Toan tu 3 cham ...
    Pure function
*/
// var obj = {
//     name : "Khoa Pham",
//     age: 18
// }
// var obj2 = {...obj, age: 30};
//
// obj.age = 30;
//
// var mang = [1,2,3,4,5,6,7];
// var arr = [0,...mang, 8];
// mang[0] = 1000;
// console.log('Array: ', arr);
// console.log('Mang: ', mang);

// Pure function
// No effect
// No async task
// 1 input => 1 output

// var add = (a,b) =>{
//     return a + b;
// };
// console.log(add(3,4));
