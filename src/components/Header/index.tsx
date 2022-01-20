import { SignButton } from '../Header/SignInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="IG.News" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
       </nav>

       <SignButton />
      </div>
    </header>
  );
}