import styled from 'styled-components'

import { primary } from '../../constants/colors.constants'
import { StyledHiddenContainer } from '../../types/game.types'

export const GameStyledContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${primary};
`
GameStyledContainer.displayName = 'GameStyledContainer'

export const LobbyStyledContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2em;
	background: ${primary};
	z-index: 10;
	position: absolute;
	transform: ${(props: StyledHiddenContainer) =>
		props.isHidden ? 'translateY(-100vh)' : 'translateY(0)'};
	transition: 500ms;
`
LobbyStyledContainer.displayName = 'LobbyStyledContainer'

export const ScoreStyledContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2em;
	background: ${primary};
	z-index: 10;
	height: 100vh;
	width: 100vw;
	position: absolute;
	transform: ${(props: StyledHiddenContainer) =>
		props.isHidden ? 'translateY(+100vh)' : 'translateY(0)'};
	transition: 500ms;
`
ScoreStyledContainer.displayName = 'ScoreStyledContainer'

export const QuestionStyledContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-self: stretch;
	justify-content: space-between;
	overflow: hidden;
	background: ${primary};
	z-index: 10;
	height: 100vh;
	width: 100vw;
	position: absolute;
	transform: ${(props: StyledHiddenContainer) =>
		props.isHidden ? 'translateX(-100vw)' : 'translateX(0)'};
	transition: 500ms;
`
QuestionStyledContainer.displayName = 'QuestionStyledContainer'
