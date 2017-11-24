import { css } from 'styled-components'

import { parsePercent } from '../util/unitConverter'

export const RATIO_OG = 0.525  // 630/1200 from 1200 x 630 resolution guideline

export const withRatioOG = css`
  height: 0;
  padding-bottom: ${parsePercent(RATIO_OG)};
`