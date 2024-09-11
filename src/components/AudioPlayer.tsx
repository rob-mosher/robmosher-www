'use client'

import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import { useRef, useState, useEffect } from 'react'
import type { TAlbumTrack } from '@types'

export const AudioPlayer = ({ tracks }: {
    tracks: TAlbumTrack[]}) => {
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [duration, setDuration] = useState<number>(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = (track: TAlbumTrack) => {
    if (currentTrack === track.src) {
      audioRef.current?.pause()
      setCurrentTrack(null)
    } else {
      setCurrentTrack(track.src)
      if (audioRef.current) {
        audioRef.current.src = track.src
        audioRef.current.play()
      }
    }
  }

  // Convert time from seconds to minutes:seconds format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime)
      }
    }

    const setAudioData = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration)
      }
    }

    const currentAudio = audioRef.current

    currentAudio?.addEventListener('timeupdate', updateTime)
    currentAudio?.addEventListener('loadedmetadata', setAudioData)

    return () => {
      currentAudio?.removeEventListener('timeupdate', updateTime)
      currentAudio?.removeEventListener('loadedmetadata', setAudioData)
    }
  }, [currentTrack])

  if (!tracks || !Array.isArray(tracks) || tracks.length === 0) return null

  return (
    <div className='flex flex-col gap-4'>
      {tracks.map((track) => (
        <div key={track.title} className='flex w-full items-center rounded-md bg-gray-100 p-4'>
          <button
            type='button'
            className='mr-4 text-xl text-gray-700'
            onClick={() => handlePlay(track)}
          >
            {currentTrack === track.src
              ? <PauseIcon className='size-6' />
              : <PlayIcon className='size-6' />}
          </button>
          <div className='flex grow items-center justify-between'>
            <div className='flex flex-col'>
              <span className='text-lg'>{track.title}</span>
              {track.subTitle && (
                <span className='text-sm opacity-75'>{track.subTitle}</span>
              )}
            </div>
            {currentTrack === track.src && (
              <span className='text-sm'>
                {formatTime(currentTime)}
                {' '}
                /
                {' '}
                {formatTime(duration)}
              </span>
            )}
          </div>
        </div>
      ))}
      <audio ref={audioRef} controls className='hidden'>
        <track
          kind='descriptions'
          srcLang='en'
          label='Music description'
          default
          src={
      currentTrack
        ? `data:text/vtt,WEBVTT\n\n00:00:00.000 --> 00:00:10.000\nMusic for ${tracks.find((track) => track.src === currentTrack)?.title}`
        : ''
    }
        />
      </audio>

    </div>
  )
}
