/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import api from "../utils/api";

const StarWarsContext = createContext();

export const StarWarsProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const loadMore = () => { //buttona tıklandığında bir sonraki verileri getir.
    setPage(page + 1);
  }

  const getStarships = async () => { //yıldız gemileri verisini axios ile alıyorum.
    setLoadingMore(true);
    try {
      const response = await api.get(`starships/?page=${page}`);
      const returnedData = await response.data;
      setStarships([...starships, ...returnedData.results]); // oluşturduğum statede saklıyorum ve load more buttonuna tıklandıgında gelen verileri üzerine ekliyorum.
      setTotalPage(returnedData.next); // load buttonunu veriler bitince göstermemek için. totalPage null'sa button gösterilmeyecek.
      
    } catch (error) {
      console.log(error);
      return "hata tekrar dene."
    } finally {
      setLoadingMore(false);
    }
  };


  const getSearch = async () => {
    setLoading(true);
    try {
      const response = await api.get(`starships/?search=${search}`);
      const returnedData = await response.data;
      setStarships(returnedData.results);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

   const handleInputChange = ((e) => {//arama kutusundaki değer
     setSearch(e.target.value);
   });
   const onSubmitHandler =((e) => {// button a tıklandıgında veriler içinde ara
     e.preventDefault(); 
      getSearch(search);   
   })

  useEffect(() => {
     getStarships();
  }, [page]);


  useEffect(() => {
    getSearch(); 
  }, []);

  const values = {
    starships,
    search,
    loading,
    onSubmitHandler,
    handleInputChange,
    loadMore,
    totalPage,
    page,
    loadingMore,
  };

  return (
    <StarWarsContext.Provider value={values}>
      {children}
    </StarWarsContext.Provider>
  );
};

export const useStarWars = () => useContext(StarWarsContext);
