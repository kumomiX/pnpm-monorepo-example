import { getA } from '@kumomix/ui-kit-a'

export const getB = () => {
  const a = getA()
  const b = 'b' as const

  const result = a + b

  return result
}
