import logo from '../../images/LogoBN.png';
import './Navbar.css';

export default function Navbar() {
	return (
		<>
			<nav>
				<div className="input_search_space">
					<i className="bi bi-search"></i>
					<input type="text" placeholder="Pesquise por título..." />
				</div>
				<div>
					<img src={logo} alt="Breaking News Logo" />
				</div>
				<div>
					<button className="btn_primary">Entrar</button>
				</div>
			</nav>
		</>
	);
}
