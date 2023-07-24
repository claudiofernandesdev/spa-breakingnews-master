import styled from 'styled-components';

export const CardContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 100%;
	padding: 1.5rem;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 0.5rem;
`;
export const CardBody = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	h2 {
		margin-bottom: 1rem;
		font-family: var(--title-text-font);
		font-weight: 700;
	}

	img {
		width: 30%;
		object-fit: cover;
		object-position: center;
	}
`;

export const CardFooter = styled.article`
	display: flex;
	align-items: center;
	gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: .25rem;
    }
`;
