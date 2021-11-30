import "./styles.css";
var color = "blue";
var userName = prompt("give me your name");
var headingText = "welcome " + userName;
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
    </div>
  );
}
