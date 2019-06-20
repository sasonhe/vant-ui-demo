import defaultSettings from '@/settings'

const title = defaultSettings.title || '中医药展'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
