import classes from './Input.module.css';
{type:'text'}

const Input = props => {
    return (
        <div className={classes.input}>
            {/* htmlfor for setting for attribute like class */}
           <label htmlFor={props.input.id}>
              {props.label}
           </label>

           {/* <input id={props.input.id} {...props.input} type="text" /> */}
           <input {...props.input} />
           
        </div>
    )
}

export default Input;