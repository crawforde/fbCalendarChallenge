import React from 'react';
import Event from './Event.js';
// class component
class EventColumn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      column: props.column
    };
  }

  componentWillReceiveProps(newProps){
    this.setState({
      column: newProps.column
    });
  }

  render() {
    var column = this.state.column;
    return (
      <div className={'event-column'}>
          {column.map((event,index)=>(
            <Event key={"Event"+index} event={event}/>
          ))}
      </div>
    );
  }
};

export default EventColumn;
