import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>{params.category}</h1>

			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>Desc</p>
					<Button text="See more" url={'#'} />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src={
							'https://images.unsplash.com/photo-1541850649265-e84fcd7f89a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80'
						}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Test</h1>
					<p className={styles.desc}>Desc</p>
					<Button text="See more" url={'#'} />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src={
							'https://images.unsplash.com/photo-1541850649265-e84fcd7f89a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80'
						}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
