import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailInfo } from "../services/starwarsServices.js";


export const Details = ({ name }) => {

    const { store, dispatch } = useGlobalReducer()

    let params = useParams();
    console.log(params);

    useEffect(() => {
        getDetailInfo(params.id)
        .then((data) => dispatch({ type: "update_characters", payload: data }))
    }, []);


    return (
        <div className="text-center mt-5">
            <h1>{name}</h1>
            <p>
                {params.id}
            </p>
        </div>
    );
}; 