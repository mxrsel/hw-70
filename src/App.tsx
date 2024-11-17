import Layout from "./containers/Toolbar/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewContact from "./containers/NewContact/NewContact.tsx";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/newContact' element={<NewContact />} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;