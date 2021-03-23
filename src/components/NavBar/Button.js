import React from 'react';
import './Button.css';
import { useHistory } from 'react-router-dom';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]




export const Button = ({
 
 children,
 type,
 onClick,
 buttonStyle,
 buttonSize

}) => {
    
    const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]

    const checkButtonSize= SIZES.includes(buttonSize)? buttonSize : SIZES[0]
    const history= useHistory();
     return (
         <button id="Button-join" className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={() => history.push('/pricetab')} 
         type={type}>
             {children}
         </button>
     )
}