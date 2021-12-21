import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container"

export default function Login() {
    return (
        <div>
                <Container sx={{bgcolor: 'background.default', width: '100%'}}>
      <h1 className={styles.heading}>Green Game</h1>
      <p className={styles.headingMessage}>
        Welcome to the beginning of your journey to be a more environmentally
        friendly shopper.
      </p>
      <form className={styles.signUp}>
        <label>
          <TextField sx={{width: '100%'}}
            type="text"
            name="name"
            className={styles.inputField}
            placeholder="Name"
          />
        </label>
        <label>
          <TextField
            type="text"
            name="email"
            className={styles.inputField}
            placeholder="Email"
          />
        </label>
        <label>
          <TextField
            type="text"
            name="password"
            className={styles.inputField}
            placeholder="Password"
          />
        </label>
        <label>
          <TextField
            type="text"
            name="confirmpassword"
            className={styles.inputField}
            placeholder="Confirm Password"
          />
        </label>
        <Button sx={{marginTop: '10px'}} variant="contained">Sign up</Button>
      </form>
      </Container>
        </div>
    )
}
