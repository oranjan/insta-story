import { useEffect, useState } from 'react'

const useStoriesList = () => {
  const [storiesList, setStoriesList] = useState([]);
  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then(setStoriesList);
  }, []);

  return storiesList
}

export default useStoriesList
