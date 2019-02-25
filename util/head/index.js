let titleDOM = document.querySelector('head>title')
let metaDOM = Array.from(document.querySelectorAll('head>meta'))

const headPayload = {
  title: titleDOM,
  'og:title': metaDOM[2],
  'og:description': metaDOM[3],
  'og:image': metaDOM[5],
  'og:type': metaDOM[6]
}

const head = {
  title (text) {
    headPayload.title.innerText = `${text} - SITCON 學生計算機年會 | Students' Information Technology Conference`
  },
  ogTitle (text) {
    headPayload['og:title'].content = `${text} - SITCON 學生計算機年會 | Students' Information Technology Conference`
  },
  ogDescription (text) {
    headPayload['og:description'].content = text
  },
  ogImage (link) {
    headPayload['og:image'].content = link
  },
  ogType (text) {
    headPayload['og:type'].content = text
  }
}

export default head
