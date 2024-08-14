import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'
// const CAT_PREFIX_IMAGE_URL  = "https://cataas.com"

function App() {
  const {fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({fact})

  const handleClick = async () => { refreshFact() }

  return (
    <main>
      <h1>Random Cat Facts</h1>

      <button onClick={handleClick} >Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && 
        <img 
          src={imageUrl} 
          alt={`Image extracted using the first three words for ${fact}`} 
        />
      }
    </main>
  )
}

export default App
