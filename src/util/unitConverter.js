import { getNumber } from './number'

export const stripUnit = inputStr => getNumber(inputStr)

export const parsePixel = value => value + 'px'

export const parsePercent = value => getNumber(value) * 100 + '%'

export const parseTime = (value, unit = 'ms') => value + unit

