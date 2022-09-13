import PropTypes from 'prop-types';
import  css  from './Container.module.css';

const Container = ({title , children}) => {
  return (
    <div className={css.tasks_container}
 key={title}>
      <h2 className="tasks-title">{title}</h2>
      {children}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
