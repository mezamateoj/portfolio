import React from 'react';
import styles from './page.module.css';
function Layout({ children }) {
	return (
		<div className={styles.layoutContainer}>
			<h1 className={styles.mainTitle}>My Work</h1>
			{children}
		</div>
	);
}

export default Layout;
