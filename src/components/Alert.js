import React, { useContext } from "react";
import { AllContext } from "../Context";
const Alert = () => {
    const { ShowAlert } = useContext(AllContext);

    return (
        <div >
            {
                ShowAlert?.status &&
                <div className={`alert alert-${ShowAlert.type} alert-dismissible fade show`} role="alert">
                    <strong>
                        {(ShowAlert.type)?.toUpperCase()}</strong>
                    : {ShowAlert.msg}
                </div>
            }
        </div>
    )
}

export default Alert