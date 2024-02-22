import React from 'react'
import './Body.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Body() {
  return (
    <div className='body_main'>

      <div className='bg-image-container'>

      <div className=''>
        <div className='d-flex d-lg-none justify-content-between mt-3 px-5'>
      <ArrowBackIcon/>
      <button type="button" class="btn btn-outline-light">Light</button>
        
        </div>


        <div className='content'>
          <h1>Computer Science </h1>
        </div>
      </div>


      
      </div>
     <div className='d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top'>
      <div className='posts'>
      <ul className='nav my-2 nav-underline'>
        <li className='nav-item'>
          <a className='nav-link active' href='/'>Zeya</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>Mustafa</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/'>Hello</a>
        </li>
      </ul>
      </div>

      <div>
        <button className='btn'>Login</button>
        <button className='btn primary'>Write Post</button>
      </div>


     </div>

     <div className='d-lg-none d-flex justify-content-between mx-auto align-items-center container sticky-top'>
        <div>

        <h8>Posts(999)</h8>
        </div>

        <div>
          <button className='btn'>
              <h8>Filter: All</h8> 
            <img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" 
            />
          </button>
        </div>
     </div>
      
      
      
      <hr className='mx-auto mt-0'/>
      
      
      
      </div>


    
  )
}

export default Body
