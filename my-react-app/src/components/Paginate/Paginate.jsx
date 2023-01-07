import { useState } from 'react';

import ReactPaginate from 'react-paginate';

function Paginate({ style, countries, setItemsPerPage }) {
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 8;
	const pageCount = Math.ceil(countries.length / itemsPerPage);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = countries.slice(itemOffset, endOffset);

	const onPageClick = event => {
		const newOffset = (event.selected * itemsPerPage) % countries.length;

		setItemOffset(newOffset);
		setItemsPerPage(currentItems);
	};
	return (
		<ReactPaginate
			className={style}
			breakLabel="..."
			nextLabel=">"
			onPageChange={onPageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			previousLabel="<"
			renderOnZeroPageCount={null}
		/>
	);
}

export default Paginate;
