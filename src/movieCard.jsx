import './App.css';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return(
        <div className="movie" id={imdbID}>
          <div>
            <p>{Year}</p>
          </div>

          <div>
            <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt="poster" />
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
    )
}

export default MovieCard;