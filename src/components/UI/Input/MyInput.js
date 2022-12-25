import React from "react";
import classes from './MyInput.module.scss';

function MyInput(props) {
   return(
      <input className={classes.myInput} {...props} />
   );
};

export default MyInput;