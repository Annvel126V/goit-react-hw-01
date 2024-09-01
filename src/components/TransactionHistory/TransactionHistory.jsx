import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.row}>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tbodyRow} key={id}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
