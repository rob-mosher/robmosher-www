import { render, screen, fireEvent } from '@testing-library/react'
import { AudioPlayer } from '../../src/components/AudioPlayer'

describe('AudioPlayer', () => {
  const mockTracks = [
    { title: 'Track 1', src: '/audio/track1.mp3' },
    { title: 'Track 2', src: '/audio/track2.mp3' },
  ]

  // Mock the play and pause functions since they are not implemented in JSDOM
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
      configurable: true,
      writable: true,
      value: jest.fn(),
    })

    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      writable: true,
      value: jest.fn(),
    })
  })

  test('plays and pauses the correct track', () => {
    render(<AudioPlayer tracks={mockTracks} />)

    // Find the play button and simulate clicking it to play the track
    const playButton = screen.getAllByLabelText('Play')[0]
    fireEvent.click(playButton)

    // Check that the button changes to pause
    expect(screen.getByLabelText('Pause')).toBeInTheDocument()

    // Simulate clicking the button again to pause the track
    fireEvent.click(screen.getByLabelText('Pause'))
    expect(screen.getAllByLabelText('Play')[0]).toBeInTheDocument()
  })

  test('displays the current time and duration, including formatting for leading zeros', () => {
    render(<AudioPlayer tracks={mockTracks} />)

    // Find the play button and simulate clicking it to start playing the track
    const playButton = screen.getAllByLabelText('Play')[0]
    fireEvent.click(playButton)

    // Mock the audio element and set duration and currentTime
    const audioElement = document.querySelector('audio') as HTMLAudioElement
    Object.defineProperty(audioElement, 'currentTime', { value: 4, writable: true })
    Object.defineProperty(audioElement, 'duration', { value: 121, writable: true })

    // Trigger events to simulate audio playback and metadata loading
    fireEvent(audioElement, new Event('timeupdate'))
    fireEvent(audioElement, new Event('loadedmetadata'))

    // Check that the current time and duration are displayed correctly
    expect(screen.getByText(/0:04/)).toBeInTheDocument() // Current time should show leading zero
    expect(screen.getByText(/2:01/)).toBeInTheDocument() // Total duration should show properly formatted time
  })

  test('renders nothing when no tracks are passed', () => {
    const { container } = render(<AudioPlayer tracks={[]} />)
    expect(container.firstChild).toBeNull()
  })
})
