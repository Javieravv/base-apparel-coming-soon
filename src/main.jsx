import React from 'react'
import ReactDOM from 'react-dom/client'
import { BasseApparel } from './components/BasseApparel'
import './css/styles-baseapparel.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <h1 className='sr-only'>Base appareal component</h1>
            <BasseApparel />
        </>
    </React.StrictMode>,
)
