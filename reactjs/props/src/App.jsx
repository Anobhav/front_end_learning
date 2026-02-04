import FoodItems from "./components/food_items.jsx";
import Error from "./components/error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import style from "./components/food_items.module.css";

let food = ["Dal", "Salad", "Milk", "Vegetable"];

function App() {
  return (
    <> 
      <h1 className={style.foodheading}>Healthy Food</h1>
      <Error food={food} />
      <FoodItems food={food} />
    </>
  );
}

export default App;
