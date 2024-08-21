import React from 'react'

export default function Header() {
  return (
    <>
      <header>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src='/assets/images/menu.png' alt='Menu' style={{ marginRight: '15px', cursor: 'pointer' }} />
      <img src='/assets/images/logo.png' alt='Logo' style={{ cursor: 'pointer' }} />
    </div>

    <div style={{ flexGrow: 1, marginLeft: '10px', marginRight: '10px' }}>
      <input
        placeholder='Search'
        type='text'
        style={{
          width: '90%',
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          outline: 'none',
          
        }}
      />
    </div>

    <div style={{ display: 'flex', alignItems: 'center'}}>
      <button style={{
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        width: '100%'
      }}>
        Sign In
      </button>
    </div>
  </div>      
      </header>
      
    
    </>
  )
}
