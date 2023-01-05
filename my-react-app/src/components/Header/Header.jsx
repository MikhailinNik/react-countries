import styles from './Header.module.scss';
import themeIcon from '../../assets/theme.svg';

function Header() {
	return (
		<nav className={styles.root}>
			<h1>Where is the World?</h1>
			<div className={styles.theme}>
				<img src={themeIcon} alt="Theme" />
				<span>Dark Mode</span>
			</div>
		</nav>
	);
}

export default Header;
