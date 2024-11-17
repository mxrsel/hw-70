import React, {PropsWithChildren} from 'react';
import Toolbar from "../Toolbar/Toolbar.tsx";

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <header>
                <Toolbar />
            </header>

            <div className='main-container bg-dark mt-4' style={{borderRadius: '10px'}}>
                {children}
            </div>
        </>
    );
};

export default Layout;