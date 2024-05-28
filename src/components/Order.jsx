import React, { useState, useEffect } from 'react';

const PizzaOrder = (props) => {
  const [orderLoaded, setOrderLoaded] = useState(false);
  const [orderCanceled, setOrderCanceled] = useState(false);

  
  useEffect(() => {
    // Solo establecer el temporizador si el pedido ha sido cancelado o si es la primera carga
    if (!orderLoaded || orderCanceled) {
      const timer = setTimeout(() => {
        setOrderLoaded(true);
        setOrderCanceled(false); // Resetear el estado de cancelación después de cargar
      }, 2000);

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [orderLoaded, orderCanceled]);

  // useEffect para imprimir en la consola cuando el componente se actualiza
  useEffect(() => {
    if (orderLoaded) {
      console.log('Componente actualizado');
    }
  }, [orderLoaded]);

  // Función para manejar el clic en el botón de cancelar
  const handleCancelOrder = () => {
    alert('Pedido cancelado');
    setOrderLoaded(false);
    setOrderCanceled(true); // Indicar que el pedido ha sido cancelado
  };

  return (
    <div>
      {orderLoaded ? (
        <p>Pizza</p>
      ) : (
        <p>Cargando pedido...</p>
      )}
      <button onClick={handleCancelOrder}>Cancelar Pedido</button>
    </div>
  );
};

export default PizzaOrder;
