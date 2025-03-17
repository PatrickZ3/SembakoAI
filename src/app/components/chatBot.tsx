"use client";
import React from 'react'
import ChatInput from './chatInput';

type Message = {
    id: string;
    content: string;
    role: "user" | "bot";
}

const INITIAL_MESSAGE: Message[] = [
    {
        id: "1",
        content: "Hi, I'm SembakoAI Assistant. How can I help you today?",
        role: "bot",
    },
]

export default function ChatBot() {
    const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGE);
    const [input, setInput] = React.useState("");

    const handleSendMessage = (message: string) => {
        if (!message.trim) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: message,
            role: "user",
        };

        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            role: "bot",
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };



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
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`chat-bubble ${message.role === "user" ? "user" : "bot"}`}
                    >
                        {message.content}
                    </div>
                ))}
            </div>
            <ChatInput onSend={handleSendMessage}/>
        </div>
    )
}
