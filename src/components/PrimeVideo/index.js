// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const renderList = () => {
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    return (
      <>
        <h1 className="head">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
        <h1 className="head">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </>
    )
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="bg">{renderList()}</div>
    </div>
  )
}

export default PrimeVideo
