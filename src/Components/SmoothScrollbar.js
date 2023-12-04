
import React,{ useRef } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';

export default function SmoothScrollbar({children}) {
const ref = useRef(null);
const {pathname} = useLocation();
useEffect(() =>{
    const {scrollbar} = ref.current;
    scrollbar.setPosition(0,0)  
},[pathname])  
  return (
    <Scrollbar ref={ref} damping='.09'
     style={{width:'100%',height:'100vh',background:'  var(--gray-1);'
    }}>
    {children}
    </Scrollbar>
  
  )
}
