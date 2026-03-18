import { INCREMENTAR, DECREMENTAR } from "../actions/counterActions";

const INITIAL_STATE = {
    contador: 0
};

/*      O reducer é parte que lida com as ações e os estados.
        O primeiro parâmetro define o estado inicial e ação
        retorna o novo estado. Quando reducer for chamado 
        novamente, o estado atual será o definido anteriormente.     */

const contadorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENTAR:
            return { ...state, contador: state.contador + 1 };
        case DECREMENTAR:
            return { ...state, contador: state.contador - 1 };
        default:
            return state;
    }
};

export default contadorReducer;