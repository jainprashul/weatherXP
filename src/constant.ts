export const API_KEY = `382a74f1c20a9d7bfec883a1c7a5da3c`;

const API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

export const API_CURRENT_WEATHER_BY_CITY = (city: string) =>
    `${API_CURRENT_WEATHER}&q=${city}`;

export const API_CURRENT_WEATHER_BY_COORDS = (lat: number, lon: number) =>
    `${API_CURRENT_WEATHER}&lat=${lat}&lon=${lon}`;



const API_FORECAST_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const API_FORECAST_WEATHER_BY_CITY = (city: string) =>
    `${API_FORECAST_WEATHER}&q=${city}`;

export const API_FORECAST_WEATHER_BY_COORDS = (lat: number, lon: number) =>
    `${API_FORECAST_WEATHER}&lat=${lat}&lon=${lon}`;

export const API_ICON = (icon: string) =>
    `https://openweathermap.org/img/w/${icon}.png`;
