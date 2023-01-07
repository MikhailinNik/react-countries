import Sort from '../Sort/Sort';
import Search from '../Search/Search';

import styles from './Filter.module.scss';

function Filter({ nameCity, setNameCity, setRegion }) {
	return (
		<div className={styles.root}>
			<Search value={nameCity} setNameCity={setNameCity} />
			<Sort setRegion={setRegion} />
		</div>
	);
}

export default Filter;
