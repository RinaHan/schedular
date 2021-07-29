import logo from "./logo.svg";
import "./App.scss";
import DateComponent from "./comps/DateComponent";
import Inputs from "./comps/Inputs";
// import Select from "./comps/Select";

const Date = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
                {/* <div className="InputCont">
                  <label for="a">Title</label>
                  <input id="a" type="text" placeholder="Title" />
                </div> */}
                <Inputs label="Title" type="text" placeholder="Title"/>
                <div className="InputCont">
                  <DateComponent />
                </div>
                {/* <div className="InputCont">
                  <label for="c">Time</label>
                  <input id="c" type="number" placeholder="Hours" />
                </div> */}
                <Inputs label="Hours" type="text" placeholder="Hours"/>
                <button className="ButtonCont"
              onClick={()=>{

              }}
                >
                Create the schedule
                </button>
              </div>

              <div className="WeeklyCont">
                {Date.map((o, i) => {
                  return <div className="Date">{o}</div>;
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
