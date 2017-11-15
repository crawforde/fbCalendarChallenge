import React from 'react';

const times = [['9','AM'],['10','AM'],['11','AM'],['12','PM'],['1','PM'],['2','PM'],['3','PM'],['4','PM'],['5','PM'],['6','PM'], ['7','PM'], ['8','PM'], ['9','PM']];

// class component
class Sidebar extends React.Component {
  render() {
    return (
      <div id={'side-bar'}>
        {times.map((item)=>(
          <div key={item[0]+item[1]} className={'time-label'}>
            <div className={'big-time'}><h3>{item[0]}:00</h3><p>{item[1]}</p></div>
            {(item[0]!=="9" || item[1]!=="PM") ? <div className={'small-time'}><p>{item[0]}:30</p></div> : ''}
          </div>
        ))}
      </div>
    );
  }
};

/* Equivalent function component! */
// const App = (/* props OR { prop1, prop2 } */) => (
//    <div>
//      <p>{displayMessage}</p>
//    </div>
// );


/*
==========================================================
  This is what you do if you want this component or any
  other to become a connected "container" component!
==========================================================
*/
// /* At top of file: */
// import { connect } from 'react-redux';
//
// /* At bottom of file: */
// const mapStateToProps = (state) => ({
//    someStateProp: /* state.something typically */
// });
//
// const mapDispatchToProps = (dispatch) => ({
//    someDispProp: /* some function that dispatches an action */
// });
//
// App = connect(mapStateToProps, mapDispatchToProps)(App);

export default Sidebar;
