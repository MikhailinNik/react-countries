import Sort from '../Sort/Sort';
import Search from '../Search/Search';

import styles from './Filter.module.scss';

function Filter() {
	return (
		<div className={styles.root}>
			<Search />
			<Sort />
		</div>
	);
}

export default Filter;
