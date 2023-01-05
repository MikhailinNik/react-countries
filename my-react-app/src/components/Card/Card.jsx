import { useState } from 'react';

import styles from './Card.module.scss';

function Card({ country }) {
	return (
		<div className={styles.root}>
			<img src={country.flags.png} alt="" />
			<div className={styles.description}>
				<h2>{country.name.common}</h2>
				<ul>
					<li>Populations: {country.population}</li>
					<li>Region: {country.region}</li>
					<li>Capital: {country.capital}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
