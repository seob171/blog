import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul className={styles.customUl}>
          <li>
            <Link href={'/file-download'}>file download</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
