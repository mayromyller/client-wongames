import SlideProvider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlideProvider {...settings}>{children}</SlideProvider>
  </S.Wrapper>
)

export default Slider
