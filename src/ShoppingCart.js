// ShoppingCart.js
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Modal, ModalHeader, ModalBody, ModalFooter,Button } from 'reactstrap';

const ShoppingCart = ({ cartItems, removeCart, QuantityChange, Total }) => {



  const [isModalOpen, setModal] = useState();

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };
  const [name,setName]=useState('')
const [flatno,setFlatno]=useState('')
const [area,setArea]=useState('')
const [village,setVillage]=useState('')
const [city,setCity]=useState('')
const [district,setDistrict]=useState('')
const [pincode,setPincode]=useState('')
const [state,setState]=useState('')
const HandleRegister= async()=>{
    try{
        const response=await axios.post('http://localhost:4000/buy',{name,flatno,area,village,city,district,pincode,state})
        if(response.data){
            alert('address saved successfull your order will get in 6 working days')
        }
    }catch(error){
            alert('register failed',error.message)
    }
}




  return (
    <div>
      <h2>Shopping Cart</h2>
      <table className='table table w-100 h-40'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Count</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td><img src={item.url} alt={item.name} width={80} /></td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => QuantityChange(item, 1)}>+</button>
                {item.amount}
                <button onClick={() => QuantityChange(item, -1)}>-</button>
              </td>
              <td><span>{(item.amount * item.price).toFixed(2)}/-</span></td>
              <td><button onClick={() => removeCart(item.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
      <h3>Total: {Total()}/-</h3>
      <button className='btn btn-success border-radius:20px' onClick={open}>Buy</button></center>



      <div>
      {/*<button className='btn btn-success' onClick={open}>Buy</button>*/}

<Modal isOpen={isModalOpen}  contentLabel="Login Page Modal">
  <ModalHeader color='black'toggle={close}>Enter The Delivery Address</ModalHeader>
  <ModalBody>
    <form>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
      <br/>
      <label>Flat No:</label>
      <input type="text" value={flatno} onChange={(e)=>setFlatno(e.target.value)} required />
      <br/>
      <label>LandMark:</label>
      <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} required />
      <br/>
      <label>village:</label>
      <input type="text" value={village} onChange={(e)=>setVillage(e.target.value)} required />
      <br/>
      <label>City:</label>
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} required />
      <br/>
      <label>District:</label>
      <input type="text" value={district} onChange={(e)=>setDistrict(e.target.value)} required />
      <br/>
      <label>Pin Code:</label><br/>
      <input type="number" value={pincode} onChange={(e)=>setPincode(e.target.value)} required />
      <br/>
      <label>State:</label>
      <input type="text" value={state} onChange={(e)=>setState(e.target.value)} required />
    </form>
  </ModalBody>
  <ModalFooter>
      <Button className='success' onClick={HandleRegister}>Submit</Button>
    <button className='btn btn-danger' onClick={close}>Close</button>
  </ModalFooter>
</Modal>
</div>
    </div>
  );
};

export default ShoppingCart;