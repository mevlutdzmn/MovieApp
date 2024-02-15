import React from 'react';
import Image from 'next/image';


const getMovie = async(id) =>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=476d74ce1cac63e00c27431434114158`)

    
    return await res.json();
}

const page = async({params}) => {

    const id = params.id;

    const movieDetail = await getMovie(id);
    console.log(movieDetail,"movie");

  return (
    <div className='relative p-7 min-h-screen '>
       <Image fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} alt="Movie Poster"  />
    </div>
  );
}

export default page;
