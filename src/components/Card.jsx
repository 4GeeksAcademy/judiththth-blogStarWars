import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({name, gender, hair, eyes}) => {


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{gender}</p>
                    <p className="card-text">{hair}</p>
                    <p className="card-text">{eyes}</p>
                    <a href="#" className="btn btn-primary">Leer más</a> <span><a className="btn btn-danger"> like </a></span>
                </div>
        </div>
    );
}; 