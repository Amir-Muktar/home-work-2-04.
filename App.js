import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Content />
      <Footer />
    </div>


  );
}
function Header() {
  return (
      <>
        <h1> Muktarbekov </h1>
        <title/>
        </>
  )
}
function Content() {
  return (
      <>
        <h1>Amir</h1>
        <title/>
        </>
  )
}
function Footer() {
  return (
      <>
        <h1>Samarbekovich</h1>
        <title/>
        </>
  )
}
function Title() {
    return (
        <>
            <h1>2009</h1>
            <title/>
            </>
    )
}
export default App;
