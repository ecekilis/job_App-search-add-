import React from 'react'

function Error({ message, retry }) {
    return (
        <div className='error'>
            <p>uygunuz bir hata olustu</p>
            <p className='text'>{message}</p>

            <button onClick={retry} className='button'>
                <span>Tekrar Dene</span>
            </button>

        </div>

    )
}

export default Error;
