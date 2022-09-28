import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <S.Wrapper color={color} lineBottom={lineBottom} lineLeft={lineLeft}>
    {children}
  </S.Wrapper>
)

export default Heading
