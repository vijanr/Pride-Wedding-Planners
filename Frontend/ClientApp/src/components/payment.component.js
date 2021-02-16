import React, { useState} from 'react';
import Cards from'react-credit-cards'
import { Link } from 'react-router-dom';
import './index.css';
import './payment.css';
import'react-credit-cards/es/styles-compiled.css'
//import { render } from 'react-dom';


function Pay() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiary, setExpiary] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  
  return(
   
<div >
  <Cards
  number={number}
  name={name}
  expiry={expiary}
  cvc={cvc}
  focused={focus}
  />
  <form>
      <div className="heading">
  <h3 >Payments</h3>
  </div>
  <div className="form">
  <label>Card Number</label>
    <input className="input-text" 
    type='tel' 
    name='number' 
    placeholder='Card Number'
    value={number}
    onChange={e => setNumber(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>Cardholder's Name</label>
        <input className="input-text" 
    type='text' 
    name='name' 
    placeholder='Name'
    value={name}
    onChange={e => setName(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>Expiary Date</label>
        <input className="input-text" 
    type='tel' 
    name='exiary' 
    placeholder='MM/YY'
    value={expiary}
    onChange={e => setExpiary(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
     <div className="form">
     <label>CVV</label>
        <input className="input-text" 
    type='tel' 
    name='cvc' 
    placeholder='CVV'
    value={cvc}
    onChange={e => setCvc(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
    <div>
    <Link to="/upload">
    <button type="Submit" className="btn btn-dark btn-lg btn-block">Pay Now</button>
 </Link>
     </div>  
  </form>
</div>
  );
}


export default Pay;
