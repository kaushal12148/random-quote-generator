import './App.css'
import React from 'react'
import { useEffect, useState } from 'react';



export default function App() {
  const [quote, setQuote] = useState({ content: "", author: "" })
  const [bgColor, setBgColor] = useState("#ffffff")
  const [buttonColor, setButtonColor] = useState("#dddddd")

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
  }

  useEffect(() => {
    getQuote()
  }, [])

  const handleClick = () => {
    getQuote()
    setBgColor(getRandomColor())
    setButtonColor(getRandomColor())
  }

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <>
     <h1>Quote generator</h1>
    <div className='App align' style={{ backgroundColor: bgColor}}>
      
      <div className='initial border border-primary'>
        <div style={{ padding: "40px" }}>
          <span style={{ color: "rgb(9, 50, 175)" }}>{quote.content}</span> <br />
          <h4 style={{ color: "rgb(6, 46, 455)", float:'right' }}>~{quote.author}</h4>
        </div>
      </div>
      <button className='btn-style' onClick={handleClick}>Get quote</button>
    </div>
    </>
   
  )
}
