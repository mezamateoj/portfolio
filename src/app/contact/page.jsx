'use client';

import React from 'react';
import styles from './page.module.css';
import { Card } from '@/components/card/Card';
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

const socials = [
	{
		icon: <Linkedin size={25} color="#4a9c3a" />,
		href: 'https://www.linkedin.com/in/mezamateo/',
		label: 'Linkedin',
		handle: 'mezamateo',
	},
	{
		icon: <Mail size={25} color="#4a9c3a" />,
		href: 'mailto:mezamateoj@gmail.com',
		label: 'Email',
		handle: 'mezamateoj@gmail.com',
	},
	{
		icon: <Github size={25} color="#4a9c3a" />,
		href: 'https://github.com/mezamateoj',
		label: 'Github',
		handle: 'mezamateoj',
	},
];

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{"Let's Keep in Touch"}</h1>
			<div className={styles.content}>
				{socials.map((s) => (
					<Card key={s.label}>
						<Link
							href={s.href}
							target="_blank"
							className={styles.link}
						>
							<span className={styles.line} aria-hidden="true" />
							<span className={styles.icon}>{s.icon}</span>{' '}
							<div className={styles.handler}>
								<span className={styles.handle}>
									{s.handle}
								</span>
								<span className={styles.label}>{s.label}</span>
							</div>
						</Link>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Contact;
