import { useState, useCallback } from "react";

export const useFetch = ({ endpoint, method, secured = false }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;

  const headers = {
    "Content-Type": "application/json",
    Authorization: secured && `Bearer ${token}`,
  };

  const fetchData = useCallback(async (body = null) => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api${endpoint}`, {
        method: method,
        headers,
        body: body && JSON.stringify(body),
      });

      const resp = await response.json();

      if (!response.ok) {
        throw new Error(resp.message);
      }

      setData(resp);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  });

  return [loading, data, error, fetchData];
};
