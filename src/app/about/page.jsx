import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src={
						'https://images.unsplash.com/photo-1694009606218-eb46476e6300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
					}
					fill={true}
					className={styles.img}
					alt="people"
				/>
				<div className={styles.imgText}>
					{/* <h1 className={styles.imgTitle}>A little about me</h1> */}
					<h2 className={styles.imgDesc}>A little about me</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who I am?</h1>
					<p className={styles.desc}>
						A passionate Business Graduate with a love for software
						development and a knack for problem-solving. I
						specialize in a range of programming languages including
						JavaScript, TypeScript, Python, and SQL. My expertise
						extends to various frameworks such as Next.js, React,
						Redux, MaterialUI, Node.js, Sequelize, Mongoose,
						Tailwind, and Astro.
						<br />
						<br />I started my career as a Data Analyst Intern,
						where i use my skills in data manipulation,
						visualization, and statistical analysis. My experience
						with python on the job made me realize i love coding
						more than maths. This led me to transition into a
						Full-Stack Developer role, where I could create and
						build applications that solve real-world problems.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>Why Choose Me?</h1>
					<p className={styles.desc}>
						I bring a unique blend of technical skills and business
						skills to the table. My experience as a Business
						Graduate is complemented by my ability to work well in
						teams, my eagerness to learn, and my passion for
						creating impactful solutions. I believe that my diverse
						skill set makes me an ideal candidate for a variety of
						roles in the tech industry.
					</p>
					<Button text={'Contact Me'} url="/contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
