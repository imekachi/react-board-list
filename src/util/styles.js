/**
 * Make background image with no-repeat center center
 *
 * @param   {string} url
 * @param   {string|number} bgSize
 * @return  {string}
 */
export const bgImage = (url, bgSize) => {
  let style =  `background: url(${url}) no-repeat center center;`

  if (bgSize) {
    style += `background-size: ${bgSize};`
  }

  return style
}