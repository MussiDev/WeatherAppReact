import axios, { AxiosResponse } from "axios";

import ResultSearch from "../../entities/api/ResultSearch";
import SearchBar from "../common/SearchBar/SearchBar";
import { Section } from "./HomePage.styled";
import { useState } from "react";

const HomePage = () => {
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<ResultSearch | null>(null);

	const fetchWeatherData = async () => {
		try {
			const response: AxiosResponse<ResultSearch> = await axios.get(
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
		<Section>
			<SearchBar
				data={{ search }}
				events={{ onClick: fetchWeatherData, setSearch }}
			/>
			<div>
				<p>
					Estado actual: - Nubosidad: {searchResult?.current.cloud}- Condición:
					{searchResult?.current.feelslike_c}- Sensación térmica (°F):{" "}
					{searchResult?.current.feelslike_f}- Ráfaga de viento (km/h):{" "}
					{searchResult?.current.gust_kph}- Ráfaga de viento (mph):{" "}
					{searchResult?.current.gust_mph}- Humedad (%):{" "}
					{searchResult?.current.humidity}- ¿Es de día?:{" "}
					{searchResult?.current.is_day}- Última actualización: "
					{searchResult?.current.last_updated}- Última actualización (epoch):
					{searchResult?.current.last_updated_epoch}- Precipitación (pulgadas):
					{searchResult?.current.precip_in}- Precipitación (mm):{" "}
					{searchResult?.current.precip_mm}- Presión (pulgadas):{" "}
					{searchResult?.current.pressure_in}- Presión (mb):{" "}
					{searchResult?.current.pressure_mb}- Temperatura (°C):{" "}
					{searchResult?.current.temp_c}- Temperatura (°F):{" "}
					{searchResult?.current.temp_f}- Índice UV: {searchResult?.current.uv}-
					Visibilidad (km):{searchResult?.current.vis_km}- Visibilidad (millas):{" "}
					{searchResult?.current.vis_miles}- Dirección del viento (grados):{" "}
					{searchResult?.current.wind_degree}- Dirección del viento:{" "}
					{searchResult?.current.wind_dir}- Velocidad del viento (km/h):{" "}
					{searchResult?.current.wind_kph}- Velocidad del viento (mph):{" "}
					{searchResult?.current.wind_mph}
					Ubicación: - País: {searchResult?.location.country}- Latitud:{" "}
					{searchResult?.location.lat}- Hora local:{" "}
					{searchResult?.location.localtime}- Hora local (epoch):{" "}
					{searchResult?.location.localtime_epoch}- Longitud:
					{searchResult?.location.lon}- Nombre: "{searchResult?.location.name}-
					Región: {searchResult?.location.region}- Zona horaria:{" "}
					{searchResult?.location.tz_id}
				</p>
			</div>
		</Section>
	);
};

export default HomePage;
