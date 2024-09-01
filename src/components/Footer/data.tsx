import {
  FacebookIcon, GitHubIcon, LinkedInIcon, YouTubeIcon,
} from '@assets'
import type { TSocialMedia } from '../../types/socialMedia'

export const socialMediaItems: TSocialMedia[] = [
  {
    id: 'social-media-item-youtube',
    ariaLabel: 'YouTube Channel',
    href: '#',
    logo: <YouTubeIcon />,
  },
  {
    id: 'social-media-item-facebook',
    ariaLabel: 'Facebook Page',
    href: '#',
    logo: <FacebookIcon />,
  },
  {
    id: 'social-media-item-github',
    ariaLabel: 'GitHub Profile',
    href: '#',
    logo: <GitHubIcon />,
  },
  {
    id: 'social-media-item-linkedin',
    ariaLabel: 'LinkedIn Profile',
    href: '#',
    logo: <LinkedInIcon />,
  },
]