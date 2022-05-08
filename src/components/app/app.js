// ! IMPORTED cOMPONENT FROM REACT
import { Component } from "react/cjs/react.production.min";
// ! IMPORTED FROM MY COMPONENTS FOLDER
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
// ! IMPORTED STYLES
import "./app.css";

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: [
        { name: "Shox", salary: 3700, increase: true, id: 1 },
        { name: "Sator", salary: 6900, increase: true, id: 2 },
        { name: "Shawn", salary: 5100, increase: true, id: 3 },
      ],
    };
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // ! harder way for delete
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      // return {
      //   data: newArr
      // }
      // ! callback way for delete
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  additem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.additem} />
      </div>
    );
  }
}

export default App;
