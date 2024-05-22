import './App.css'
import Counter from './Counter/Counter'
import Teachers from './Teachers/Teachers'

function App() {

  return (
    <div>
      <div>
        <Counter initialState={0} jumps={2} />
        <Counter initialState={5} jumps={5} />
        <Counter initialState={10} jumps={10} />
      </div>
      <div>
        <Teachers defaultname={"Sofia"}/>
      </div>
    </div>
  )
}

export default App
