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
        { name: "Shox", salary: 3700, increase: false, like: false, id: 1 },
        { name: "Alisher", salary: 6900, increase: false, like: false, id: 2 },
        { name: "Sean", salary: 5100, increase: false, like: false, id: 3 },
      ],
      term: "",
    };
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      // ! THE HARDEST WAY FOR DELETE PROPS
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      // return {
      //   data: newArr
      // }
      // ! EASEE WAY FOR DELETE PROPS
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
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    // this.setState(({ data }) => {
    // ! THE HARDEST WAY TO THE RISE CONDITION
    // const index = data.findIndex((elem) => elem.id === id);
    // const old = data[index];

    // const newItem = { ...old, increase: !old.increase };
    // const newArr = [
    //   ...data.slice(0, index),
    //   newItem,
    //   ...data.slice(index + 1),
    // ];
    // return {
    //   data: newArr,
    // };

    // });
    // ! EASEE WAY TO THE RESI CONDITION
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };
  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, like: !item.like };
        }
        return item;
      }),
    }));
  };
  searchEmployees = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increaseCheck = this.state.data.filter(
      (item) => item.increase
    ).length;
    const visiblaData = this.searchEmployees(data, term);
    return (
      <div className="app">
        <AppInfo employees={employees} increaseCheck={increaseCheck} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          data={visiblaData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.additem} />
      </div>
    );
  }
}

export default App;
