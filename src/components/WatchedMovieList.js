import React from 'react'
import WatchedMovieItem from './WatchedMovieItem'

function WatchedMovieList({watchedMovieData,onDeleteWatchMovie}) {
  return (
    <div>
        <WatchedMovieItem watchedMovieData={watchedMovieData} onDeleteWatchMovie={onDeleteWatchMovie}/>
    </div>
  )
}

export default WatchedMovieList