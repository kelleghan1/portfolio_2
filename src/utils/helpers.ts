export const validateNumber = (value: number | undefined | null ): boolean => {
  return (
    typeof value === 'number' &&
    !isNaN(value)
  )
}