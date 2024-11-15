import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar.tsx";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <header>
                <Toolbar />
            </header>

            <div className='main-container'>
                {children}
            </div>
        </>
    );
};

export default Layout;