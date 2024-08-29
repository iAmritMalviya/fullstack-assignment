import { useState } from "react";
import axios from "axios"; // Or use the native fetch API if you prefer

const ApiHandlerHook = () => {
  const [success, setSuccess] = useState(null); // Track success state
  const [msg, setMsg] = useState(""); // Track message state
  const [data, setData] = useState([]); // Track data state

  const makeRequest = async (url, method = "GET", options = {}) => {
    try {
      // console.log('temp url ',url,method,options)
      // Clear previous states
      setSuccess(null);
      setMsg("");

      // Make API request
      const response = await axios({
        url,
        method,
        ...options, // Spread options correctly
      });


      const data = response?.data;
     

      // If request is successful, update states
      setSuccess(data?.success);
      setMsg(data?.msg || "Request successful");
      setData(data); // Set response data
    } catch (error) {
      // Handle error response
      setSuccess(false);
      setMsg(
        error.response?.data?.message || "An error occurred while processing the request."
      );
    }
  };

  return { success, msg, data, makeRequest };
};

export default ApiHandlerHook;
