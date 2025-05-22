
import './App.css'

function App() {

  return (
    <div>
      <Text display="what's up"/>
      <Text/>
      

    </div>

  )
}


function Text({display}) {

  return (
    <div>
      <p>hello</p>
      <p>{display}</p>

    </div>

  )
}

export default App
