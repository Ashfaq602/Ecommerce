// Cart.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Mcart from './Mcart';
import Bottomwear from './Bottomwear';
//import jsonData from './J.json';
//import "./J.json"
//import './Cart.css'

const List = [{
    id:1,
    name:"Men's Shirt",
    category:" Casual Shirts",
    price:399,
    color:"Red",
    Brand:"Van Heusen",
    Image:"https://www.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_6601836.htm#query=Mens%20Shirt&position=1&from_view=search&track=ais&uuid=ce1ddc92-650f-48e6-96e6-bff6e0f2beaa",
    size:"Medium"
    },
    {
        id:2,
        name:"Men's Shirt",
        category:"Formal Shirts",
        price:449,
        color:"Blue",
        Brand:"Allen Solly",
        Image:"https://www.freepik.com/free-photo/portrait-happy-handsome-young-man-posing-studio-with-beautiful-curly-hairs_11228759.htm#query=Mens%20DenimShirt&position=1&from_view=search&track=ais&uuid=6e8370a1-becc-4d41-8420-98f3f9cfe4b7",
        size:"Large"
    },
    {  id:3,
       name:"Men's T-Shirts",
       category:"T-Shirts",
       price:289,
       color:"Blue",
       Brand:"H&M",
       Image:"https://www.istockphoto.com/en/photo/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-wall-background-gm1249420269-364128324?phrase=men%27s%20t%20shirt",
       size: "Medium"

    },
    {
        id:4,
        name:"Men's T-Shirts",
        category:"T-Shirts",
        price:199,
        color:"Black",
        Brand:"US Polo",
        Image:"https://media.istockphoto.com/id/1093999178/photo/young-handsome-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to.jpg?s=612x612&w=0&k=20&c=aWWGm-GcKc-hL8dl1RUaO41JE-cKZdT9AF8QD7jDgwc=",
        size:"Medium"

    }]
    const List1=[
        {
            id:5,
            name:"Men's Jeans",
            category:"Jeans",
            price:349,
            color:"Blue",
            Brand:"Flying Machine",
            Image:"https://img.freepik.com/premium-photo/man-wearing-blue-jeans-with-white-shirt-brown-shoes_81048-11310.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
            size:28
          },
          {
            id:6,
            name:"Men's Jeans",
            category:"Jeans",
            price:249,
            color:"Blue",
            Brand:"Spykar",
            Image:"https://img.freepik.com/free-photo/handsome-man-dancing_144627-3575.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
            size:30
          },
          {
            id:7,
            name:"Men's Troushers",
            category:"Casual Troushers",
            price:299,
            color:"Dark Blue",
            Brand:"Levi's",
            Image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-trendy-style-outfit-denim-shirt-trousers-sunglasses-hat-isolated-jumping-cheerful-pointing-finger_285396-1517.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
            size:29
          },
          {
            id:8,
            name:"Men's Troushers",
            category:"Casual Troushers",
            price:369,
            color:"Black",
            Brand:"Peter England",
            Image:"https://img.freepik.com/free-photo/stylish-young-handsome-man-classy-outfit_1303-22501.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
            size:31
          }
    ]



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const removeCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const QuantityChange = (item, increment) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        const updatedAmount = Math.max(cartItem.amount + increment, 1);
        return { ...cartItem, amount: updatedAmount };
      }
      return cartItem;
    });

    setCartItems(updatedCart);
  };

  const Total = () => {
    const total = cartItems.reduce((acc, item) => acc + item.amount * item.price, 0);
    return total.toFixed(2);
  };

  return (
    <Router>
      <div>
      <nav>
          <ul>
          
            <li><Link to='/ShoppingCart'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"/>{cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}</Link></li>
            <li><Link to='/Mcart'>Mcart</Link></li>
            <li><Link to='/Bottomwear'>Bottomwear</Link></li>
             <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
        <Link class="dropdown-item" to='/Mcart'>Mcart</Link>
        <Link class="dropdown-item" to='/Bottomwear'>Bottomwear</Link>
        </div>
      </li>
            
          </ul>
        </nav>
 
        <Routes>
          
          <Route path='/ShoppingCart'
            element={<ShoppingCart
              cartItems={cartItems}
              removeCart={removeCart}
              QuantityChange={QuantityChange}
              Total={Total}
            />}>
          </Route>
          <Route path='/Mcart' element={<Mcart products={List} addToCart={addToCart}/>}></Route>
          <Route path='/Bottomwear' element={<Bottomwear products={List1} addToCart={addToCart}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Cart;