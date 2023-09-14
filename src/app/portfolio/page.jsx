import React, { useContext } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
	return (
		<div className={styles.container}>
			{' '}
			<h1 className={styles.selectTitle}>Some of my projects</h1>
			<div className={styles.items}>
				<Link href={'/portfolio/illustrations'} className={styles.item}>
					<span className={styles.title}>DoggyGo</span>
				</Link>
				<Link href={'/portfolio/websites'} className={styles.item}>
					<span className={styles.title}>PokemonApp</span>
				</Link>
				<Link href={'/portfolio/application'} className={styles.item}>
					<span className={styles.title}>WorldNote</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
