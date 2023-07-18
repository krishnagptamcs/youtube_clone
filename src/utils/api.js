import axios from "axios";


const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "eaf3776a6fmshfe15cb8c2a73959p13b671jsn07625ac21c3b",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
