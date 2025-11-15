import Header from "./components/Header/Header.jsx";

import CoreConceptSection from "./components/CoreConceptSection.jsx";
import Examples from "./components/Examples.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptSection />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
