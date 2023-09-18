import styles from './page.module.css';
import Button from '@/components/button/Button';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Full Stack Developer</h1>
				<p className={styles.desc}>
					Hi 👋, I&apos;m Mateo, a Business graduate turn full stack
					developer based in Chile, Passionate about web development,
					finance and machine learning.
				</p>

				<Button text={'Check my work'} url="/portfolio" />
			</div>
		</div>
	);
}
