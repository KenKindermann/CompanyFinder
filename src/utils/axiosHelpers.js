import axios from "axios";

export const fetchData = async (query = "") => {
  const url = "https://exercises.batix.help/api/v2/company/";
  try {
    const response = await axios.get(url + query);
    return response.data.content;
  } catch (error) {
    console.log(error);
  }
};
