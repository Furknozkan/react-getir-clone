import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
        <div className='subTitles-left'>
            <ul className='titles'>
                <li className='title active'>getir</li>
                <li className='title'>getiryemek</li>
                <li className='title'>getirbüyük</li>
                <li className='title'>getirsu</li>
            </ul>
        </div>
    <div className='subTitles-right'>
            <ul className='titles'>
                <li className='title'>Giriş Yap</li>
                <li className='title'>Kayıt Ol</li>
                
            </ul>
        </div>

    </header>
  )
}

export default Header