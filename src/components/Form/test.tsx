import { renderWithTheme } from 'utils/tests/helper'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c0 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: colors,border ease-in;
        transition: colors,border ease-in;
      }

      .c0 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <main
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
