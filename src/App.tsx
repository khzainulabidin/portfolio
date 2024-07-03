import { useState } from "react";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = (): React.JSX.Element => {
    const [underConstruction] = useState(true);

    return underConstruction ? <UnderConstruction /> : <LandingPage />;
}

export default App;