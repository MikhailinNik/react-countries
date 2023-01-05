import Sort from '../Sort/Sort';
import Search from '../Search/Search';

import styles from './Filter.module.scss';

function Filter({ setRegion }) {
	return (
		<div className={styles.root}>
			<Search />
			<Sort setRegion={setRegion} />
		</div>
	);
}

export default Filter;
