import './App.css';
import instance  from './api/axiosConfig';
import { useEffect, useState } from 'react';
import  Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import  Home  from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const fetchMovies = async () => {
    try {
      const response = await instance.get('movies');
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await instance.get('movies/' + movieId);
      setMovie(response.data);
      setReviews(response.data.reviews);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
      fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
