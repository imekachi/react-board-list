export const FONT_FALLBACK = 'Arial, sans-serif'

export const FONT_FAMILY_NAMES = {
  SUKHUMVIT: 'Sukhumvit',
  TAHOMA: 'Tahoma'
}

export const LINE_HEIGHTS = {
  DEFAULT: 'normal', // 1.2142857142857142 = (17 / 14) browser default
  SM: 1.2857142857142858, // (18 / 14)
  MD: 1.4285714285714286, // (20 / 14)
}

export const FONT_FAMILIES = Object.keys(FONT_FAMILY_NAMES).reduce((families, font) => {
  families[font] = `${FONT_FAMILY_NAMES[font]}, ${FONT_FALLBACK}`
  return families
}, {})