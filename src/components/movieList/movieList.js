import React,{useEffect , useState} from 'react';
import Card from '../card/Card';
import './MovieList.css';
import { useParams } from 'react-router-dom';

const MovieList = () => {
    const [movieList, setMovieList]=useState([]);
    const {type}=useParams()

    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        getData();
    },[type]);

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type:"popular"}?api_key=a08e7b4239a24b3bef1e890eb7756278`).then(res=>res.json()).then(data=>setMovieList(data.results));
    }

  return (
    <div className='movie_list'>
        <h2 className='list_title'>{(type?type:"POPULAR").toUpperCase()}</h2>
        <div className='list_cards'>
            {
                movieList.map(movie=>(
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList;