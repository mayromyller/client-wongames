import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Home from '.'

import bannerMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
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

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/Red Dead/i)).toHaveLength(5)
    expect(screen.getAllByText(/gta/i)).toHaveLength(6)
  })
})
