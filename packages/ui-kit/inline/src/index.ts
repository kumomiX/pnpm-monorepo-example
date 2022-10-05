import { getCoreText } from '@kumomix/ui-kit-core'

export const getInlineText = () => {
  const coreText = getCoreText()

  const newText = 'inline' + coreText

  return newText
}
