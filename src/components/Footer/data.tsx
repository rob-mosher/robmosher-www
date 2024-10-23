import {
  FacebookIcon, GitHubIcon, LinkedInIcon, Wellfound, YouTubeIcon,
} from '@assets'
import type { TSocialMedia } from '../../types/socialMedia'

export const socialMediaItems: TSocialMedia[] = [
  {
    ariaLabel: 'YouTube Channel',
    href: 'https://www.youtube.com/user/robmoshermusic/',
    logo: <YouTubeIcon />,
  },
  {
    ariaLabel: 'Facebook Page',
    href: 'https://facebook.com/robmosher',
    logo: <FacebookIcon />,
  },
  {
    ariaLabel: 'GitHub Profile',
    href: 'https://github.com/rob-mosher',
    logo: <GitHubIcon />,
  },
  {
    ariaLabel: 'LinkedIn Profile',
    href: 'http://linkedin.com/in/rob-mosher-it',
    logo: <LinkedInIcon />,
  },
  {
    ariaLabel: 'Wellfound Profile',
    href: 'https://wellfound.com/u/robmosher',
    logo: <Wellfound />,
  },
]
