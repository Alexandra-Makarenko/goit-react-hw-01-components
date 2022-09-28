import PropTypes from "prop-types";
import { Table,Tr,Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
             <thead>
    <Tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </Tr>
            </thead>
            <tbody>
                {items.map((item, id) => (
        <Tr key={id}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </Tr>
           ))}
    
    
  </tbody>
      </Table>
    
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
  }).isRequired).isRequired,
};