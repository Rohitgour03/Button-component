import React from 'react'
import classes from './Button.module.css';


const Button = (props) => {

    const {startIcon, endIcon} = props;
    
    let btnClass = '';
    let btnClasses = [];

    for(let key in props){
        if(props[key] !== true){
            btnClasses.push(props[key])
            console.log(btnClasses)
        } else{
            btnClasses.push(key)
            console.log(btnClasses)
        } 
    }

    btnClasses.forEach(item => {
        btnClass += `${classes[item]} `
        console.log(btnClass)
    })

    // if(startIcon || endIcon){
    //     btnClass += 'icon-btn';
    // }


  return (
    <React.Fragment>
        <button className={btnClass}>
            {startIcon && <span className="material-icons md-18">add_shopping_cart</span>}
            <span>default</span>
            {endIcon && <span className="material-icons md-18">add_shopping_cart</span>}
        </button>
    </React.Fragment>
  )
}

export default Button