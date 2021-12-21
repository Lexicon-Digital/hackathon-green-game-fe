import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Shoppinglist() {
  const [currentItem, setCurrentItem] = useState(); // milk
  const [list, setList] = useState([]);

  function handleItem(e) {
    let item = e.target.value;
    setCurrentItem(item);
  }

  function handleForm(e) {
    e.preventDefault();
    setList([currentItem, ...list]);
    setCurrentItem("");
  }

  return (
    <div className={styles.Shoppinglist}>
      <form action="" onSubmit={handleForm}>
        <input onChange={handleItem} type="text" value={currentItem} />
        <Button variant="contained">Add Shopping Item</Button>
      </form>
      <div className="list">
        <ul>
          {list.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
