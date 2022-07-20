import axios from "axios";
import React, { useEffect, useState } from "react";
import AppTemplate from "./app.template";

const apiURL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

export default function AppComponent() {
  const [cardsList, setCardsList] = useState([]);

  const fetchList = async () => {
    try {
      const { data: response } = await axios.get(`${apiURL}/v1/card`);

      setCardsList(response.data);
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return <AppTemplate fetchList={fetchList} cardsList={cardsList} />;
}
