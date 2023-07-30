import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

import ResultSearch from "../entities/api/ResultSearch";
import SearchBar from "./common/SearchBar";

const HomePage = () => {
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<ResultSearch | null>(null);

	const fetchWeatherData = async () => {
		try {
			const response: AxiosResponse<any, any> = await axios.get(
				`https://api.weatherapi.com/v1/current.json?key=${
					import.meta.env.VITE_WEATHER_API
				}&q=${search}`
			);
			setSearchResult(response.data);
		} catch (error) {
			console.log(error);
			setSearchResult(null);
		}
	};

	return (
		<div>
			<h1>Busqueda</h1>
			<SearchBar
				data={{ search }}
				events={{ onClick: fetchWeatherData, setSearch }}
			/>
			<div>
				<p>clouds:</p>
				{searchResult?.current?.cloud}
			</div>
		</div>
	);
};

export default HomePage;
