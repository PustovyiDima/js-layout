export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_PARAMS = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow-back-outline.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/IMG_4737 1.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_PARAMS.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })

  return header
}
