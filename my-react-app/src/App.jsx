import './sass/index.scss';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Filter />
			<Card />
		</div>
	);
}

export default App;
