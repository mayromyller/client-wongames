import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import BannerSlide from 'components/BannerSlide'
import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularGames: GameCardProps[]
  mostPopularHighlight: HighlightProps

  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]

  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlide items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColors="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} arrowColor="black" />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Container>
        <Heading lineLeft lineColors="secondary" color="white">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColors="secondary" color="white">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} />
      </Container>
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Container>
        <Heading lineLeft lineColors="secondary" color="white">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>
    </S.SectionFreeGames>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
