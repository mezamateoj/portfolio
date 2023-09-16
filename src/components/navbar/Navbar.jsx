'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import Button from '../button/Button';

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
	return (
		<div className={styles.container}>
			<Link className={styles.logo} href={'/'}>
				Mateo.
			</Link>
			<div className={styles.links}>
				<DarkModeToggle />
				{links.map((link) => (
					<Link key={link.id} href={link.url} className={styles.link}>
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
				{/* <button
					className={styles.logout}
					onClick={() => console.log('logout')}
				>
					CV
				</button> */}
			</div>
		</div>
	);
};

export default Navbar;
