import React from 'react';
import ButtonSpinner from "./ButtonSpinner.tsx";

interface Props {
    isLoading?: boolean;
    text: string;
    isDisabled?: boolean;
    type?: 'submit' | 'button'
}

const ButtonLoading: React.FC<Props> = ({isLoading = false, text, isDisabled = false, type = 'submit'}) => {
    return (
        <div>
            <button disabled={isDisabled} type={type} className='btn btn-primary f-dlex align-items-center'>
                <span className='me-2'>{text}</span>
                {isLoading ? <ButtonSpinner/> : null}
            </button>
        </div>
    );
};

export default ButtonLoading;