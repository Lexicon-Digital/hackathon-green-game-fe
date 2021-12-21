import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styles from './styles.module.css'

export default function Badges() {
  return (
    <div>
      <h1>Top Products</h1>
      <ul>
        <li className={styles.listItem}>
          <EmojiEventsIcon />
          <div className={styles.listText}>
          <p><b>Beginner Vegetarian</b></p>
          <p>Go meat free for 7 days.</p>
          </div>
        </li>
        <li className={styles.listItem}>
          <EmojiEventsIcon />
          <div className={styles.listText}>
          <p><b>Great Improver</b></p>
          <p>Reduce carbon emissions from shopping by 20% this month.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
