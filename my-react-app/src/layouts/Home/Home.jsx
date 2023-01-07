import { useEffect, useState } from 'react';

import axios from 'axios';

import styles from './Home.module.scss';

import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Paginate from '../../components/Paginate/Paginate';

const defaultName = '';

function Home() {
	const [countries, setCountries] = useState([]);
	const [itemsPerPage, setItemsPerPage] = useState([]);
	const [region, setRegion] = useState('All');
	const [nameCity, setNameCity] = useState(defaultName);

	async function fetchData() {
		try {
			const response = await axios.get('https://restcountries.com/v3.1/all');
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchDataByRegion() {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchDataByName() {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/name/${nameCity}`);
			setCountries(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	function filterRegion() {
		if (region === 'All') {
			return fetchData();
		}

		return fetchDataByRegion();
	}

	useEffect(() => {
		nameCity ? fetchDataByName() : filterRegion();
	}, [region, nameCity]);

	const renderCards = () => {
		return !itemsPerPage.length
			? countries.slice(0, 8).map(country => <Card key={country.flags.png} country={country} />)
			: itemsPerPage.map(country => <Card key={country.flags.png} country={country} />);
	};

	return (
		<>
			<Filter nameCity={nameCity} setNameCity={setNameCity} setRegion={setRegion} />
			<div className={styles.content}>{renderCards()}</div>
			<Paginate style={styles.page} countries={countries} setItemsPerPage={setItemsPerPage} />
		</>
	);
}

export default Home;
