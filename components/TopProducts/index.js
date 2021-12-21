import React from 'react'
import Image from "next/image";
import styles from './styles.module.css'


export default function TopProducts() {
    return (
        <div className={styles.container}>
            <h1>Top Products</h1>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Image src="https://shop.coles.com.au/wcsstore/Coles-CAS/images/7/2/1/7218080.jpg" alt="" width={128} height={128} />
                    <p>Earth Choice All in One Original Dishwasher Tablets</p>
                </li>
                <li className={styles.listItem}>
                    <Image src="https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/0/7/5075084.jpg" alt="" width={128} height={128} />
                    <p>Birds Eye Snap Frozen Mixed Vegetables</p>
                </li>
            </ul>
        </div>
    )
}
