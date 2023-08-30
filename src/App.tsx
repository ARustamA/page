import { Header } from './header/Header';
import styles from './app.module.css';

function App(): JSX.Element {

  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}

export default App;
