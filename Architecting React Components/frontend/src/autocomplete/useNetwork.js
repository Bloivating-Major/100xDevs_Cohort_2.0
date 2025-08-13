import { useEffect, useState } from "react";

const URL = 'http://localhost:5000/api/technologies';

function useNetwork(){
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  return { data, isLoading, isError };
}

export default useNetwork;
