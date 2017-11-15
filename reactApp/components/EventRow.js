import React from 'react';
import EventColumn from './EventColumn';

// class component
class EventRow extends React.Component {

  constructor(props){
    super(props);
    var group = props.group;
    this.state = {
      divStyle : {
        marginTop: `${group.marginTop}px`,
        height: `${group.masterEnd-group.masterStart + 1}px`
      },
      group
    };
  }

  componentWillReceiveProps(newProps){
    var group = newProps.group;
    this.setState ({
      divStyle : {
        marginTop: `${group.marginTop}px`,
        height: `${group.masterEnd-group.masterStart + 1}px`
      },
      group
    });
  }

  render() {
    var group = this.state.group;
    return (
      <div className={'event-row'} style={this.state.divStyle}>
          {group.columns.map((column, index)=>(
            <EventColumn key={"EvtColumn"+index} column={column}/>
          ))}
      </div>
    );
  }
};

export default EventRow;
