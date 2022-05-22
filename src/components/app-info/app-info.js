import "./app-info.css";

const AppInfo = ({ employees, increaseCheck }) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in company N</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>The award will be received: {increaseCheck}</h2>
    </div>
  );
};

export default AppInfo;
