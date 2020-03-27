import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
   <Routes />
  );
}


/* CSS */

/* todos os elementos são display: flex por padrão */

/* Não existe herança de estilos no Reactive Native.
   Ou seja, um componente filho não herdará uma propriedade de um container
*/
