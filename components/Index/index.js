import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Rage Bait Detector</h1>
        <p className={styles.description}>
          Spot engagement-farming profiles while you browse X. Open the popup on
          any account to see if it matches common rage-bait patterns before you
          give it another click.
        </p>
        <h1 className={styles.code}>Profile check is ready</h1>
        <p>{"See what we flag before following or replying."}</p>
        <p onClick={() => navigateToPage('new')}>{"View detection signals >"}</p>
      </main>
    </div>
  );
}
