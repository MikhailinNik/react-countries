import styles from './Search.module.scss';

import searchIcon from '../../assets/search.png';
import closeIcon from '../../assets/close.png';

function Search({ value, setNameCity }) {
	const onChangeNameCity = evt => {
		return setNameCity(evt.target.value);
	};

	const onClickDeleteValue = evt => {
		evt.target.value = '';
		return setNameCity('');
	};
	return (
		<div className={styles.root}>
			<img src={searchIcon} alt="Search" width={20} height={20} />
			<input value={value} type="text" placeholder="Search..." onChange={onChangeNameCity} />
			{value && (
				<img src={closeIcon} alt="Close" width={20} height={20} onClick={onClickDeleteValue} />
			)}
		</div>
	);
}

export default Search;
