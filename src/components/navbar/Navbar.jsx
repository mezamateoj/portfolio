'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import Button from '../button/Button';
import Hamburger from '../hamburguer/Hamburger';
import { ThemeContext, ThemeProvider } from '@/context/Context';

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		url: '/portfolio',
	},
	{
		id: 4,
		title: 'About',
		url: '/about',
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact',
	},
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { mode } = useContext(ThemeContext);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.logoHamburger}>
				<Link className={styles.logo} href={'/'}>
					Mateo.
				</Link>

				<Hamburger onClick={toggleMenu} menuOpen={menuOpen} />
			</div>
			<div
				className={
					menuOpen
						? `${styles.links} ${styles.open} ${
								mode === 'dark'
									? styles.darkMode
									: styles.lightMode
						  }`
						: styles.links
				}
			>
				<DarkModeToggle />
				{links.map((link) => (
					<Link
						key={link.id}
						href={link.url}
						className={styles.link}
						onClick={closeMenu}
					>
						{link.title}
					</Link>
				))}
				<a
					href="/files/meza_resume.pdf"
					alt="mateo meza resume pdf"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.resume}
				>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Navbar;
