import { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './Home.module.scss';

import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Paginate from '../../components/Paginate/Paginate';

function Home() {
	const [countries, setCountries] = useState([]);
	const [itemsPerPage, setItemsPerPage] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('https://restcountries.com/v3.1/all');
				setCountries(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, []);

	// console.log(countries);
	console.log('itemsPerPage: ', itemsPerPage);
	const renderCards = () => {
		return !itemsPerPage.length
			? countries.slice(0, 8).map(country => <Card key={country.flags.png} country={country} />)
			: itemsPerPage.map(country => <Card key={country.flags.png} country={country} />);
	};

	return (
		<>
			<Filter />
			<div className={styles.content}>{renderCards()}</div>
			<Paginate style={styles.page} countries={countries} setItemsPerPage={setItemsPerPage} />
		</>
	);
}

export default Home;
