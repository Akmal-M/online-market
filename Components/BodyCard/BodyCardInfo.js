import React from 'react';
import BodyCards from "./BodyCards";

const BodyCardInfo = () => {
    return (
        <div>
            <BodyCards
                info={'hello'}
                age={25}
            />
        </div>
    );
};

export default BodyCardInfo;