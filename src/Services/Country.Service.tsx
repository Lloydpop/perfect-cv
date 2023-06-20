import axios from "axios";

export const AllCountry = async () => {
  const data = await axios.get("https://restcountries.com/v3.1/all");
  console.log(data);

  return data;
};
