import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "354ebb562emsh7f86c247d1d2ab8p16f8cfjsn6b19cdc1c434",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
