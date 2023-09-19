import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (category) => {
	const data = items[category];

	if (data) return data;

	return notFound();
};

const Category = ({ params }) => {
	const data = getData(params.category);
	return (
		<div className={styles.container}>
			<h1 className={styles.mainTitle}>{params.category}</h1>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
						<a
							target="_blank"
							href={item.link}
							className={styles.link}
						>
							Check it Out!
						</a>
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.img}
							src={item.image}
							alt={item.title}
							width={500}
							height={500}
							priority
							unoptimized={true}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;
