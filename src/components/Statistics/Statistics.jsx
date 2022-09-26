import PropTypes from "prop-types";
import { List, Section,ListItem,Span } from './Statistics.styled';


      

export const Statistics = ({ title, statistics, color }) => {

   
    return (
        <Section>
            <h2>{title}</h2>
 
     <List>
      {statistics.map((stat, idx) => (        
        <ListItem key={idx} color={color = getRandomHexColor()}>
          <Span>{stat.label}</Span>
          <Span>{stat.percentage}%</Span>
        </ListItem>
      ))}
            </List>
            </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array,
};
  function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }