import Model from './Model'
import React from 'react'

const Mainnav= () => {
  const[isOpen,SetIsOpen]=(false)
  function logbutton(){
    SetIsOpen(true)

  }
  

  return (
    <div>
        <header className='
        Header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#00cba9', color: '#fff' }}>
            <h2>food blog</h2>
            <ul style={{display:'flex', listStyle:'none', justifyContent: 'space-around' ,gap:'1rem', alignItems: 'center'}}>
                <li>home</li>   
                <li>My Receipies</li>
                <li>favourits</li>
                <li onClick={logbutton}>login</li>
            </ul>
    
        </header>
        {isOpen && <Model />}    </div>
  )
}

export default Mainnav
