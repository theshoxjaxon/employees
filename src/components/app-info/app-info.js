import "./app-info.css";

const AppInfo = ({ employees, increaseCheck }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increaseCheck}</h2>
    </div>
  );
};

export default AppInfo;
