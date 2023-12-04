import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color:transparint;
    padding:8px 10px;
    border: 2px solid rgb(137, 109, 36);
    border-radius: 8px;
    display: inline-block;
    color:rgb(137, 109, 36) ;
    text-decoration:none;
    letter-spacing: 3px;
    font:8px;
    animation:fadeIn 1s 1.8s backwards;
    withe-space:nowrap;
    z-index:1;
  }.button:hover {
    background-color:rgb(137, 109, 36);
    color:#fff;  
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({btnLink="test",btnText ="Test",
 outline= false}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
        <Link className='button' to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
  )
}
