import React from 'react'
import UserContextComponent from './utils/UserContextComponent'
import Cards from './components/Cards.jsx'

export const UserContext = React.createContext()

function App() {
  
  return <><UserContextComponent>
  <div className='containner my-5'>
    <Cards/>
  </div>
  </UserContextComponent>
  </>
}

export default App