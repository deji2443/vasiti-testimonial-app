import MainHeader from "./menu/main-header.js";
import SubHeader from "./menu/sub-header.js";
import Main from "./main.js";
import Footer from "./menu//footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <SubHeader />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
