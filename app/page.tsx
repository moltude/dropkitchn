import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/logo.png"
            alt="DropKitchn Logo"
            width={600}
            height={600}
            className={styles.logo}
            priority
          />
        </div>
      </section>
    </main>
  )
}
