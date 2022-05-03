import { ImageLoadCallbackType, TrueMapType } from '../types/sharedTypes'

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

export const preloadImagesIndividual = (
  imageUrls: string[],
  imageLoadCallback: ImageLoadCallbackType
): void => {
  for (let i = 0; i < imageUrls.length; i++) {
    const imageUrl = imageUrls[i]
    const imageObject = new Image()

    imageObject.onload = () => { imageLoadCallback(imageUrl) }
    imageObject.onerror = () => { imageLoadCallback(imageUrl) }
    imageObject.src = imageUrl
  }
}

export const preloadImagesAll = async (imageUrls: string[]): Promise<TrueMapType> => {
  const imagesLoadedMap: TrueMapType = {}

  await Promise.all(imageUrls.map(async imageUrl => {
    imagesLoadedMap[imageUrl] = await new Promise(resolve => {
      const imageObject = new Image()

      imageObject.onload = () => { resolve(true) }
      imageObject.onerror = () => { resolve(true) }
      imageObject.src = imageUrl
    })
  }))

  return imagesLoadedMap
}

export const scrollToTop = (): void => {
  if (window.scrollTo) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
