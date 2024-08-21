import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src='/assets/images/menu.png' alt='Menu' style={{ marginRight: '1rem', cursor: 'pointer' }} />
            <img src='/assets/images/logo.png' alt='Logo' style={{ cursor: 'pointer' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: '1rem', marginRight: '1rem' }}>
            <div style={{ position: 'relative', flexGrow: 1 }}>
              <input
                placeholder='Search'
                type='text'
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem 0.5rem 0.75rem',
                  border: '1px solid #ccc',
                  borderRadius: '90px',
                  outline: 'none',
                  position: 'relative',
                  flexWrap: 'wrap'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderLeft: '2px solid #ccc',
                  paddingLeft: '0.5rem',
                }}
              >
                <img
                  src='/assets/images/search.png'
                  alt='Search'
                  style={{
                    height: '1.25rem',
                    cursor: 'pointer',
                    position: 'relative',
                    flexWrap: 'wrap',
                    paddingLeft: '0.5rem',
                    paddingRight: '5%'
                  }}
                />
              </div>
            </div>
            <img
              src='assets/images/mic.png'
              style={{
                position: 'relative',
                marginLeft: '2rem',
                height: '1.5rem',
                cursor: 'pointer',
                flexWrap: 'wrap'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{
              backgroundColor: '#ff0000',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%',
              flexWrap: 'wrap'
            }}>
              Sign In
            </button>
          </div>
        </div>
      </header>
    </>
  );
}