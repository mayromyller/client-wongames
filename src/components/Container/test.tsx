import { renderWithTheme } from '../../utils/tests/helper'

import { Container } from '.'
import theme from 'styles/theme'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `)
  })
})
