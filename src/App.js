import React from "react"
import Calendar from "./class-components"
import {Header,Content,Footer}from './func-components'
import './style.css'
function App(){
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
  )
} 
export default App