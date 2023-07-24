import logo from '../../images/LogoBN.png';
import { Button, ImageLogo, InputSpace, Nav } from './NavbarStyled';

export default function Navbar() {
	return (
		<>
			<Nav>
				<InputSpace>
					<i className="bi bi-search"></i>
					<input type="text" placeholder="Pesquise por título..." />
				</InputSpace>
				<div>
					<ImageLogo src={logo} alt="Breaking News Logo" />
				</div>
				<div>
					<Button>Entrar</Button>
				</div>
			</Nav>
		</>
	);
}


