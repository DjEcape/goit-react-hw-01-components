import PropTypes from 'prop-types';
import randomColor from 'js/randomColor';

const Statistics = ({ title = '', stats }) => {
  return (
    <section class="statistics">
      <h2 class="statistics__title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              class="stat-list__item"
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span class="stat-list__label">{label}</span>
              <span class="stat-list__percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
  
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,

};

export default Statistics;
