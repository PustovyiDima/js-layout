import {
  createElement,
  createHeader,
} from '../../script/layout'

const page1 = document.querySelector('.page_1')
const page2 = document.querySelector('.page_2')
// const title = createElement('h1', 'title', 'Мій блог')

page1.append(createElement('h1', 'title', `Мій блог`))
page2.append(createElement('h1', 'title', `Ком'юніті`))

// const header = createHeader()

page1.prepend(createHeader())
page2.prepend(createHeader())
// ========================================

const POST_LIST = [
  {
    categories: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    date: '25.01',
    text: `До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс`,
    viewed: false,
  },
  {
    categories: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    date: '15.01',
    text: `Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.`,
    viewed: true,
  },
  {
    categories: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    date: '25.01',
    text: `До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс`,
    viewed: false,
  },
]

const createPostList = () => {
  const list = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed ? 'post post__viewed' : 'post',
    )

    const postHeader = createElement('div', 'post__header')

    const postList = createElement(
      'div',
      'post__category--list',
    )

    postData.categories.forEach((category) => {
      const post_category = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )

      postList.append(post_category)
    })

    const postDate = createElement(
      'span',
      'post__date',
      postData.date,
    )

    postHeader.append(postList, postDate)

    const postInfo = createElement(
      'p',
      'post__info',
      postData.text,
    )

    post.append(postHeader, postInfo)

    list.append(post)
  })
  return list
}

const postList = createPostList()

page1.append(postList)
// ========================================

const TAGS_LIST = [
  { title: 'База знань', isActive: false },
  { title: 'Інформація', isActive: true },
]

const createTagsList = () => {
  const tags = createElement('div', 'tags__list')
  TAGS_LIST.forEach((tagData) => {
    const tag = createElement(
      'button',
      tagData.isActive ? 'tag tag__active' : 'tag',
      tagData.title,
    )
    tags.append(tag)
  })
  return tags
}

page2.append(createTagsList())

// ========================================

const createImage = (data) => {
  const image = createElement('img', 'tag__img')

  Object.entries(data).forEach(([key, value]) => {
    image[key] = value
  })
  return image
}

page2.append(
  createImage({
    src: '/img/image.png',
    width: 343,
    height: 160,
  }),
)

// ========================================

const createInfoSection = (title, text) => {
  const tagInfo = createElement('div', 'tag__info')
  const tittle = createElement('h2', 'tag__title', title)
  const description = createElement('p', 'tag__text', text)

  tagInfo.append(tittle, description)
  return tagInfo
}

page2.append(
  createInfoSection(
    'Що таке база знань?',
    `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. `,
  ),
)
// ========================================
const button = createElement(
  'button',
  'tag__button',
  `Перейти до ком'юніті у Телеграм`,
)
page2.append(button)
