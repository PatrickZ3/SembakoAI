import React from 'react'
import Image from 'next/image'

type ChatInputProps ={
    onSend: (message: string) => void;
}

export default function ChatInput({onSend} : ChatInputProps) {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <div className='chat-input'>
            <form className='chat-form' onSubmit={handleSubmit}>
                <input type="text" placeholder="Ask SembakoAI" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="send-button">
                    <Image src='/send.png' alt='send' className="send" width={40} height={40} />
                </button>
            </form>
        </div>
    )
}
