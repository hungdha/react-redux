var redux = require('redux');

// Data sample
var contactsStateDefault = {
    contacts:
    [
        {
            "id": "59761c23b30d971669fb42ff",
            "isActive": true,
            "age": 36,
            "name": "Dunlap Hubbard",
            "gender": "male",
            "company": "CEDWARD",
            "email": "dunlaphubbard@cedward.com",
            "phone": "+1 (890) 543-2508",
            "address": "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
        },
        {
            "id": "59761c233d8d0f92a6b0570d",
            "isActive": true,
            "age": 24,
            "name": "Kirsten Sellers",
            "gender": "female",
            "company": "EMERGENT",
            "email": "kirstensellers@emergent.com",
            "phone": "+1 (831) 564-2190",
            "address": "886 Gallatin Place, Fannett, Arkansas, 4656"
        },
        {
            "id": "59761c23fcb6254b1a06dad5",
            "isActive": true,
            "age": 30,
            "name": "Acosta Robbins",
            "gender": "male",
            "company": "ORGANICA",
            "email": "acostarobbins@organica.com",
            "phone": "+1 (882) 441-3367",
            "address": "697 Linden Boulevard, Sattley, Idaho, 1035"
        }
    ]
};

// Transform with Array
var contactsReducer = (state = contactsStateDefault.contacts, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]

        case 'REMOVE_ITEM':
            return state.filter((e, i) => i != action.index)
        default:
            return state;

    }
}
// Check form isAdding show/hide
var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOOGLE_IS_ADDING':
            return !state;
        default:
            return state;
    }
}

// Combind Reducer
var reducer = redux.combineReducers({
    contacts: contactsReducer,
    isAdding: isAddingReducer
});

// var reducer = (state =defaultState , action) => {
//     switch (action.type) {
//         case 'TOOGLE_IS_ADDING':
//             return {...state, isAdding : !state.isAdding }
//             break;
//         case 'ADD_ITEM':
//             return {...state, mang:[...state.mang, action.item]}
//             break;
//         case 'REMOVE_ITEM':
//             return {...state, mang:state.mang.filter((e, i)=> i != action.index)}
//             break;
//         default:
//             break;
//     }
//     return state;
// }

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => {
    var str = store.getState();
    //document.getElementById('dev').innerHTML = JSON.stringify(str);
    console.log(str);
}
);

// console.log(store.getState());
//store.dispatch({type:'TOOGLE_IS_ADDING'});
// console.log(store.getState());
// store.dispatch({
//     type : 'ADD_ITEM',
//     item : 'Unity'
// });
// console.log(store.getState());
// store.dispatch({
//     type :'REMOVE_ITEM',
//     index : 1
// });
// console.log(store.getState());
module.exports = store;
