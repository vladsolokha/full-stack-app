import styles from './page.module.css'
import DataFetcher from './getData2'
 
export default async function Home() {

    return <main className={styles.main}>
    <div className={styles.description}>
      <p>This page downloads users from an external api</p>
    </div>
    <div className={styles.description}>
    <DataFetcher />
    </div>
  </main>
}