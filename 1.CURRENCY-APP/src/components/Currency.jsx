import React from 'react'
import '../css/currency.css'
import { IoArrowForwardCircle } from "react-icons/io5";
function Currency() {
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', color: 'black', backgroundColor: 'white', width: '100%', textAlign: 'center' }}>
                <h3 >DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: '10%' }}>

                <input type="number" className='amount' />

                <select name="" id="" className='from-currency-option'>

                    <option value="">USD"</option>
                    <option value="">EUR</option>
                    <option value="">TL</option>

                </select>

                <IoArrowForwardCircle style={{ fontSize: '30px', marginRight: '10px', color: '#ff0000' }} />

                <select name="" id="" className='to-currency-option'>

                    <option value="">TL</option>
                    <option value="">USD"</option>
                    <option value="">EUR</option>

                </select>

                <input type="number" className='result' />
            </div>

            <div >
                <button
                    style={{ width: '80px', height: '40px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', marginTop: '15px', }}
                >
                    Çevir
                </button>
            </div>


        </div>
    )
}

export default Currency