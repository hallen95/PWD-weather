import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3f7920d77233d1803df4404748a3aae4";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});
	return data;
};
