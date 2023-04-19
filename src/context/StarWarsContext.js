/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import api from "../utils/api";

const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStarships = useCallback(async () => { //yıldız gemileri verisini axios ile alıyorum.
    setLoading(true);
    try {
      const response = await api.get(`starships/`);
      const returnedData = await response.data;
      setStarships(returnedData.results); // oluşturuğum statede saklıyorum.
      console.log(returnedData.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const getSearch = useCallback(async () => { //test
    if (search == "" || undefined || null) {
      alert("Aradığınız kriterlere uygun sonuç bulunamadı.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.get(`starships/?search=${search}`);
      const returnedData = await response.data;
      setStarships(returnedData.results);
      console.log(returnedData.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const handleInputChange = ((e) => {
    setSearch(e.target.value); //test
  });
  const onSubmitHandler =((e) => {
    e.preventDefault(); //test
    getSearch(search);
  })

  useEffect(() => {
    getStarships();
  }, []);

  useEffect(() => {
    getSearch(); // test
  }, [search]);

  const values = {
    starships,
    loading,
    onSubmitHandler,
    handleInputChange,
  };

  return (
    <StarWarsContext.Provider value={values}>
      {children}
    </StarWarsContext.Provider>
  );
};

export const useStarWars = () => useContext(StarWarsContext);
