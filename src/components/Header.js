
import React from 'react'
import './App.css'

export default function Header() {
    return (
        <div className='container-fluid head text-center'>
            <h1>
                Welcome To Hogwards{' '}
                <span aria-labelledby="img" role='img'>
                    👋
                </span>
            </h1>
        </div>
    );
}
