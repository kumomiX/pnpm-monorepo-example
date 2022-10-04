import { getCoreText } from 'ui-kit'

const getImmutableText = () => {
  const coreText = getCoreText()

  return coreText + 'immutable'
}

export { getImmutableText }
