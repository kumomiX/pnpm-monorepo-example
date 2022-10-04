import { getCoreText } from 'ui-kit'
import { getImmutableText } from 'ui-kit/immutable'

export const getInfiniteText = () => {
  const coreText = getCoreText()
  const immutableText = getImmutableText()
  return 'infinite' + coreText + immutableText
}
