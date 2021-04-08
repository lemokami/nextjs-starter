import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lemokami's Nextjs Starter</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to lemokami's <a href='https://nextjs.org'>Next.js!</a>{' '}
          Starter
        </h1>
        <a href='https://github.com/lemokami/nextjs-starter'>Github</a>
      </main>
    </div>
  );
}
