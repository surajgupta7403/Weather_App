import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '117b3225c89785bfddb48bb3851443bd';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}
