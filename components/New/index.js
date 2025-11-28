import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Rage Bait Detector</h1>
          <p className={styles.description}>
            Tap the extension on a profile to see a quick gut-check on whether
            the account is stirring outrage for engagement. We never post or
            follow on your behalf.
          </p>
          <h1 className={styles.code}>Signals we watch</h1>
          <p>{"Outrage-heavy posting streaks • reply-bait prompts • recycled takes • lopsided follow ratios"}</p>
          <p onClick={() => navigateToPage('index')}>{"< Back to profile check"}</p>
        </main>
      </div>
    );
  }
