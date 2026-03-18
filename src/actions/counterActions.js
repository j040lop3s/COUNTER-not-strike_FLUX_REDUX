/*  Actions são funções que retornam objetos   */


export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';

/*  'type' faz referência ao tipo da ação 
    também pode receber 'payload' referente
    ao conteúdo que será útil na ação    */

export const incrementar = () => ( { type : INCREMENTAR } );
export const decrementar = () => ( { type : DECREMENTAR} );