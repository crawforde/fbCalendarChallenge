import React from 'react';
import EventRow from './EventRow';
const useEvents = require('../../algorithm');
// class component
class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: useEvents()
    };
  }

  componentWillMount(){
    window.layOutDay = (events)=>this.updateData(events);
  }

  updateData(newData){
    this.setState({
      data: useEvents(newData)
    });
  }

  render() {
    return (
      <div id={'calendar'}>
        {this.state.data.map((group, index)=>(
          <EventRow key={"EvtRow"+index} group={group}/>
        ))}
      </div>
    );
  }
};

export default Calendar;
