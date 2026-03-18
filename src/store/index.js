import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import contadorReducer from '../reducers/counterReducers';

/*      configureStore é uma função Redux que configura a store que é o estado global
        da aplicação. Ele recebe um objeto onde as chaves são o nome das funções que
        modificam o estado e seus valores são os reducers correspondentes.
        
        combineReducers é uma função que combina múltiplos reducers em um único reducer
        e recebe um objeto onde as chaves são os nomes dos estados e os valores 
        são os reducers correspondentes.

        É importado também o arquivo de reducer criado em ../reducers/counter               */

const reducers = combineReducers({ contador: contadorReducer });
const store = configureStore({ reducer: reducers });

export default store;