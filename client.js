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
function totalVotes(array, stateAbbreviation){
  let givenState= [];
  for (let x=0; x<array.length; x++;){
    if(array[x].state= stateAbbreviation && array[x].fips !== 0){
        givenState.push(array[x])
    }
    else{
        continue;
    }
  }
  givenState.sort(function(a,b)){
    return a.obamaVote + a.romneyVote-(b.obamaVote+ a.romneyVote);
    }
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
  let temp= Math.abs(array[0].obamaPercent- array[0].romneyPercent);
  let state= array[0].state;
  for(let x=1; x<array.length; x++){
    if(array[x].fips==0){
      continue;
    }
    else if(Math.abs(array[x].obamaPercent- array[x].romneyPercent)>=temp){
        Math.abs(array[x].obamaPercent- array[x].romneyPercent)=temp;
        let state=array[x].state;
    }
    else if(Math.abs(array[x].obamaPercent- array[x].romneyPercent)<temp){
      continue;
    }
  }
return state;
}

//7th dash
function voteDifference(array){
    let temp= Math.abs(array[0].obamaVote- array[0].romneyVote);
    let state= array[0].state;
    for(let x=1; x<array.length; x++){
      if(array[x].fips==0){
        continue;
      }
      else if(Math.abs(array[x].obamaVote- array[x].romneyVote)>=temp){
          Math.abs(array[x].obamaVote- array[x].romneyVote)=temp;
          let state=array[x].state;
      }
      else if(Math.abs(array[x].obamaVote- array[x].romneyVote)<temp){
        continue;
      }
    }
  return state;
}
