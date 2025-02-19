import React,{ useState } from 'react'
import Order from './Order'

const showOrders = (props) => {
  let summa=0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))} 
    <p className='summa'>Итого: ${new Intl.NumberFormat().format(summa)}</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Корзина пуста (купите ножики, ёжик грусни)</h2>
  </div>)
}

export default function Header(props) {
let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div className='log'>
          <div className='ezhik'></div> <a href='' className='logo'>Ёжик-ножик</a>
        
        <ul className='nav'>
          <li>Каталог</li>
          <li>Доставка и оплата</li>
          <li>Гарантия</li>
          <li>О нас</li>
        </ul>
        <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
          </div>
        )}
        </div>
        
        <div className='presentation'></div>
        <div className='notifications'></div>
    </header>
  )
}
