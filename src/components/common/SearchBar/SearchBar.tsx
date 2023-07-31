import React, { ChangeEvent, MouseEventHandler } from "react";

import Button from "../Button/Button";
import { Section } from "./SearchBar.styled";

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
		<Section>
			<input
				type='text'
				placeholder='Enter the city name here'
				onChange={handleChange}
				value={search}
			/>
			<Button data={{ text: "Buscar" }} events={{ handleSubmit: onClick }} />
		</Section>
	);
};

export default SearchBar;
