import React from 'react';
import './Mcart.css';
const Bottomwear= ({ products, addToCart }) => {
  return (
    <div>
      <h2>Tables</h2>
      <div className='row'>
        {products.map((e) => (
          <div key={e.id} className='color'>
            <img src={e.Image} alt={e.name} width={350} />
            <p>{e.name}</p>
            <p>{e.category}</p>
            <p>{e.price}</p>
            <p>{e.Brand}</p>
            <p>{e.size}</p>
            <p>{e.color}</p>
            <button onClick={() => addToCart(e)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottomwear;