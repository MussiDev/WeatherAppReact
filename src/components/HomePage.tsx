import React, { ChangeEvent, useEffect, useState } from "react";

import axios from "axios";

const HomePage = () => {
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<[] | null>(null);
	const fetchWeatherData = async () => {
		try {
			const response = await axios.get(
				`https://api.weatherapi.com/v1/current.json?key=${
					import.meta.env.VITE_WEATHER_API
				}&q=${search}`
			);
			console.log(searchResult);
			setSearchResult(response.data);
		} catch (error) {
			console.log(error);
			setSearchResult(null);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	return (
		<div>
			<h1>Busqueda</h1>
			<input
				type='text'
				placeholder='Search here'
				onChange={handleChange}
				value={search}
			/>
			<input type='submit' onClick={fetchWeatherData} />
		</div>
	);
};

export default HomePage;
