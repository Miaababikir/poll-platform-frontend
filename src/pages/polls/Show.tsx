import React from 'react';
import {useParams} from "react-router-dom";

const Show = () => {

    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default Show;