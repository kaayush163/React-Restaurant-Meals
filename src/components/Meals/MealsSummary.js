import React, { Fragment } from "react";
import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Available Foods, You can book anytime</h2>
        <p>
          Just choose your Favorite meal from our restaurant's collections of available meals
          and enjoy a delicious food anywhere at your home or at the office.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time. We have highly skilled Chefs of 10+ years Experience so you do not need to worry about your food & taste
        </p>
      </section>
    </Fragment>
  );
};

export default MealsSummary;
