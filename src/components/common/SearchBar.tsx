import React, { ChangeEvent, MouseEventHandler } from "react";

interface SearchBarProps {
	data: {
		search: string;
	};
	events: {
		setSearch: React.Dispatch<any>;
		onClick: MouseEventHandler<HTMLInputElement>;
	};
}

const SearchBar = (props: SearchBarProps) => {
	const { search } = props.data;
	const { setSearch, onClick } = props.events;

	const handleChange = (data: ChangeEvent<HTMLInputElement>) => {
		data.preventDefault();
		if (!data) return;
		setSearch(data.target.value);
	};
	return (
		<div>
			<input
				type='text'
				placeholder='Search here'
				onChange={handleChange}
				value={search}
			/>
			<input type='submit' onClick={onClick} />
		</div>
	);
};

export default SearchBar;
