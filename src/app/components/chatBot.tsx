import React from 'react'
import ChatInput from './chatInput';

export default function ChatBot() {
    return (
        <div className='chat-container'>
            <div className='chat-header'>
                <div className='chat-header-text'>
                    <div className='chat-header-title'>
                        SembakoAI Assistant
                    </div>
                    <div className='chat-header-subtitle'>
                        Your grocery companion
                    </div>
                </div>
            </div>
            <div className='chat-messages'>
                test
            </div>
            <ChatInput/>
        </div>
    )
}
