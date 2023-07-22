import styled from 'styled-components';

export const Nav = styled.nav`
	height: 5rem;
	width: 100%;
	background: var(--black-olive);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	position: fixed;
    top: 0;
	z-index: 1;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const ImageLogo = styled.img`
	width: 8rem;
	height: 3.5rem;
	object-fit: cover;
	cursor: pointer;
`;

export const InputSpace = styled.div`
	position: relative;
	width: 200px;
	display: flex;
	align-items: center;

	i {
		position: absolute;
		top: 1;
		right: 0.2rem;
		z-index: 10;
		border: none;
		background: var(--background-color);
		color: var(--text-color);
		border-radius: 0.3rem;
		padding: 0.3rem;
		cursor: pointer;

        &:hover {
            color: var(--blue-medium-color);
        }
	}

	input {
		outline: none;
		font-size: 1rem;
		padding: 0.6rem;
		background: var(--background-color);
		border: none;
		border-radius: 0.3rem;
		width: 100%;
        font-family: var(--title-text-font);

		&:focus {
			border: 1px solid var(--blue-color);
		}
	}
`;

export const Button = styled.button`
	background-color: var(--blue-color);
	border: none;
	outline: none;
	font-size: 1rem;
	padding: 0.65rem 1.3rem;
	color: #f5f5f5;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	border-radius: 0.3rem;
	font-family: var(--title-text-font);
	font-weight: 700;
	letter-spacing: 0.1rem;
	text-transform: uppercase;

	&:hover {
		background-color: var(--blue-medium-color);
	}
`;
