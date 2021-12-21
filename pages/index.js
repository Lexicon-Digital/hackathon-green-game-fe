import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}
