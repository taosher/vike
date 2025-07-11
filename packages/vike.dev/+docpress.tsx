export { config as default }

import type { Config } from '@brillout/docpress'
import { headings, headingsDetached, categories } from './headings'
import logo from './assets/logo/vike.svg'
import favicon from './assets/logo/vike-favicon.svg'
import { PROJECT_VERSION } from './PROJECT_VERSION'
import { discordInvite } from './links'
import { TopNavigation } from './TopNavigation'
import React from 'react'

const config: Config = {
  name: 'Vike',
  version: PROJECT_VERSION,
  url: 'https://vike.dev',
  tagline: 'The Framework *You* Control - Next.js & Nuxt alternative for unprecedented flexibility and stability.',
  logo,
  favicon,
  banner: 'https://vike.dev/banner.jpg',

  github: 'https://github.com/vikejs/vike',
  discord: discordInvite,
  twitter: '@vike_js',
  bluesky: 'vike.dev',

  headings,
  headingsDetached,
  categories,

  algolia: {
    appId: 'YMV9Y4B58S',
    apiKey: '9ac178c1a29ba00e8afb98365015f677',
    indexName: 'vike',
  },
  googleAnalytics: 'G-QW0N4TCTYF',

  pressKit: true,
  docsDir: 'packages/vike.dev',

  topNavigation: <TopNavigation />,
  navMaxWidth: 1140,
  navLogoSize: 41,
  navLogoStyle: {
    position: 'relative',
    top: -1,
  },
  navLogoTextStyle: {
    letterSpacing: '0.01em',
    fontWeight: 420,
    color: '#444',
  },
} satisfies Config
