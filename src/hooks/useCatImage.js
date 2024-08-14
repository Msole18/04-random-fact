import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL  = "https://cataas.com"

export const useCatImage = ({fact}) => {
  const [imageUrl, setImageUrl] = useState()

  // Get an imagen when we got a new fact
  useEffect(() => {
    if(!fact) return
  
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
       console.log(response)
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)                    
    }) 
  },[fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}