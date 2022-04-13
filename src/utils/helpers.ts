export const validateNumber = (value: number | undefined | null): boolean => {
  return (
    typeof value === 'number' &&
    !isNaN(value)
  )
}

export const trueVal = (value: string | number | undefined | null): boolean => {
  return (
    value !== undefined &&
    value !== null &&
    value !== ''
  )
}

export const preloadImages = async (imageUrls: string[]): Promise<null[]> =>
  await Promise.all(imageUrls.map(async url =>
    await new Promise(resolve => {
      const imageObject = new Image()
      imageObject.onload = () => { resolve(null) }
      imageObject.onerror = () => { resolve(null) }
      imageObject.src = url
    })))
