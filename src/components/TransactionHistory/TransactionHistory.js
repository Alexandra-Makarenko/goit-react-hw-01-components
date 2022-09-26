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
                {items.map((item, idx) => (
        <Tr key={idx}>
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
  items: PropTypes.array.isRequired,
};