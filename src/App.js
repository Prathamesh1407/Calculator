import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [result, setResult] = useState("");



  return (
    <div className="App">
      <Form result={result} setResult={setResult}></Form>
    </div>
  );
}

export default App;
