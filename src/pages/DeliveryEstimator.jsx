import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import { getProviderForPincode } from '../utils/deliveryUtils';
import Papa from 'papaparse';
import { validatePincode } from '../utils/pincodeValidator';
import './stylepages.css'
import Navbar from "../components/Navbar";
import SlideItem from './SlideItem';
import SecurityPurpose from './SecurityPurpose';
export default function DeliveryEstimator() {
  const location = useLocation();
  const product = location.state.product;
  const price=location.state.product;
  const inStock = location.state.inStock;
  const [pincode, setPincode] = useState("");
  const [deliveryEstimate, setDeliveryEstimate] = useState("");
  const [provider, setProvider] = useState(null);
  const [pincodeData, setPincodeData] = useState([]);

  useEffect(() => {
    const fetchPincodes = async () => {
      const response = await fetch('/Pincodes.csv');
      const data = await response.text();
      const parsedData = Papa.parse(data, { header: true, skipEmptyLines: true }).data;
      setPincodeData(parsedData);
    };

    fetchPincodes();
  }, []);

  const handleEstimate = () => {
    if (!validatePincode(pincode)) {
      setDeliveryEstimate("Invalid Pincode");
      return;
    }

    const pincodeInfo = pincodeData.find((item) => item.Pincode === String(pincode).trim());
    
    if (pincodeInfo) {
      const estimate = `Estimated Delivery Time: ${pincodeInfo.TAT}`;
      setDeliveryEstimate(estimate);
      const providerInfo = getProviderForPincode(pincodeInfo.LogisticsProvider);
      setProvider(providerInfo);
    } else {
      setDeliveryEstimate("Invalid Pincode");
      setProvider(null);
    }
  };

  return (
      <>
       <Navbar/>
      
       <div className="container1">
      
      {/* <h1>Delivery Estimation</h1> */}
      <div className="containercard">


         <p id="router">Home/estimate</p>
        <div><h1 className='text-xl'>{product.product_name}</h1></div>
        

      
      <div className='headdiv mt-2'>
      <div className='tickmarkclass'><img className='h-5 w-5' src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="" /><p>Lightnes <br/> spot</p></div>
      <div className='tickmarkclass'><img className='h-5 w-5' src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="" /><p>Target <br/> Pigmentation</p></div>
      <div className='tickmarkclass'><img className='h-5 w-5' src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" alt="" /><p>Event Skin <br/> Tone</p></div></div>
      <div className=''><img className='h-[230px]   bg-white rounded-xl mt-5' src="" alt="" /></div>

   
   <div ><SlideItem/></div>
    <div className='securitypurpose'> <SecurityPurpose/></div>

    <div className='mainpricediv'>
      
      
      
      
      <div className='priceammoun1'>  <div className='priceammount'><span>Price: </span>
    <p id='pricecolorset'>
        
    ₹{product.price}</p>  </div> <button  id="btnhurryup">Hurry ,few left!</button></div>
    <p id="includive">(incl. all taxes)</p>
    </div>
     
     <div className='sizedropdown'>


      <div>
      <label id="sizelabel" for="dropdown">size: </label>
    <select id="dropdown" name="options">
        <option value="option1">30ml</option>
        <option value="option2">40ml</option>
        <option value="option3">50ml</option>
        <option value="option4">60ml</option>
    </select>


      </div>
    
   <div><label for="dropdown"></label>
    <select id="dropdown" name="options">
        <option value="option1">Qty:1</option>
        <option value="option2">Qty:2</option>
        <option value="option3">Qty:3</option>
        <option value="option4">Qty:4</option>
    </select></div>

     </div>
     
    
     <div className='Pincodechecker'><input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      /> <button onClick={handleEstimate} id="estimatehandle">Get Estimate</button></div>
      
      <div className='countdowntimer'>

      {deliveryEstimate && (
        <div className="estimate-container">
          <p className=' mt-4  mr-4 ml-4 '>{deliveryEstimate}</p>
          {provider && provider.sameDayCutoff && (
            <CountdownTimer cutoffTime={provider.sameDayCutoff} />
          )}
        </div>
      )}

      </div>
     
       
      
      </div>
      <div className="lastbuttn">
   <button className='btnlast1'><svg xmlns="http://www.w3.org/2000/svg" className='h-[36px] w-[36px]' viewBox="0 0 576 512">
    <path fill="#7D32EB" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
</svg>

Add to Cart</button>
   <button className='btnlast2'><svg className='bg-white rounded-3xl h-[35px] w-[35px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#7D32EB" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/>
</svg>
Buy it Now</button>
        
        
      </div>

    </div>
      </>
  
  );
}
