import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import MoviePage from './components/MoviePage/MoviePage';
import MoviePageContainer from './components/MoviePage/MoviePageContainer';
import { getInfoActionCreator } from './Redux/mainReducer';
import { fetchMovieInfo } from './Redux/moviesInfo/moviesInfo';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Routing from './components/Routing/Rounting';
import Loading from './components/MoviePage/Loading/Loading';
import $ from "jquery"
import ScrollTopPictures from './components/Main/ScrollTopPictures/ScrollTopPictures';

export const DomainLink = createContext('https://simplepages.shop')
export const MovieInfoContext = createContext(null)


function App() {
  const [moviesInfo, setMovieInfo] = useState([])
  const [pageRender, setPageRender] = useState(false)
  const location = useLocation().pathname.split('/')[1]
  // links in public/title.js
  useMemo(() => {
    axios.get('https://simplepages.shop/php/send_film_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
      .then(res => {
        let data = res.data;
        setMovieInfo(data); //add info to state
      })

    axios.get('https://simplepages.shop/php/get_ip.php') //send ip of user
      .then(res => {
        let data = res.data
        
      })
  }, [])
  useEffect(() => {
    setPageRender(true)
    if(localStorage.userId){
      setInterval(() => {
        axios.post(
         'https://simplepages.shop/php/get_user_ban_status.php', {user_id:localStorage.userId}, 
         { headers: {
            "Content-Type": 'multipart/form-data'
          }
        })
        .then(res => {
          let data = res.data.isBanned;
          if(data){
            console.log("pidor");
          }
        })
        
      }, 600000)
    }
    
  }, [])
  const returnFalseOfPageRender = () =>{
    setPageRender(false)
  }
  useEffect(() => {
    const log = () => {
      window.scrollTo(0, 0)
    }
    window.addEventListener("beforeunload", log);
    return () => {
      window.removeEventListener("beforeunload", log);
    };
  }, [])

  // fetchMovieInfo();
  return (
    <DomainLink.Provider value='https://simplepages.shop'>
      <div className='appWrapper' >
        <Header className='header' pageRender={pageRender} returnFalseOfPageRender={returnFalseOfPageRender} moviesInfo={moviesInfo} />
        <MovieInfoContext.Provider value={moviesInfo} >
          {moviesInfo ? <Routing moviesInfo={moviesInfo} /> : <Loading />}
        </MovieInfoContext.Provider>

      </div>
    </DomainLink.Provider>

  );
}

export default App;
