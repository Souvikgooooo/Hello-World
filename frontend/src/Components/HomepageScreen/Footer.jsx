import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed by <a className='footer_faizan' target='_faizan' href='https://drive.google.com/file/d/1VR9yAv51iPyKugX1szcxsjOQDVqQR6E_/view?usp=drive_link'>Souvik G</a></p>
        </div>
    </>
  )
}

export default Footer