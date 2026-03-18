import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from './actions/counterActions';

/*    useSelector - é um hook Redux que permite selecionar dados do estado global do Redux; 
      useDispatch - é um hook Redux que permite disparar ações para modificar o estado global;
      
      espessura e desfoque utilizam o valor do contador para criar efeitos visuais dinâmicos    */


function App() {

  const contador = useSelector((state) => state.contador.contador);
  const dispatch = useDispatch();

  const espessura = Math.abs(contador) * 40;
  const desfoque = Math.abs(contador) * 20;

  
  return (
    <div className="tela-styles" style={{ 
        boxShadow: `
          inset 0 0 ${desfoque}px ${espessura}px #f564a9, 
          inset 0 0 ${desfoque * 1.5}px ${espessura / 2}px rgba(245, 100, 169, 0.6)
        ` 
      }}>
      <div className="contador-container">
        
        <button className="button-3d button-decremento" onClick={() => dispatch(decrementar())}>
          -
        </button>

        <p className="numero-styles">{ contador }</p>

        <button className="button-3d button-incremento" onClick={() => dispatch(incrementar())}>
          +
        </button>

      </div>
    </div>
  );

};


export default App;