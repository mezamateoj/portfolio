'use client';
import styles from './spinner.module.css';

const Spinner = () => {
	return (
		<div className={styles.loading}>
			<div className={styles.loading__container}>
				<div className={styles.loading__spinner}></div>
				<div className={styles.loading__shadow}></div>
			</div>
		</div>
	);
};

export default Spinner;
