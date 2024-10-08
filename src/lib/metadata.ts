export const defaultPageTitle: string = 'Rob Mosher'
export const defaultPageTitleHomepage: string = 'Rob Mosher - Composer, Woodwinds, & Technology'
export const defaultMetaDescription: string = 'Official site for Rob Mosher, featuring music, projects, and more'

export const getPageTitle = (title: string): string => {
  if (!title || title.trim() === '') {
    throw new Error('Title cannot be empty.')
  }
  return `${title} — ${defaultPageTitle}`
}
