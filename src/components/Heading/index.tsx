import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColors?: LineColors
}

const Heading = ({
  children,
  color = 'white',
  lineBottom = false,
  lineLeft = false,
  size = 'medium',
  lineColors = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    lineBottom={lineBottom}
    lineColors={lineColors}
    lineLeft={lineLeft}
    color={color}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
