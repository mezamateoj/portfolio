'use client';
import React, { useContext } from 'react';
import styles from './dark.module.css';
import { ThemeContext } from '@/context/themeContext';

const DarkModeToggle = () => {
	const { toggleMode, mode } = useContext(ThemeContext);
	return (
		<div className={styles.container} onClick={toggleMode}>
			<div className={styles.icon}>🌚</div>
			<div className={styles.icon}>🌞</div>
			<div
				className={styles.ball}
				style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
			/>
		</div>
	);
};

export default DarkModeToggle;
