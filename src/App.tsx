import { Button } from './components/button/Button'
import { Card } from './components/card/Card'

function App() {
  return (
    <div className='m-4'>
      <h1 className='text-2xl'>Card</h1>
      <Card headerText='Header' bodyText='Hello world body'  />
      <h1 className='text-2xl'>Button</h1>
      <Button buttonText='Button text' />
    </div>
  )
}

export default App
