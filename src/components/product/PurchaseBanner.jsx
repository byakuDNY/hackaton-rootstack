import React from 'react'

const PurchaseBanner = () => {
  return (
    <div>
        <p>US$ <span>17.99</span></p>
        <p>Entrega el miércoles, 30 de octubre</p>
        <form action="">
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" />
            <button>Agregar al carrito</button>
        </form>
    </div>
  )
}

export default PurchaseBanner