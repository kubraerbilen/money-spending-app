import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(1000000);
  const [basket , setBasket] = useState([]);
  const [total , setTotal] = useState(0);

  useEffect(() => {
    setTotal(basket.reduce((acc,item) =>{
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))
  },[basket]);

  const resetBasket = () =>{
    setBasket([])
  }
  return (
    <>
      <Header total={total} money={money} />
      <div className='container products'>
      {products.map(product => (
        <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product} />
      ))}
      </div>
      {total >0 &&(
      <Basket resetBasket={resetBasket} total={total} products={products} basket = {basket} />
      )}
    </>

  );
}

export default App;
