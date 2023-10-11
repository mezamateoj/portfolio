import React, { useContext } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Projects from '@/components/projects/Projects';
import { PanelTop, Rabbit, Rocket } from 'lucide-react';

const othersInfo = [
	{
		id: 1,
		title: 'Pokemon App',
		text: 'Full-stack app that allows users to interact with a Pokemon database',
		link: 'https://github.com/mezamateoj/Pokemon-Project',
		icon: <Rabbit />,
	},
	{
		id: 2,
		title: 'Personal Portfolio',
		text: 'This is my personal portfolio, built with Next.js and css modules.',
		link: 'https://github.com/mezamateoj/portfolio',
		icon: <PanelTop />,
	},
	{
		id: 3,
		title: 'Rick and Morty App',
		text: 'A basic full-stack app to call rick and morty API and display cards with characters info.',
		link: 'https://github.com/mezamateoj/rick_and_morty',
		icon: <Rocket />,
	},
];

const Portfolio = () => {
	return (
		<div className={styles.container}>
			{' '}
			<h1 className={styles.selectTitle}>Some of my projects</h1>
			<div className={styles.items}>
				<Link href={'/portfolio/chatPDF'} className={styles.item}>
					<span className={styles.title}>Chat PDF</span>
				</Link>
				<Link href={'/portfolio/doggyGo'} className={styles.item}>
					<span className={styles.title}>DoggyGo</span>
				</Link>
				<Link href={'/portfolio/worldNote'} className={styles.item}>
					<span className={styles.title}>WorldNote</span>
				</Link>
			</div>
			<div>
				<h3 className={styles.selectTitle}>Other small projects</h3>
				<div className={styles.others}>
					{othersInfo.map((item) => (
						<Projects
							key={item.id}
							icon={item.icon}
							title={item.title}
							text={item.text}
							link={item.link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
