import { useState } from "react";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import LandingPage from "./pages/LandingPage/LandingPage";
import emailjs from '@emailjs/browser';

const App = (): React.JSX.Element => {
    emailjs.init({
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
    });

    const [underConstruction] = useState<boolean>(false);

    return underConstruction ? <UnderConstruction /> : <LandingPage />;
}

export default App;