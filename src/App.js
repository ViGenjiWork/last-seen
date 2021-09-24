import React from 'react'

import './App.scss';

import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Route } from 'react-router-dom';
import { Product } from './pages/Product';
import { Cart } from './components/Cart/Cart';
import axios from 'axios';
import { Context } from './context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from './redux/actions/cartItems';

function App() {

  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  const dispatch = useDispatch()
  const cartItem = useSelector(({ cartItems }) => cartItems.items)

  React.useEffect(() => {

    // (async () => {
    //   try {
    //     const [cartResponse] = await Promise.all([
    //       axios.get('https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems')
    //     ])
    //     setCartItems(cartResponse.data)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })()
    dispatch(fetchCartItems)

  }, [])

  const removeCartItem = (id) => {
    try {
      axios.delete(`https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems/${id}`)
      setCartItems(prev => prev.filter(item => item.id !== id))
    }
    catch (e) {
      console.log(e);
    }
  }

  const addCartItem = (cartItem) => {
    try {
      axios.post('https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems', cartItem)
      setCartItems(prev => prev.filter(item => item.id !== cartItem.id))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Context.Provider value={{
      addCartItem
    }}>
      <div className="app">
        <Header
          onCLickCart={() => setCartOpened(!cartOpened)}
        />
        <Cart
          items={cartItems}
          opened={cartOpened}
          onCloseCart={() => setCartOpened(!cartOpened)}
          removeCartItem={removeCartItem}
        />
        <Route exact path='/last-seen/'>
          <Home />
        </Route>
        <Route path={`/products/`} >
          <Product />
        </Route>
      </div>
    </Context.Provider>

  );
}

export default App;
