const testData = [ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ];

var useEvents = (data)=>{
  if(!data || data.length===0){
    data = testData;
  }
  data = data.sort((evt1, evt2)=>(evt1.start - evt2.start > 0));
  var output = [];
  var currentGroup = -1;
  data.forEach((event)=>{
    var current = output[currentGroup];
    if(currentGroup < 0 || current.masterEnd < event.start){
      currentGroup++;
      output.push({
        masterStart: event.start,
        masterEnd: event.end,
        columns: [[event]]
      });
      event.marginTop = 0;
      return;
    }
    current.masterEnd = event.end;
    var added = false;
    current.columns.forEach((column)=>{
      if(!added && column[column.length-1].end < event.start){
        event.marginTop = event.start - column[column.length-1].end - 1;
        column.push(event);
        added = true;
      }
    });
    if(!added){
      current.columns.push([event]);
      event.marginTop = event.start - current.masterStart - 1;
    }
  });

  for(var i = 0; i < output.length; i++){
    var group = output[i];
    if(group.masterStart === 0){
      group.marginTop = 0;
    }
    else if(i === 0){
      group.marginTop = group.masterStart - 1;
    }
    else{
      group.marginTop = group.masterStart - output[i-1].masterEnd - 1;
    }
  }
  console.log(output);
  return output;
};

module.exports = useEvents;
