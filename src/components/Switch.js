const Switch = ({ isToggle, setIsToggle }) => {
  return (
    <div>
      <button
        onClick={() => {
          isToggle === false && setIsToggle(true);
        }}
        className={isToggle ? "on" : "off"}
      >
        ON
      </button>
      <button
        onClick={() => {
          isToggle === true && setIsToggle(false);
        }}
        className={isToggle ? "off" : "on"}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
