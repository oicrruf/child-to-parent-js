import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [size, setSize] = useState(100)
  const [filter, setFilter] = useState('original')

  useEffect(() => {
    console.log(size)
  }, [size])

  return (
    <div className="App">
      <h1>Child to Parent</h1>
      <Image filter={filter} size={size} />
      <Button size={size} action={setSize} />
      <GrayScale action={setFilter} />
      <Blur action={setFilter} />
      <Invert action={setFilter} />
      <Original action={setFilter} />
    </div>
  );
}

const Image = ({ size, filter }) => {
  return (
    <div>
      <img className={filter} src={`https://picsum.photos/${size}/${size}`} alt="mi-imagen" />
    </div>
  )
}

const Button = ({ size, action }) => {
  return (
    <button onClick={() => action(Math.ceil(size * 1.5))}>Zoom +</button>
  )
}

const Original = ({ action }) => {
  return (
    <button onClick={() => action('original')}>Original</button>
  )
}

const GrayScale = ({ action }) => {
  return (
    <button onClick={() => action('grayscale')}>GrayScale</button>
  )
}

const Blur = ({ action }) => {
  return (
    <button onClick={() => action('blur')}>Blur</button>
  )
}

const Invert = ({ action }) => {
  return (
    <button onClick={() => action('invert')}>Invert</button>
  )
}

export default App;
