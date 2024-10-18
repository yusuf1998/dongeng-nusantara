import React from 'react';
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, isAuthenticated, onLogout }) => {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <main className={styles.mainContent}>
        {children}
      </main>
    </>
  );
};

export default Layout;