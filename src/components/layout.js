import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { withTheme } from 'emotion-theming'

import { rhythm, scale } from '../utils/typography'

const Wrapper = ({ children, backgroundColor = `transparent` }) => (
  <div css={{ backgroundColor }} />
)
class Template extends React.Component {
  render() {
    const { children } = this.props

    const header = (
      <h4
        css={{
          color: this.props.theme.complimentaryAccentColor,
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          css={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Gatsby Starter Blog
        </Link>
      </h4>
    )
    const sidebarWidth = rhythm(4)

    return (
      <Fragment>
        <div
          css={{
            backgroundColor: this.props.theme.linkColor,
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
            '@media (min-width: 600px)': {
              width: sidebarWidth,
              height: `100vh`,
              position: `fixed`,
            },
          }}
        >
          {header}
        </div>
        <div
          css={{
            '@media (min-width: 600px)': {
              marginLeft: sidebarWidth,
            },
          }}
        >
          <div
            css={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            {children}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withTheme(Template)
