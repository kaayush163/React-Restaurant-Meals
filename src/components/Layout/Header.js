import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeadercartButton from './HeaderCartButton';

const Header = props => {
    
    return ( 
    <Fragment>
        <header className={classes.header}>
           <h1>ReactMeals</h1>
           {/* <button>Cart</button> */}
           <HeadercartButton/>
        </header>


        <div className={classes['main-image']}>
           <img src={mealsImage} alt="A table full of delicious food!"/>
        {/* <img src="https://ww...."/> */}
        </div>
    </Fragment>
    );
};

export default Header;