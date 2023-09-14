import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/button/Button';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Full Stack Developer</h1>
				<p className={styles.desc}>
					Hi 👋, I'm Mateo, a Business Degree graduate turn full stack
					developer based in Chile, Passionate about creating web
					applications that are accessible to everyone.
				</p>

				<Button text={'Check my work'} url="/portfolio" />
			</div>
			{/* <div className={styles.item}>
				<Image src={Hero} alt="hero img" className={styles.img} />
			</div> */}
		</div>
	);
}
