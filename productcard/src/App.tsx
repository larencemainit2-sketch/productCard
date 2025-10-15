import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="product">

       

        <div className='productcard'>
          <img className='shoes' src="/public/shoe2.jpg" alt="" />
          <div className='productdetails'>
          <div className='productinfo'>
            <h3>Snickers Off-white</h3>
            <h3>2024</h3>
            <h4>NIKE</h4>
            <h3>$38.00</h3>
          </div>
          <div className='plussign'>
            <img src="/public/plus.jpg" alt="" />
          </div>
          </div>
        </div>

        <div className='productcard'>
          <img className='shoes' src="/public/shoe3.jpg" alt="" />
          <div className='productdetails'>
          <div className='productinfo'>
            <h3>Snickers Off-white</h3>
            <h3>2024</h3>
            <h4>NIKE</h4>
            <h3>$38.00</h3>
          </div>
          <div className='plussign'>
            <img src="/public/plus.jpg" alt="" />
          </div>
          </div>
        </div>

         <div className='productcard'>
          <img className='shoes' src="/public/shoe1.jpg" alt="" />
          <div className='productdetails'>
          <div className='productinfo'>
            <h3>Snickers Off-white</h3>
            <h3>2024</h3>
            <h4>NIKE</h4>
            <h3>$38.00</h3>
          </div>
          <div className='plussign'>
            <img src="/public/plus.jpg" alt="" />
          </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App
