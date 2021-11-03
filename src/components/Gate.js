const Gate = ({ areAllButtonOn }) => {
  if (areAllButtonOn() === true) {
    return <div className="gate gate-open">GO !</div>;
  } else {
    return <div className="gate gate-closed">No Way !</div>;
  }
};

export default Gate;
