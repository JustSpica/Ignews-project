import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss'

export const SignButton = () => {
  const [isUserLoggedIn,  setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#04D361'/>
      Guilherme Spica Luiz
      <FiX color='#737380'className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  );
}