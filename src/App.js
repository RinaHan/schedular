import logo from "./logo.svg";
import "./App.scss";
// import Select from "./comps/Select";

const Day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
function App() {
  return (
    <div className="Container">
      <div className="Web">
        <div className="Nav">❤️ Rina</div>
        <div className="Main">
          <div className="Header">Dashboard</div>
          <div className="Body">
            <div className="MainSec">
              <div className="InfoCont">
                <div className="InputCont">
                  <label for="a">Title</label>
                  <input id="a" type="text" placeholder="Title" />
                </div>
                <div className="InputCont">
                  <label for="b">Date</label>
                  <input id="b" type="text" placeholder="Day of the week" />
                </div>
                <div className="InputCont">
                  <label for="c">Time</label>
                  <input id="c" type="number" placeholder="Hours" />
                </div>
                {/* <Select/> */}
              </div>
              <div className="WeeklyCont">
                {Day.map((o,i)=>{
                  return(
                    <div className="Day">{o}</div>
                  )
                })}
              </div>
            </div>
            <div className="Aside"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
