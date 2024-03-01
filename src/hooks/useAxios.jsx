// Context
import { ControlContext } from "../provider/ControlContext";

// Hooks
import { useContext } from "react";

// Libraries
import axios from "axios";

const useAxios = () => {
  const { query } = useContext(ControlContext);
  const url = "https://exercises.batix.help/api/v2/company/";

  const fetchData = async (setState) => {
    try {
      const response = await axios.get(url + query);
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return fetchData;
};

export default useAxios;
