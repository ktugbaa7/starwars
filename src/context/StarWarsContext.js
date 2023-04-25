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
  const [page, setPage] = useState(1);

//  const [totalPage, setTotalPage] = useState(4);

  const loadMore = () => { //buttona tıklandığında bir sonraki verileri getir.
    setPage(page + 1)
  }

  const getStarships = async () => { //yıldız gemileri verisini axios ile alıyorum.
    setLoading(true);
    try {
      const response = await api.get(`starships/?page=${page}`);
      const returnedData = await response.data;
      // setTotalPage(returnedData);
      setStarships([...starships, ...returnedData.results]); // oluşturduğum statede saklıyorum ve load more buttonuna tıklandıgında gelen verileri üzerine ekliyorum.
      console.log(returnedData.results);
    } catch (error) {
      console.log(error);
      return "hata tekrar dene."
    } finally {
      setLoading(false);
    }
  };

  const getSearch = async () => { //test et
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
  };

  // const handleInputChange = ((e) => {
  //   setSearch(e.target.value); //test
  // });
  // const onSubmitHandler =((e) => {
  //   e.preventDefault(); //test
  //   getSearch(search);
  // })

  useEffect(() => {
     getStarships();
  }, [page]);


  useEffect(() => {
    getSearch(); // test
  }, [search]);

  const values = {
    starships,
    loading,
    // onSubmitHandler,
    // handleInputChange,
    loadMore,
    // totalPage,
    page,
  };

  return (
    <StarWarsContext.Provider value={values}>
      {children}
    </StarWarsContext.Provider>
  );
};

export const useStarWars = () => useContext(StarWarsContext);
