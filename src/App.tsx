import Layout from "./containers/Toolbar/Layout/Layout.tsx";
import {Route, Routes} from "react-router-dom";
import NewContact from "./containers/NewContact/NewContact.tsx";
import MainPage from "./containers/MainPage/MainPage.tsx";
import EditContact from "./components/EditContact/EditContact.tsx";

const App = () => {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/newContact' element={<NewContact />} />
                    <Route path='/editContact/:contactId' element={<EditContact/>} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
            </Layout>
        </>
    );
};

export default App;