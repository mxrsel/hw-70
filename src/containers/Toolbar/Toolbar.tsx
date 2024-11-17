import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='container bg-dark mt-3 p-2' style={{borderRadius: '10px'}}>
        <div className='navbar w-100'>
            <NavLink className='navbar-brand text-light' to='/'>Contacts</NavLink>
            <NavLink className='btn btn-primary' to='/newContact'>Add New Contact</NavLink>
        </div>
        </div>
    );
};

export default Toolbar;