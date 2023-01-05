import styles from './Card.module.scss';

import flagIcon from '../../assets/flag.png';

function Card() {
	return (
		<div className={styles.root}>
			<img src={flagIcon} alt="" />
			<div className={styles.description}>
				<h2>Russia</h2>
				<ul>
					<li>Populations: 124124</li>
					<li>Region: Europa</li>
					<li>Capital: Moscow</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
