import { useState, useEffect, createRef } from 'react'
import YouTube, { Options } from 'react-youtube'
import Link from '../Link'
import {
  SpaceWrapper,
  Stars,
  Twinkling,
  YouTubeWrapper,
  PlayPauseButton,
  GoBackLink,
  SongLink,
} from './Space.style'

const YOUTUBE_VIDEO_ID: string = '26SwASi_1Ls'

const Space = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [video, setVideo] = useState<any>({})

  const opts: Options = {
    width: '120',
    height: '120',
    host: 'https://www.youtube-nocookie.com',
    playerVars: {
      controls: 0,
      loop: 1,
      start: 5,
      rel: 0,
      playlist: YOUTUBE_VIDEO_ID,
    },
  }

  const onVideoReady = (e) => {
    setVideo(e.target)
  }

  const onPlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
      video.pauseVideo()
    } else {
      setIsPlaying(true)
      video.playVideo()
    }
  }

  return (
    <SpaceWrapper>
      <Stars />
      <Twinkling />
      <YouTubeWrapper>
        <YouTube
          videoId={YOUTUBE_VIDEO_ID}
          opts={opts}
          onReady={onVideoReady}
        />
      </YouTubeWrapper>
      <GoBackLink>
        <Link href="/">go back</Link>
      </GoBackLink>
      {!isPlaying && (
        <PlayPauseButton type="button" onClick={onPlayPause}>
          ▶
        </PlayPauseButton>
      )}
      {isPlaying && (
        <SongLink
          href={`https://youtu.be/${YOUTUBE_VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="C21FX - DIVIDED WE FALL YouTube"
        >
          Song: C21FX - DIVIDED WE FALL
        </SongLink>
      )}
    </SpaceWrapper>
  )
}

export default Space
