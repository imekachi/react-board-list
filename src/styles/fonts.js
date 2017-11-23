export const FONT_FALLBACK = 'Arial, sans-serif'

export const FONT_FAMILY_NAMES = {
  SUKHUMVIT: 'Sukhumvit',
  TAHOMA: 'Tahoma'
}

export const FONT_FAMILTY = Object.keys(FONT_FAMILY_NAMES).reduce((families, font) => {
  families[font] = `${FONT_FAMILY_NAMES[font]}, ${FONT_FALLBACK}`
  return families
}, {})