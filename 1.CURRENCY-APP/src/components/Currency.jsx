import React from 'react'

function Currency() {
    return (
        <div className='currency-div'>
            <input type="number" className='amount' />

            <select name="" id="" className='from-currency-option'>

                <option value="">USD"</option>
                <option value="">EUR</option>
                <option value="">TL</option>
            </select>

            <select name="" id="" className='to-currency-option'>

                <option value="">USD"</option>
                <option value="">EUR</option>
                <option value="">TL</option>
            </select>

            <input type="number" className='result' />

        </div>
    )
}

export default Currency