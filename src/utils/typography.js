import Typography from 'typography'
import 'typeface-work-sans'
import 'typeface-taviraj'

import theme from '../../theme'

const options = {
  headerFontFamily: [`Work Sans`, `sans-serif`],
  bodyFontFamily: [`Taviraj`, `sans-serif`],
  headerWeight: 700,
  blockMarginBottom: 0.6,
  baseLineHeight: 1.42,
  baseFontSize: `18px`,
  headerLineHeight: 1.05,
  scaleRatio: 2.6,
  overrideStyles: () => {
    return {
      'h1,h2,h3,h4,h5,h6': {
        color: theme.headerColor,
      },
      a: {
        textDecoration: `none`,
        color: theme.linkColor,
      },
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
