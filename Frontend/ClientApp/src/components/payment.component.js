import React, { useState} from 'react';
import Cards from'react-credit-cards'
//import { Link } from 'react-router-dom';
import './index.css';
import './payment.css';
import'react-credit-cards/es/styles-compiled.css'
import { CardDetails } from '../authorization/authorization';



function Pay() {
  const [CardNo, setNumber] = useState('')
  const [CardholderName, setName] = useState('')
  const [ExpDate, setExpiary] = useState('')
  const [CVV, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  console.log("Until On Submit is Working")
 

  const onSubmit = async e => {
    e.preventDefault();
    console.log("On Submit Function is working")
     CardDetails (CardNo,CardholderName,ExpDate,CVV);
     
  };
  return(
   
<div >

  <Cards
  number={CardNo}
  name={CardholderName}
  expiry={ExpDate}
  cvc={CVV}
  focused={focus}
  />
        
  <form  onSubmit={e => onSubmit(e)}>
      <div className="heading">
  <h3 >Payments</h3>
  </div>
  <div className="form">
  <label>Card Number</label>
    <input className="input-text" 
     type='tel' 
    name='number' 
    placeholder='Card Number'
    minLength="16"
    maxLength="16" 
    value={CardNo}
    required
    
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
    value={CardholderName}
    required
    minLength='1'
    maxLength='32' 
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
    value={ExpDate}
    required
    minLength='4'
    maxLength='5' 

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
    value={CVV}
    required
    minLength='3'
    maxLength='3' 

    onChange={e => setCvc(e.target.value)}
    onFocus={e => setFocus(e.target.name)}
    />
    </div>
    <div>
   
    <button type="Submit" className="btn btn-dark btn-lg btn-block">Pay Now</button>
   
     </div>  
  </form>

</div>
  );
}


export default Pay;
