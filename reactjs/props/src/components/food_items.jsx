import styles from "./food_items.module.css";

function FoodItems({ food }) {
  return (
    <ul className="list-group">
      {food.map((i) => (
        <li
          key={i}
          className={`${styles.kgItem}list-group-item`}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;
