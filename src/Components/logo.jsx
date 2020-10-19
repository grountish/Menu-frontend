import React from 'react'
import o1 from './../Assets/pngs/01.png'
import o3 from './../Assets/pngs/03.png'
import o4 from './../Assets/pngs/04.png'
import o5 from './../Assets/pngs/05.png'
import o6 from './../Assets/pngs/06.png'
import o8 from './../Assets/pngs/08.png'
import o9 from './../Assets/pngs/09.png'
import o10 from './../Assets/pngs/10.png'
import o11 from './../Assets/pngs/11.png'
import o12 from './../Assets/pngs/12.png'
import o13 from './../Assets/pngs/13.png'
import {useMousePosition} from '../hooks/useMouse';
import { useScroll } from "./../hooks/useScroll";



const Logo = () => {
    const mouse = useMousePosition(null)
    const scroll = useScroll(null);

    return (
        <div style={{height:"100vh"}}>
        <div style={{transform:`scale(${1 + scroll.y /3130})`}}>
            <img src={o1}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%, ${440 - (mouse.y)/50}%) scale(${1 + scroll.y / 500})`}} alt=""/>
            <img src={o13}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%, ${440 + (mouse.y)/50}%)`}} alt=""/>
            <img src={o3}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%,${440 + scroll.y / 2}%)`}} alt=""/>
            <img src={o4}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%,440%)`}} alt=""/>
            <img src={o5}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%,440%) rotateY(${scroll.y}deg)`}} alt=""/>
            <img src={o6}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%,${440 - scroll.y / 2}%)`}} alt=""/>
            <img src={o13}  className="logo-letter" style={{transform:`translate(${mouse.x / 2}%,440%)`}} alt=""/>
           
                 <img src={o8}  className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%, ${577 - (mouse.y)/50}%) scale(${1 + scroll.y / 500})`}} alt=""/>
            <img src={o9}  className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%,${577 + mouse.y /30}%)`}} alt=""/>
            <img src={o10} className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%,577%)`}}  alt=""/>
            <img src={o11} className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%,577%)`}}  alt=""/>
            <img src={o12} className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%,${577 - scroll.y / 2}%) `}}  alt=""/>
            <img src={o13} className="logo-letter" style={{transform:`translate(${-320 +(mouse.x / 2)}%,577%) rotateZ(${mouse.y}deg)`}}  alt=""/>
        
           
            </div>
        </div>
    )
}

export default Logo
