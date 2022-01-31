import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showSummary = cartList.length > 0

      const renderPrice = () => {
        const priceList = cartList.map(each => {
          const {price, quantity} = each
          return price * quantity
        })
        const totalPrice = priceList.reduce((val1, val2) => val1 + val2)
        return totalPrice
      }

      const renderCartSummary = () => (
        <div className="cart-summary-background">
          <div className="cart-summary-card">
            <h1 className="order-total">
              Order Total: <span className="price">Rs {renderPrice()}/-</span>
            </h1>
            <p className="items-count">{cartList.length} items in cart</p>
            <button type="button" className="button">
              Checkout
            </button>
          </div>
        </div>
      )

      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          {showSummary ? renderCartSummary() : null}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
