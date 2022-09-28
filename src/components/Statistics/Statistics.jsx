import PropTypes from "prop-types";
import { List, Section,ListItem,Span } from './Statistics.styled';

export const Statistics = ({ title, statistics, color }) => {   
    return (
      <Section>
        {title && <h2>{title}</h2>}   
 
     <List>
      {statistics.map((stat) => (        
        <ListItem key={stat.id} color={color = getRandomHexColor()}>
          <Span>{stat.label}</Span>
          <Span>{stat.percentage}%</Span>
        </ListItem>
      ))}
            </List>
            </Section>
  );
};


 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
    
Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
