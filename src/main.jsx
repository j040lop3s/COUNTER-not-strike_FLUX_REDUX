import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

/*      É importante prover a store para que a aplicação fique ciente dela.
        O Provider é um componente do React-Redux que torna a store do Redux 
        disponível para os componentes filhos. 
        
        Ele recebe a store como uma prop e envolve o componente App, 
        permitindo que o App e seus componentes filhos acessem o estado 
        global da aplicação e despachem ações para modificar esse estado.         */