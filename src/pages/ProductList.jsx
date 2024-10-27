import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { validatePincode } from "../utils/pincodeValidator";
import Navbar from "../components/Navbar";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [stockData, setStockData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const productResponse = await fetch("/products.csv");
      const productData = await productResponse.text();
      const stockResponse = await fetch("/Stock.csv");
      const stockDataResponse = await stockResponse.text();

      const productsParsed = Papa.parse(productData, { header: true, skipEmptyLines: true }).data;
      const stockParsed = Papa.parse(stockDataResponse, { header: true, skipEmptyLines: true }).data;

      setProducts(productsParsed);
      setStockData(stockParsed);
    };

    fetchProducts();
  }, []);

  const isInStock = (productId) => {
    const stockItem = stockData.find(stock => stock.product_id === productId);
    return stockItem && stockItem.in_stock === "True";
  };

  return (
    <>
     <div>
      <Navbar/>
     </div>
    <div className="container">
      <div className="Headingh1"><h1>Available Products</h1></div>
      {/* <h1>Available Products</h1> */}
      {/* <div className="list-item"> */}
      <ul className="product-list">
        {products.map((product) => (
          <li  key={product.product_id} className={`product ${isInStock(product.product_id) ? "in-stock" : "out-of-stock"}`}>
            <span id="imagee">{product.product_name}</span>
            <div className="priceandbuttonbox">
            <span id="pricerate"> INR-{parseFloat(product.price).toFixed(2)}</span>

            

<button id="btnbro"
  onClick={() => navigate("/estimate", { state: { product, inStock: isInStock(product.product_id) } })}
  disabled={!isInStock(product.product_id)}
  className={isInStock(product.product_id) ? "in-stock" : "out-of-stock"}
>
  {isInStock(product.product_id) ? "Select" : "Out of Stock"}
</button>

            </div>
            
          </li>
        ))}
      </ul>


      {/* </div> */}
      
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
   
  );
}
