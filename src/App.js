import {useState} from 'react';
import './App.scss';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [nbrOfPeople, setNbrOfPeople] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const resetButton = () => {
    setBill(0);
    setTip(0);
    setNbrOfPeople(0);
    setTipPerPerson(0);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">SPLITTER</h1>
      </header>
      <main>
        <div className="splitter">
          <div className="splitter-left">
            <section>
              <p>Bill</p>
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </section>
            <section>
              <p>Select Tip %</p>
              <div className="tipsChoices">
                <button
                  onClick={() => setTip(5)}
                >5%</button>
                <button
                  onClick={() => setTip(10)}
                >10%</button>
                <button
                  onClick={() => setTip(15)}
                >15%</button>
                <button
                  onClick={() => setTip(25)}
                >25%</button>
                <button
                  onClick={() => setTip(50)}
                >50%</button>
                <input
                  type="number"
                  value={tip}
                  onChange={(e) => setTip(e.target.value)}
                />
              </div>
            </section>
            <section>
              <p>Number of people</p>
              <input
                type="number"
                value={nbrOfPeople}
                onChange={(e) => setNbrOfPeople(e.target.value)}
              />
            </section>
          </div>
          <div className="splitter-right">
            <section className="splitter-right-section">
              <div>
                <p>Tip Amount</p>
                <p className="perPerson">/ person</p>
              </div>
                <p className="price">${tipPerPerson}</p>
            </section>
            <section className="splitter-right-section">
              <div>
                <p>Total</p>
                <p className="perPerson">/ person</p>
              </div>
              <div>
                <p className="price">${bill === 0 || nbrOfPeople === 0 ? 0 : (bill * (tip > 0 ? (1 + (tip / 100)) : 1) / nbrOfPeople).toFixed(2)}</p>
              </div>
            </section>
            <button
              onClick={() => resetButton()}
            >RESET</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
