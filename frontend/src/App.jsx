import React from 'react';
import ProductoForm from './components/ProductoForm';
import ProductoLista from './components/ProductoLista';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Stock Lexus</h1>
      <ProductoForm />
      <hr />
      <ProductoLista />
    </div>
  );
}

export default App;
