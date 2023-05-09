import './App.css';
import ListItem  from './ListItem';


function App() {
  return (
   <div className='App'>

      <h1 className='appTitle'>Project 4: Shopping List</h1>

      <main className='todo-container'>

        <h2>Items To Buy</h2>

        <form>
          <div className='entry-container'>
            <input type="text" placeholder='Add a new item' />
            <button className='btn-add'>Add</button>
          </div>
          <div className='list-container'>
            <ListItem text={"Hello"} />
            <ListItem text={"World !"}/>
            <ListItem text={"I want"}/>
            <ListItem text={"to be"}/>
            <ListItem text={"good!"}/>
          </div>
        </form>

      </main>
    
   </div>
  );
}

export default App;
