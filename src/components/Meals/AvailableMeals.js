import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa Idli",
    description: "Combo of this will let u to start your morning work",
    price: 50.99,
  },
  {
    id: "m2",
    name: "Special roasted Chicken",
    description: "It's different to try something new!",
    price: 200.000,
  },
  {
    id: "m3",
    name: "Mutton Biryani",
    description: "You will get a discount of 30% on it",
    price: 100.00,
  },
  {
    id: "m4",
    name: "Avocado Shake",
    description: "Healthier for your skin & make your body 4 times energetic",
    price: 140.00,
  },
  {
    id: "m5",
    name: "Ham-and-Cheese-Burger",
    description: "Taste it just for once, you will be willing to want to eat more",
    price: 80.99,
  },
  {
    id: "m6",
    name: "Family Pack Thalli",
    description: "It's the best choice for the large size family group",
    price: 300.00,
  },
  
];

const AvailableMeals = () => {
  const MealList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id} // this is new from mealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          <li>{MealList}</li>
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
