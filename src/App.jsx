import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT  = "https://catfact.ninja/fact"
//const CAT_ENDPOINT_RANDOM_IMAGE  = `https://cataas.com/cat/says/${factWords}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL  = "https://cataas.com"

function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Get a new fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  },[])

  // Get an imagen when we got a new fact
  useEffect(() => {
    if(!fact) return
    
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { _id } = response
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  },[fact])



  return (
    <main>
      <h1>Random Cat Facts</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && 
        <img 
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} 
          alt={`Image extracted using the first three words for ${fact}`} 
        />
      }
    </main>
  )
}

export default App
