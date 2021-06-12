import React from 'react';
import BodyCard from "./BodyCard";

const BodyCards = ({info}) => {
    return (
        <div>   
            <div>
                <div className="text-2xl">
                    {info}
                </div>
            </div>
        </div>
    );
};

export default BodyCards;