import './App.css';

const MovieCard = () => {
    return(
        <div className="movie">
          <div>
            <p>year</p>
          </div>

          <div>
            <img src="https://via.placeholder.com/400" alt="poster" />
          </div>

          <div>
            <span>type</span>
            <h3>Title</h3>
          </div>
        </div>
    )
}

export default MovieCard;