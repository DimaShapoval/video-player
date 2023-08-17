import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';
import MoviePageContainer from './components/MoviePage/MoviePageContainer';
import { getInfoActionCreator } from './Redux/mainReducer';
import { fetchMovieInfo } from './Redux/moviesInfo/moviesInfo';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Routing from './components/Routing/Rounting';
import Loading from './components/MoviePage/Loading/Loading';
import ScrollTopPictures from './components/Main/ScrollTopPictures/ScrollTopPictures';

export const DomainLink = createContext('https://akvani.com')
export const MovieInfoContext = createContext(null)


function App() {
  const [moviesInfo, setMovieInfo] = useState([])
  // links in public/title.js
  useMemo(() => {
    axios.get('https://akvani.com/php/send_film_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
      .then(res => {
        let data = res.data;
        setMovieInfo(data); //add info to state
      })
  }, [])
  useEffect(()=>{
    const log = ()=>{
        window.scrollTo(0,0)      
    }
    window.addEventListener("beforeunload", log);
    return () => {
      window.removeEventListener("beforeunload", log);
    };
  }, [])

  // fetchMovieInfo();
  return (
    <DomainLink.Provider value='https://akvani.com'>
      <div className='appWrapper' >
        <Header className='header' moviesInfo={moviesInfo} />
        <MovieInfoContext.Provider value={moviesInfo} >
          {moviesInfo ? <Routing moviesInfo={moviesInfo} /> : <Loading />}
        </MovieInfoContext.Provider>
        
      </div>
    </DomainLink.Provider>

  );
}

export default App;
