import { ChevronDown, Dock, Menu, PanelTopOpenIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='mob-container'>
          <div className='flex'>
            <Dock color="#7f56d9" strokeWidth={2.25} size={30} />
            <p className='logo'>Untitled UI</p>
          </div>
        <Menu size={35} color="#000000" strokeWidth={2.25} />
      </div>
      <div className='large-screen'>
        <div className='anc-container'> 
          <div className='flex'>
            <Dock color="#7f56d9" strokeWidth={2.25} size={30} />
            <p className='logo'>Untitled UI</p>
          </div>
          <div className='ance-tags'> 
            <p className='anc'>Home</p>
            <p className='anc'>product <ChevronDown size={25} color="#000000" strokeWidth={2} /></p>
            <p className='anc'>Resourse <ChevronDown size={25} color="#000000" strokeWidth={2} /></p>
            <p className='anc'>Pricing</p>
          </div>

        </div>
          

          <div className='btn-container'>
            <button className='btn log'>Log in</button>
            <button className='btn sign'>Sign up</button>
          </div>

      </div>
       
    </div>
  )
}

export default Navbar