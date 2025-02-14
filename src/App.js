import Body from "./comonents/Body";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";

function App() {
  return (
    <Provider store={Appstore}>
      <Body />
    </Provider>
  );
}

export default App;
