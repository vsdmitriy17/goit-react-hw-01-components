import PropTypes from 'prop-types';
// import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className="transactionHistory">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) =>
                    index % 2 === 0 ? (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ) : (
                        <tr key={item.id}>
                            <td className="odd">{item.type}</td>
                            <td className="odd">{item.amount}</td>
                            <td className="odd">{item.currency}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
}