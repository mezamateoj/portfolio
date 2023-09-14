import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div>2023 © Mateo Meza</div>
			<div className={styles.socials}>
				<Link href={'https://github.com/mezamateoj'} target="_blank">
					<Image
						src={'/github.png'}
						width={15}
						height={15}
						alt="github icon"
					/>
				</Link>
				<Link
					href={'https://www.linkedin.com/in/mezamateo/'}
					target="_blank"
				>
					<Image
						src={'/linkedin.png'}
						width={15}
						height={15}
						alt="linkedin icon"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
