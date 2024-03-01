import axios from "axios";
import { useContext } from "react";
import { ControlContext } from "../provider/ControlContext";

const useAxios = () => {
  const { query } = useContext(ControlContext);
  const url = "https://exercises.batix.help/api/v2/company/";

  const fetchData = async (setState) => {
    try {
      const response = await axios.get(url + query);
      setState(response);
    } catch (error) {
      console.log(error);
    }
  };

  return fetchData;
};

export default useAxios;
