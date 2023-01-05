import styles from './Sort.module.scss';

function Sort() {
	return (
		<div className={styles.root}>
			<select name="" id="">
				<option style={{ fontFamily: 'Rajdhani' }} value="1">
					Africa
				</option>
				<option style={{ fontFamily: 'Rajdhani' }} value="2">
					Americas
				</option>
				<option style={{ fontFamily: 'Rajdhani' }} value="3">
					Asia
				</option>
				<option style={{ fontFamily: 'Rajdhani' }} value="4">
					Europa
				</option>
				<option style={{ fontFamily: 'Rajdhani' }} value="5">
					Oceania
				</option>
			</select>
		</div>
	);
}

export default Sort;
