import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

type ChatInputProps = {
    onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
    const [input, setInput] = React.useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        console.log("textareaRef:", textareaRef.current);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        onSend(input);
        setInput("");

        if (textareaRef.current) {
            console.log("Resetting height of textarea...");
            textareaRef.current.style.height = "40px";
        } else {
            console.log("textareaRef is NULL! It's not attached to the <textarea>.");
        }

    };

    return (
        <div className='chat-input'>
            <form className='chat-form' onSubmit={handleSubmit}>
                <textarea
                    ref={textareaRef}
                    placeholder="Ask SembakoAI"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                    rows={1}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                />
                <button className="send-button">
                    <Image src='/send.png' alt='send' className="send" width={40} height={40} />
                </button>
            </form>
        </div>
    )
}
