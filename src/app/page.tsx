"use client";
import React from 'react'
import Header from './components/header'
import ChatBot from './components/chatBot'


export default function Home() {
  return (
    <div className='app-container'>
      <Header/>
      <ChatBot/>
    </div>
  );
}
