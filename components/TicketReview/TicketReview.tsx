import {ReactElement} from 'react'
import '@/styles/components/TicketReview/TicketReview.scss'

const TicketReview = ({ ticket }): ReactElement => {
    const { value, reviewsCount } = ticket.rating

    return (
        <div className="ticket-review">
            <div className="ticket-review-rating-value">
                { value }
            </div>
            <div className="ticket-review-label">
                Excellent
                <span className="number-reviews"> ({reviewsCount} Reviews)</span>
            </div>
        </div>
    )
}

export default TicketReview