export const Detail = ({number, dates, guests, services, total, check_in, check_out}) => {
  return (
    <div className="summary__detail">
      <h3>Detail rezervace</h3>
      <div className="summary__number">{number}</div>
      <div className="summary__dates">{dates}</div>
      <div className="summary__guests">{guests}</div>
      <div className="summary__services">{services}</div>
      <div className="summary__room-total">{total}</div>
      <div className="summary__check-in">{check_in}</div>        
      <div className="summary__check-out">{check_out}</div>
    </div>
  );
};