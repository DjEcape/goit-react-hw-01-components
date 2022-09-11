import randomColor from 'js/randomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              class="item"
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
