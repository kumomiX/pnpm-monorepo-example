import { getCoreText } from 'ui-kit/core'
import { getImmutableText } from 'ui-kit/immutable'

export const getInfiniteText = () => {
  const coreText = getCoreText()
  const immutableText = getImmutableText()
  return 'infinite' + coreText + immutableText
}
