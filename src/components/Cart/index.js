import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, clearCartList} = value
      const showEmptyView = cartList.length === 0
      const clearCart = () => {
        clearCartList()
      }

      const renderCartAndRemoveAll = () => (
        <div className="remove-container">
          <h1 className="cart-heading">My Cart</h1>
          <p className="remove-text" onClick={clearCart}>
            Remove All
          </p>
        </div>
      )

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                {renderCartAndRemoveAll()}
                <CartListView />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
