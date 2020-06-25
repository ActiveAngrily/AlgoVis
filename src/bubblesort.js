export function BubbleSortHelper(arr) {
  var animations = [];
  if (arr.length <= 1) {
    return arr;
  } else {
    animations = bubbleSort(arr);
    return animations;
  }
}
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
function ArrayEqual(i,j){
  if(i.length === j.length)
  { 
    return false;
  }
  
  for(let k = 0; k < i.length; k++)
  {
    if(i[k] != j[k])
    {
      return false;
    }
  }
  return true;
}

function bubbleSort(inputArr) {
  let len = inputArr.length;
  var anim = [];
  var sortedArray = inputArr;
  sortedArray.sort();

  

  for (let k = 0; k < len; k++) { 
  
    if(ArrayEqual(inputArr,sortedArray)){
      return anim;
    }

    for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
            
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j + 1] = tmp;
              anim.push([j,j+1]);
              anim.push([j,j+1]);
          }        
      }
  }
  console.log(anim);
  return anim;
}
