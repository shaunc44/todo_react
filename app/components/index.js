require("./index.css");
var React = require('react');
var ReactDOM = require('react-dom');


var destination = document.querySelector("#container");


// TodoItems Class ****************************************
var TodoItems = React.createClass({

  propTypes: {
    onDelete: React.PropTypes.func
  },

  // delete(idx,itemText) {
  //   if (this.props.onDelete) {
  //     this.props.onDelete(idx, item);
  //   }
  // },

  render: function() {
    // var self = this;
    var todoEntries = this.props.entries;
    function createTasks(item, idx) {
      var deleteFunction = function() {
        self.delete(idx, item);
      }
      return <li key={idx + item.key} onClick={deleteFunction}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});


// TodoList class *****************************************
var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  addItem: function(e) {
    var itemArray = this.state.items;
    itemArray.push(
      {
        text: this._inputElement.value,
        key:  Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    e.preventDefault();
  },

  deleteItem(idx, itemText) {
    var deletedElement = this.state.items.splice(idx, 1)
    this.setState({items: this.state.items});
  },

  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <TodoList items={this.state.itemsl} onDelete={this.deleteItem} />
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
});


// Render React *******************************************
ReactDOM.render(
  <div><TodoList/></div>,
  destination
);

