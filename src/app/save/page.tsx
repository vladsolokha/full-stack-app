import styles from '../page.module.css'
import React from 'react'
import DataFetcher from '../getData2'

export default function Save() {

  return <main className={styles.main}>
  <div className={styles.description}>
    <p>This page uses getData2 component to fetch memoized version of data</p>
  </div>
  <span className={styles.card}>
    <button className={styles.button}>Push to save to Database</button>
  </span>  
  <DataFetcher />
</main>
}
