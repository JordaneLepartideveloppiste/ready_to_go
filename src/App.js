
import { useState } from 'react';
import './App.css';

function App() {

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

const handleClickOn1 = () => {
  setSwitch1(true);
}
const handleClickOff1 = () => {
  setSwitch1(false);
}

  return (
    <div className="App">
      <div className="ready_to_go">
        <div className="buttons">
          <div id="switch1">
            <button
              onClick={handleClickOn1}
              style={{
                backgroundColor: switch1 && "purple",
                color: switch1 ? "white" : "darkgray",
              }}
            >
              ON
            </button>
            <button
              onClick={handleClickOff1}
              style={{
                backgroundColor: !switch1 && "purple",
                color: !switch1 ? "white" : "darkgray",
              }}
            >
              OFF
            </button>
          </div>
          <div id="switch2">
            <button>ON</button>
            <button>OFF</button>
          </div>
          <div id="switch3">
            <button>ON</button>
            <button>OFF</button>
          </div>
        </div>
        <div className="message"></div>
      </div>
    </div>
  );
}

export default App;
