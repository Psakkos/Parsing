const sort= Require('./sort.js');
//2nd dash of readme
function findStates(array){
    let states = [];
    for(let x = 0;x<array.length;x++){
        if(array[x].fips == 0){
            states.push(array[x]);
        }
        else{
            null;
        }
    }
}

//3rd dash of readme
function percentDifference(array, percent){
  let statePercents = [];
  for(let x = 0;x<array.length;x++){
    if(array[x].fips==0){
      let temp = array[x].obamaPercent - array[x].romneyPercent;
      temp = Math.abs(temp);
      if(temp < percent){
        statePercents.push(array[x].state]);
      }
    }
  }
  return statePercents;
}
//4th dash
function totalVotes(state){
  sort.insertionSort(list,property);
}
//5th
function statesWon(array, candidate, state);{
  let won = [];
  let number = array.obamaVote-array.romneyVote;
  for(let x=0; x<array.length; x++;){
    if(candidate= "Obama" && number>0){
      won.push([array[x].state, array[x].county, array[x].obamaPercent]);
    }
    if(candidate= "Romney" && number<0){
      won.push([array[x].state, array[x].county, array[x].romneyPercent]);
    }
    else{
      null;
    }
  }
}

//6th dash
function percentDifference(array){
  let temp= Math.abs(array[0].obamapercent- array[0].romneypercent);
  for(x=1; x<array.length; x++){
    if(array[x].fips==0){
      null
    }
    else if(Math.abs(array[x].obamapercent- array[x].romneypercent)>=temp){
        Math.abs(array[x].obamapercent- array[x].romneypercent)=temp;
    }
    else if(Math.abs(array[x].obamapercent- array[x].romneypercent)<temp){
      null
    }
  }
return temp;
}
