import React from 'react'

import {
	CloseScoreStyled,
	GridStyled,
	HeaderRowStyled,
	RowStyled,
	ScoreContainerStyled,
} from './score.styled'
import { ScoreProps } from './score.types'
import MagicNumber from '../magic-number'

const Score: React.FC<ScoreProps> = props => {
	const {
		averageTimePerQuestion,
		correctAnswers,
		onClose,
		quickestTimePerQuestion,
		slowestTimePerQuestion,
		title,
		unansweredAnswers,
	} = props

	return (
		<ScoreContainerStyled>
			<CloseScoreStyled onClick={onClose} data-testid='close' role='button'>
				✖️
			</CloseScoreStyled>
			<HeaderRowStyled>{title}</HeaderRowStyled>
			<GridStyled>
				<RowStyled>
					<h4>Correct</h4>
					<p>
						<MagicNumber value={correctAnswers} />
					</p>
				</RowStyled>
				<RowStyled>
					<h4>Unanswered</h4>
					<p>
						<MagicNumber value={unansweredAnswers} />
					</p>
				</RowStyled>
				<RowStyled>
					<h4>Average Time</h4>
					<p>
						<MagicNumber value={averageTimePerQuestion} />
					</p>
				</RowStyled>
				<RowStyled>
					<h4>Quickest Time</h4>
					<p>
						<MagicNumber value={quickestTimePerQuestion} />
					</p>
				</RowStyled>
				<RowStyled>
					<h4>Slowest Time</h4>
					<p>
						<MagicNumber value={slowestTimePerQuestion} />
					</p>
				</RowStyled>
			</GridStyled>
		</ScoreContainerStyled>
	)
}

export default Score
