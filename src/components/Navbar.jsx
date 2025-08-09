import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	function deleteFav(name) {
		dispatch({type: "delete_favs", payload: name})
		
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a href="/"> {/* Con el Link to se rompe el código y muestra un Not found! en la página en vez de volver*/}
					<span className="navbar-brand mb-0 h1">Volver</span>
				</a>
			

				<div className="dropdown">
					<button className="btn Favs dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos <i className="fa-regular fa-heart"></i>
					</button>
					<ul className="dropdown-menu">
						{store.favs.map((item, index) => (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
								<span>{item.name}</span>
								<button className="btn btn-outline-danger" style={{paddingBottom: "1px", paddingTop: "1px", paddingLeft: "4px", paddingRight: "4px"}} onClick={()=>deleteFav(item.name)}>×</button>
							</li>
						))}

					</ul>
				</div>
			</div>
		</nav>
	);
};