import {NavBar} from "./components/NavBar"
import './App.css';
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
    <div className="App">
     <NavBar />
    </div>
    </ThemeProvider>
  );
}

export default App;
