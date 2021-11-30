import "./styles.css";
var color = "blue";
var headingText = "welcome";
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
    </div>
  );
}
