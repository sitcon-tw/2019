let titleDOM = document.querySelector('head>title')
let metaDOM = Array.from(document.querySelectorAll('head>meta'))

const headPayload = {
  title: titleDOM,
  'og:title': metaDOM[2],
  'og:description': metaDOM[3],
  'og:url': metaDOM[4],
  'og:image': metaDOM[5],
  'og:type': metaDOM[6]
}

const defaultTitle = `SITCON 2019 學生計算機年會 | Students' Information Technology Conference`

const head = {
  reset () {
    headPayload.title.innerText = defaultTitle
    headPayload['og:title'].content = defaultTitle
  },
  title (text) {
    headPayload.title.innerText = `${text} | ${defaultTitle}`
  },
  ogTitle (text) {
    headPayload['og:title'].content = `${text} | ${defaultTitle}`
  },
  ogDescription (text) {
    headPayload['og:description'].content = text
  },
  ogImage (link) {
    headPayload['og:image'].content = link
  },
  ogType (text) {
    headPayload['og:type'].content = text
  },
  ogUrl (link) {
    headPayload['og:url'].content = link
  }
}

export default head
