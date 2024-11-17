
const ButtonSpinner = () => {
    return (
        <div>
            <div className="btn btn-primary" >
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </div>
        </div>
    );
};

export default ButtonSpinner;