import {useEffect, useState} from 'react';

import poster from '../../assets/poster.jpg';
import detailStyle from './MovieDetail.Module.scss';

const MovieDetail = ({ movie, ...props }) => {
  const defaultDocumentTitle = document.title;
  const [documentTitle, setDocumentTitle] = useState(defaultDocumentTitle);

  useEffect(() => {
    setDocumentTitle(movie.title);
    document.title = documentTitle;

    return () => {
      document.title = defaultDocumentTitle;
    }
  });

  if (!movie) {
    return null;
  }
  else {
    return (
      <div className={detailStyle.detailWrapper}>
        <img src={movie.posterPath ? movie.posterPath : poster} alt={movie.alt}/>
        <h1 aria-label={`${movie.title} rated ${movie.rating}`}>{movie.title}
          <span className={detailStyle.rating} aria-hidden='true'>{movie.rating}</span>
        </h1>
        <p className='genre'>{movie.genre}</p>
        <p className={detailStyle.dateDurationWrapper}>
          <span>{movie.releaseDate}</span>
          <span>{movie.duration}</span>
        </p>
        <p className='description'>{movie.description}</p>
        {props.children}
      </div>
    );
  }
};

export default MovieDetail;
