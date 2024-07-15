import { Modal,ModalBody, ModalHeader } from 'reactstrap';
import Chatbot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import Menswear from './Menswear';
import PhoneSignin from './Login'
import  Logo from './logo.png';
import "./Navbar.css"
import { height } from '@mui/system';
//mport ChatBot from './Chatbot';



const steps = [
  {
    id:"Hello",
    message:"Hi,Welcome to ThunderBuddies",
    trigger:"Ask Name"
  },
  {
    id:"Ask Name",
    message:"Please enter your name",
    trigger:"waiting"
  },
  {
    id:"waiting",
    user:true,
    trigger:"Name",
  },
  {
    id:"Name",
    message:"Hi,{previousValue}, Please select your issue",
    trigger:"issues",
  },
  {
    id:"issues",
    options:[
      {value:"Login",label:"Login",trigger:"Login"},
      {value:"otp",label:"otp",trigger:"otp"},
     
    ],
  },
  {
    id:"Login", message:"Login to your Account",end:true
  },
  {
    id:"otp",message:"See your Details",end:true
  },
 
];




const TopWear=[
  {
  id:1,
  name:"Men's Shirt",
  category:" Casual Shirts",
  price:399,
  color:"Blue",
  Brand:"Van Heusen",
  Image:"https://assets.ajio.com/medias/sys_master/root/20230623/MgVI/6495684ba9b42d15c9beb481/-473Wx593H-464718686-blue-MODEL.jpg",
  size:"Medium"
  },
  {
      id:2,
      name:"Men's Shirt",
      category:"Formal Shirts",
      price:449,
      color:"Red",
      Brand:"Allen Solly",
      Image:"https://assets.ajio.com/medias/sys_master/root/20231016/1fbJ/652d42c8ddf7791519413b3f/-473Wx593H-466714539-red-MODEL.jpg",
      size:"Large"
  },
  {  id:3,
     name:"Men's T-Shirts",
     category:"T-Shirts",
     price:289,
     color:"Black",
     Brand:"H&M",
     Image:"https://assets.ajio.com/medias/sys_master/root/20230629/zpFZ/649ce963a9b42d15c91f43e1/-473Wx593H-466063370-black-MODEL.jpg",
     size: "Medium"

  },
  {
      id:4,
      name:"Men's T-Shirts",
      category:"T-Shirts",
      price:199,
      color:"Black",
      Brand:"US Polo",
      Image:"https://assets.ajio.com/medias/sys_master/root/20230812/bpEp/64d77730eebac147fcc4f16c/-473Wx593H-466428340-black-MODEL.jpg",
      size:"Medium"

  }
]
  const BottomWear=[
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
  const SleepWear=[
    {
      id:9,
      name:"Men's Boxers",
      category:"Boxers",
      price:119,
      color:"Blue",
      Brand:"Zudio",
      Image:"https://img.freepik.com/free-photo/man-white-shorts-summer-fashion-photoshoot-close-up_53876-104997.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
      size:75

      },
      {
      id:10,
      name:"Men's Boxers",
      category:"Boxers",
      price:139,
      color:"Gray",
      Brand:"Zudio",
      Image:"https://img.freepik.com/free-photo/man-reading-interesting-book_23-2148873073.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
      size:85

      },
      {
          id:11,
          name:"Men's  Vests",
          category:"Vests",
          price:159,
          color:"White",
          Brand:"Vilan",
          Image:"https://img.freepik.com/free-photo/fashion-portrait-handsome-young-man-white-shirt-looking-sideways-poses-wall-with-contrast-shadows_186202-9080.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
          size:"M"
      },
      {
          id:12,
          name:"Men's  Vests",
          category:"Vests",
          price:179,
          color:"Black",
          Brand:"Dollar",
          Image:"https://img.freepik.com/free-photo/successful-muscled-young-man-black-tanktop_158538-10188.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
          size:"S"

      }
  ]
 const IndianWear= [
    {
    id:13,
    name:"Women's Kurtas",
    category:"Kurtas&Suits",
    price:399,
    color:"Blue",
    Brand:"Kalini",
    Image:"https://img.freepik.com/premium-photo/blushing-young-girl-landscape-wearing-floral-kurta-fashion-photoshoot_658768-175.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"3XL"
    },
    {
        id:14,
        name:"Women's Kurtas",
        category:"Kurtas&Suits",
        price:449,
        color:"Gray",
        Brand:"Sangria",
        Image:"https://img.freepik.com/premium-photo/cute-young-girl-portrait-garden-wearing-des-dress-fashion-photoshoot_658768-286.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
        size:"Large"
    },
   

]
const WestrenWear=[
  {
    id:15,
    name:"Women's Westrenwear",
    category:"Tops",
    price:349,
    color:"Red",
    Brand:"Friskers",
    Image:"https://img.freepik.com/premium-photo/women-fashion-clothing-tops_953724-996.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"XS"
  },
  {
    id:16,
    name:"Women's Westrenwear",
    category:"Tops",
    price:249,
    color:"Blue",
    Brand:"Roadster",
    Image:"https://img.freepik.com/free-photo/attractive-lady-blouse-posing-while-standing-looking-optimistic-front-view_176474-90664.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"S"
  },
  {
    id:17,
    name:"Women's Westrenwear",
    category:"Dresses",
    price:459,
    color:"Yellow",
    Brand:"JC Collection",
    Image:"https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"M"

  },
  {
    id:18,
    name:"Women's Westrenwear",
    category:"Dresses",
    price:599,
    color:"Red",
    Brand:"Tokyo Talkies",
    Image:"https://img.freepik.com/free-photo/fashion-portrait-attractive-smiling-young-woman-red-dotted-dress-red-studio_285396-2344.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"S"

  }
]
const Boys=[
  {
  id:19,
  name:"Boys Shirts",
  category:"Shirts",
  price:399,
  color:"Blue",
  Brand:"Patloons Junior",
  Image:"https://img.freepik.com/free-photo/skater-boy-posing-with-skateboard_23-2147670748.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
  size:"15-16Y"
  },
  {
      id:20,
      name:"Boys Shirts",
      category:"Shirts",
      price:449,
      color:"Black",
      Brand:"Max Kids",
      Image:"https://img.freepik.com/premium-photo/young-handsome-teenage-boy-with-blond-hair-outdoors_251136-49577.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
      size:"15-16Y"
  },
  {
      id:21,
      name:"Boys Jeans",
      category:"Jeans",
      price:349,
      color:"Sea Blue",
      Brand:"US Polo Assn.Kids",
      Image:"https://assets.ajio.com/medias/sys_master/root/20231102/I8pu/6542afbfafa4cf41f56e304a/-473Wx593H-466765004-blue-MODEL.jpg",
      size:"10-12Y"

  }
 

]

 const Girls=[
  {
    id:22,
    name:"Girls's T-Shirts",
    category:"Shirts",
    price:349,
    color:"White",
    Brand:"H&M",
    Image:"https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=600",
    size:"15-16Y"
  },
  {
    id:23,
    name:"Girl's T-Shirts",
    category:"T-Shirts",
    price:549,
    color:"Red",
    Brand:"United colors of Benetton",
    Image:"https://images.pexels.com/photos/2553790/pexels-photo-2553790.jpeg?auto=compress&cs=tinysrgb&w=600",
    size:"12-15Y"
  },
  {
    id:24,
    name:"Girl's Partywear",
    category:"Partywear",
    price:459,
    color:"Pink",
    Brand:"Allen Solly",
    Image:"https://img.freepik.com/free-photo/portrait-fashionable-woman_329181-9171.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"15-16Y"

  },
  {
    id:25,
    name:"Girl's Partywear",
    category:"Partywear",
    price:649,
    color:"Gold",
    Brand:"Bonjour",
    Image:"https://img.freepik.com/premium-photo/cute-girl-full-growth-shiny-party-dress-posing-white-wall_88135-20879.jpg?size=626&ext=jpg&ga=GA1.1.1449837664.1701525784&semt=ais",
    size:"12-14Y"

  }

  


]

export default function Navbar() {
 //const Cart = () => {


 const [isModalOpen, setModal] = useState(false);

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };




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

  
//  }
  return (
    <Router>
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="./Home "><img className='Logo' src={Logo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">MEN</a>
        <div class="dropdown-menu">
        <Link class="dropdown-item" to='/Topwear'>Topwear</Link>
        <Link class="dropdown-item" to='/Bottomwear'>Bottomwear</Link>
        <Link class="dropdown-item" to='/Sleepwear'>Sleepwear</Link>
        </div>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">WOMEN</a>
        <div class="dropdown-menu">
        <Link class="dropdown-item" to='/Indianwear'>Indianwear</Link>
        <Link class="dropdown-item" to='/Westernwear'>Westernwear</Link>
      
        </div>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">KIDS</a>
        <div class="dropdown-menu">
        <Link class="dropdown-item" to='/Boys'>Boyswear</Link>
        <Link class="dropdown-item" to='/Girls'>Girlswear</Link>
      
        </div>
      </li>
      
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <ul class="vishnu"><li><input class="form" type="text" placeholder="Search" fdprocessedid="j9zfqm"/></li>
      <li><button class="b" type="submit" fdprocessedid="imkevd">Search</button></li></ul>
    </form>
    <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">PROFILE</a>
        <div class="dropdown-menu">
        <Link class="dropdown-item" to='/Login'>LOGIN</Link>
        <Link class="dropdown-item" to='/About'>ABOUT</Link>
        
      
        </div>
      </li>
     
      <li class="nav-item"><Link class="nav-link" to='/ShoppingCart'><img src="https://cdn-icons-png.flaticon.com/128/347/347294.png?ga=GA1.1.837277197.1695711598"/>{cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}</Link></li>
     
      <li class="nav-item">
      <a class="nav-link" href='http://localhost:5173/'><img className="hello"  src="https://cdn-icons-png.flaticon.com/128/2173/2173954.png?ga=GA1.1.837277197.1695711598&semt=ais"/></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" to=''><img className="hello"  onClick={open} src="https://cdn-icons-png.flaticon.com/128/4712/4712089.png?uid=R129431602&ga=GA1.1.837277197.1695711598&semt=ais"/></a> </li>
      <Modal isOpen={isModalOpen} toggle={close}>
            <ModalHeader color='purple' toggle={close}>At Your Service ThunderBuddies</ModalHeader>
            <ModalBody>
            <Segment floated = 'right'>
            <Chatbot steps={steps}/>
            </Segment>
            </ModalBody>
          </Modal>
      </ul>
  </div>
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
          <Route path='/Topwear' element={<Menswear products={TopWear} addToCart={addToCart}/>}></Route>
          <Route path='/Bottomwear' element={<Menswear products={BottomWear} addToCart={addToCart}/>}></Route>
          <Route path='/Sleepwear' element={<Menswear products={SleepWear} addToCart={addToCart}/>}></Route>
          <Route path='/Indianwear' element={<Menswear products={IndianWear} addToCart={addToCart}/>}></Route>
          <Route path='/Westernwear' element={<Menswear products={WestrenWear} addToCart={addToCart}/>}></Route>
          <Route path='/Boys' element={<Menswear products={Boys} addToCart={addToCart}/>}></Route>
          <Route path='/Girls' element={<Menswear products={Girls} addToCart={addToCart}/>}></Route>
          <Route path='/Login' element={<PhoneSignin/>}></Route>
          
          
       
        </Routes>
        
        </div>
    </Router>
   
  )
}
// {/* <a href='./components/P'>hello</a>
// <a href='./Home'>hi</a> */}
