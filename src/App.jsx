import { useEffect } from "react";
import { useSelector } from "react-redux";
import Days from "./components/Card/Days";
import Header from './components/Header'
import Loader from "./components/Loader";
import ThisDay from "./components/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo";
import { selectLoadingStatus } from "./store/weather/weatherSelectors";


function App() {

  const { theme } = useSelector(state => state)
  const loading = useSelector(selectLoadingStatus)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  })

  return (
    <div className="container">
      <Header />
      {loading ? <Loader /> :
        <>
          <div className="wrapper">
            <ThisDay />
            <ThisDayInfo />
          </div>
          <Days />
        </>
      }
    </div>
  );
}

export default App;
