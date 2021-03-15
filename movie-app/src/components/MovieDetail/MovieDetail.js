import {useEffect, useState} from 'react';

import poster from '../../assets/poster.jpg';
import detailStyle from './MovieDetail.Module.scss';

const MovieDetail = (props) => {
  const defaultDocumentTitle = document.title;
  const [documentTitle, setDocumentTitle] = useState(defaultDocumentTitle);

  useEffect(() => {
    setDocumentTitle(props.movie.title);
    document.title = documentTitle;

    return () => {
      document.title = defaultDocumentTitle;
    }
  });

  if (!props.isDetailShown) {
    return null;
  }
  else {
    return (
      <div className={detailStyle.detailWrapper}>
        <img src={props.movie.posterPath ? props.movie.posterPath : poster} alt={props.movie.alt}/>
        <h1 aria-label={`${props.movie.title} rated ${props.movie.rating}`}>{props.movie.title}
          <span className={detailStyle.rating} aria-hidden='true'>{props.movie.rating}</span>
        </h1>
        <p className='genre'>{props.movie.genre}</p>
        <p className={detailStyle.dateDurationWrapper}>
          <span>{props.movie.releaseDate}</span>
          <span>{props.movie.duration}</span>
        </p>
        <p className='description'>{props.movie.description}</p>
        {props.children}
      </div>
    );
  }
};

export default MovieDetail;
