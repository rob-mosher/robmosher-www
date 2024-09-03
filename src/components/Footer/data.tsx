import {
  FacebookIcon, GitHubIcon, LinkedInIcon, YouTubeIcon,
} from '@assets'
import type { TSocialMedia } from '../../types/socialMedia'

export const socialMediaItems: TSocialMedia[] = [
  {
    id: 'social-media-item-youtube',
    ariaLabel: 'YouTube Channel',
    href: 'https://www.youtube.com/user/robmoshermusic/',
    logo: <YouTubeIcon />,
  },
  {
    id: 'social-media-item-facebook',
    ariaLabel: 'Facebook Page',
    href: 'https://facebook.com/robmosher',
    logo: <FacebookIcon />,
  },
  {
    id: 'social-media-item-github',
    ariaLabel: 'GitHub Profile',
    href: 'https://github.com/rob-mosher',
    logo: <GitHubIcon />,
  },
  {
    id: 'social-media-item-linkedin',
    ariaLabel: 'LinkedIn Profile',
    href: 'http://linkedin.com/in/rob-mosher-it',
    logo: <LinkedInIcon />,
  },
]
