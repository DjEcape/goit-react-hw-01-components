import PropTypes from 'prop-types';
import randomColor from 'js/randomColor';

const TransactionHistory = ({items}) => {
  return (
    <section class="transaction__section">
          <table class="transaction__table">
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
  items: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,

};

export default TransactionHistory;
