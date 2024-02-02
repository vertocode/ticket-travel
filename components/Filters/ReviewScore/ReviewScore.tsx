import { ReactElement } from 'react'
import '@/styles/components/Filters/ReviewScore/ReviewScore.scss'

const ReviewScore = (): ReactElement => {
	const reviewScoreConfig = [
		{ reviewScore: 9, label: 'Excelente', quantity: '543' },
		{ reviewScore: 8, label: 'Muito bom', quantity: '543' },
		{ reviewScore: 7, label: 'Bom', quantity: '543' },
		{ reviewScore: 6, label: 'Ruim', quantity: '543' },
		{ reviewScore: 0, label: 'Pessímo', quantity: '14' },
	]

	return (
		<div className="review-score">
			<h3 className="title">Review Score</h3>
			<div className="reviews">
				{reviewScoreConfig.map((reviewScore, index) => (
					<div key={index} className="review">
						<div className="score-container">
							<span
								className="score-progress"
								style={{ width: `${(reviewScore.reviewScore || 1) * 8 }%` }}
							>{reviewScore.reviewScore > 0 && reviewScore.reviewScore}
							</span>
						</div>
						<span className="label">{reviewScore.label} ({reviewScore.quantity})</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default ReviewScore