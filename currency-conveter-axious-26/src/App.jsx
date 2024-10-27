import { useState } from 'react'
import './App.css'
import { currencyConverter } from './api/postApi'

function App() {

  const [amount, setAmount] = useState(0)  //amount to convert
  const [fromCurrency, setFromCurrency] = useState("USD") //base currency
  const [toCurrency, setToCurrency] = useState("INR") //coverting to tht currency
  const [convertedAmount, setConvertedAmount] = useState(null) // final converted amount
  
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState(null)

  
  const handleConvertCurrency = async () =>{
    setLoading(true)
    setError(null)
    try{

      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      const {conversion_result} = await res.data;
      // console.log(data);
      setConvertedAmount(conversion_result)
      

    }catch(error){
      setError("Error fetching......")
      console.log(error);
      

    }
    setLoading(false)
  }








  return (
    <>
      <div className='main-container'>
      <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
           
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
             
               
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select
                 value={toCurrency}
                 onChange={(e) => setToCurrency(e.target.value)}
              
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <button onClick={handleConvertCurrency} disabled= {loading || amount <= 0}>{loading ? "Converting":"Convert"}</button>
          
    

        <hr />
      {
        convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </h2>
          </div>
        )
      }{error && <p>{error}</p>}
        
        

       
      </div>

      



      </section>
      </div>
    
      
    </>
  )
}

export default App
