import React from 'react';
import styled from 'styled-components';

const MapStyles = styled.div`
.container{
    display:flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
    margin-bottom:3rem;
    margin-top:0.5rem;
}.map-container iframe{
    display:flex;
    justify-content:center;
   
}
@media only screen and (max-width: 768px) {
    .map-container{
        width:100%;
        overflow:hidden;
        padding-top:50%;
        position: relative;
        height:580px;
    }.map-container iframe{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        margin-bottom:30rem; }
}
`

export default function Map() {
  return (
    <MapStyles>
        <div className='container'>
                <div className='map-container'>
                <iframe  title ="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.640837457268!2d62.21091512574924!3d34.33416510279414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7775d97f813%3A0xa180e933e062eea8!2z2YHZhNqp2Ycg2Kjaqdix2KfYqNin2K8!5e0!3m2!1sfa!2s!4v1701609175809!5m2!1sfa!2s"
                width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
               </div>
        
    </MapStyles>
  )
}
