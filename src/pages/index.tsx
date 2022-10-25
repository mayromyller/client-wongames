import Home, { HomeTemplateProps } from 'templates/Home'

import bannerMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularGames: gamesMock,
      mostPopularHighlight: highlightMock,

      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,

      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
