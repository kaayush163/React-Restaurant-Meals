import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeadercartButton = props => {

    return (
        <button>
            <span>
                <CartIcon/>
            </span>
            <span>Your cart</span>

            <span className={classes.badge}>3</span>

        </button>
    )
};

export default HeadercartButton;