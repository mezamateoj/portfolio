'use client';
import styles from './hamburger.module.css';

function Hamburger({ onClick, menuOpen }) {
	return (
		<div
			className={
				menuOpen
					? `${styles.hamburger} ${styles.open}`
					: styles.hamburger
			}
			onClick={onClick}
		>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</div>
	);
}

export default Hamburger;
