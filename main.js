import ListOfPost from './src/pages/ListOfPost'
import ListOfPersonnage from './src/pages/ListOfPersonnage'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfPersonnage,
    params: [1, 'hello']
  },
  page2: {
    component: ListOfPost,
    params: ['https://jsonplaceholder.typicode.com/posts']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

tabManager.openTabById('page1')
