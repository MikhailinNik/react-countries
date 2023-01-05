import styles from './Search.module.scss';

import searchIcon from '../../assets/search.png';

function Search() {
	return (
		<div className={styles.root}>
			<img src={searchIcon} alt="Search" width={20} height={20} />
			<input type="text" placeholder="Search..." />
		</div>
	);
}

export default Search;
