// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props

  return (
    <>
      <Popup
        modal
        trigger={
          <img
            src={movie.thumbnailUrl}
            alt="thumbnail"
            className="tumbnail-img"
          />
        }
        className="popup-content cont"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <div>
              <ReactPlayer url={movie.videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
