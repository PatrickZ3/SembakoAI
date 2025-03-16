import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo-container'>
                <div className='logo'>
                    <Image src='/logo.png' alt='logo' width={60} height={60} />
                </div>
                <div className='header-text-container'>
                    <div className='header-title'>
                        SembakoAI
                    </div>
                    <div className='header-subtitle'>
                        Smart Grocery Assitance
                    </div>
                </div>
            </div>
        </header>
    )
}
