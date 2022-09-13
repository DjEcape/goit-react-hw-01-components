import PropTypes from 'prop-types';
import randomColor from 'js/randomColor';
import './Transactions.module.css';

const TransactionHistory = ({items}) => {
  return (
    <section className="transaction__section">
          <table className="transaction__table">
      <thead>
      <tr style={{ backgroundColor: randomColor() }}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} style={{ backgroundColor: randomColor() }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </section>

  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default TransactionHistory;
