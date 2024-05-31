import { Block } from './components/Block/Block.jsx';
import CardList from './components/CardList/CardList.jsx';
import "./index.css";

function App() {

  return (
    <>
        <div className="page">
          <div className='left-page'><Block/></div>
          <div className='right-page'><CardList/></div>
          
    </div>

    </>
  )
}

export default App
