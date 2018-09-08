import React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../theme'

export default ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
