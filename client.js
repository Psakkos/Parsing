const sort= Require('./sort.js');

//1st dash
function atLeast(array, number){
  let state= ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
  let totals= new Array(50);
  totals.fill(0);
  for(let x=0; x<array.length; x++){
    if(array[x].fips==0){
      continue;
    }
    else if()
  }
}
function atMost(array, number){}
function exactly(array, number){}


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
    if(array[x].state== stateAbbreviation && array[x].fips !== 0){
        givenState.push(array[x])
    }
    else{
        continue;
    }
  }
  givenState = givenState.sort(function(a,b){
    return a.obamaVote + a.romneyVote-(b.obamaVote+ b.romneyVote);
    })
    return givenState;
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
  let temp;
  let state;
  for(x=0; let x<array.length; x++){
      if(array[x].fips==0){
          continue;
      }
      else{
          temp=Math.abs(array[x].obamaPercent-array[x].romneyPercent);
          state= array[x].state;
          break;
      }
  }
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
    let temp;
    let state;
    for(x=0; let x<array.length; x++){
        if(array[x].fips==0){
            continue;
        }
        else{
            temp=Math.abs(array[x].obamaVote-array[x].romneyVote);
            state= array[x].state;
            break;
        }
    }
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
