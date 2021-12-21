import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <ResponsiveAppBar />
    </div>
  );
}
