import { getCoreText } from 'ui-kit/core'

const getImmutableText = () => {
  const coreText = getCoreText()

  return coreText + 'immutable'
}

export { getImmutableText }
