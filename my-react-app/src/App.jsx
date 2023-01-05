import './sass/index.scss';

import Header from './components/Header/Header';
import Home from './layouts/Home/Home';
import { useState } from 'react';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Home />
		</div>
	);
}

export default App;
