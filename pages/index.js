import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Green Game</h1>
      <p className={styles.headingMessage}>Welcome to the beginning of your journey to be a more environmentally friendly shopper.</p>
      <form className={styles.signUp}>
  <label>
    <input type="text" name="name" className={styles.inputField} placeholder="Name"/>
  </label>
  <label>
    <input type="text" name="email" className={styles.inputField}placeholder="Email"/>
  </label>
  <label>
    <input type="text" name="password" className={styles.inputField}placeholder="Password"/>
  </label>
  <label>
    <input type="text" name="confirmpassword" className={styles.inputField}placeholder="Confirm Password"/>
  </label>
  <Button variant="contained">Submit</Button>
</form>
      
    </div>
  )
}
