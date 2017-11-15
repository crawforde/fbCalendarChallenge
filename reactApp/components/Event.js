import React from 'react';

// class component
class Event extends React.Component {
  constructor(props){
    super(props);
    var event = props.event;
    this.state = {
      divStyle: {
        backgroundColor: 'white',
        marginTop: `${event.marginTop}px`,
        height: `${event.end - event.start + 1}px`
      }
    };
  }

  componentWillReceiveProps(newProps){
    var event = newProps.event;
    this.setState({
      divStyle: {
        backgroundColor: 'white',
        marginTop: `${event.marginTop}px`,
        height: `${event.end - event.start + 1}px`
      }
    });
  }

  render() {
    return (
      <div className={'event'} style={this.state.divStyle}>
          <p>Sample Event</p>
      </div>
    );
  }
};

export default Event;
