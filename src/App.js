import './App.css';
import Homepage from "./components/Homepage";
import Layouts from './components/Layouts';
function App() {
  function checkLogin() {
    var user = window.sessionStorage.getItem('user');
    console.log(user);
    if (user === null || user === "undefined") return (<Homepage />)
    else return (<Layouts />);
  }

  return (
    <div className='App'>
      {checkLogin()}
    </div>
  );
}

export default App;
