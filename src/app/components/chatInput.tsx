import React from 'react'
import Image from 'next/image'

export default function ChatInput() {
    return (
        <div className='chat-input'>
            <form className='chat-form'>
                <input type="text" placeholder="Ask SembakoAI" />
                <button className="send-button">
                    <Image src='/send.png' alt='send' className="send" width={40} height={40} />
                </button>
            </form>
        </div>
    )
}
