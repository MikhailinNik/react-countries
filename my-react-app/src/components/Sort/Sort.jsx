import styles from './Sort.module.scss';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function Sort({ setRegion }) {
	const onClickRegion = evt => {
		setRegion(evt.target.value);
	};
	return (
		<div className={styles.root}>
			<select style={{ fontFamily: 'Rajdhani' }} name="" id="" onChange={onClickRegion}>
				{regions.map((region, index) => (
					<option key={index} style={{ fontFamily: 'Rajdhani' }} value={region}>
						{region}
					</option>
				))}
			</select>
		</div>
	);
}

export default Sort;
