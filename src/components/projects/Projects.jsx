import { Github, PanelTop } from 'lucide-react';
import styles from './projects.module.css';

function Projects({ icon, title, text, link }) {
	return (
		<div className={styles.square}>
			<span>{icon}</span>
			<h3>{title}</h3>
			<p className={styles.text}>{text}</p>
			<div className={styles.social}>
				<a href={link} target="_blank">
					<Github className={styles.icons} />
				</a>
			</div>
		</div>
	);
}

export default Projects;
