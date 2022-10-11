import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading lineColors="secondary" lineBottom size="small" color="black">
          Contacts
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading lineColors="secondary" lineBottom size="small" color="black">
          Follow US
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="http://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading lineColors="secondary" lineBottom size="small" color="black">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading lineColors="secondary" lineBottom size="small" color="black">
          Location
        </Heading>

        <span>Rua das flores</span>
        <span>527 - 89020330</span>
        <span>Ceará, Brasil</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2022 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
)

export default Footer
