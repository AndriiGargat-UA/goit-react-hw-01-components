import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsItem, StatisticsList, StatisticsTitle, StatLabel, StatQuantity } from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer> 
      {Boolean(title) && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} style={{
              backgroundColor: `${getRandomHexColor()}`
            }}>
              <StatLabel>{label}</StatLabel>
              <StatQuantity>{percentage}%</StatQuantity>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsContainer> 
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}60`;
}