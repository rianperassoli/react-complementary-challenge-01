import { MovieCard } from './MovieCard'
import { ContentHeader } from './ContentHeader'

import '../styles/content.scss';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genreTitle: string
  movies: Movie[]
}


export function Content({ genreTitle, movies }: ContentProps) {
  return (
    <div className="container">
      <ContentHeader genreTitle={genreTitle} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}