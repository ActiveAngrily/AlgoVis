export default function bubbleSortAnimation(arr) {
  var animarr = [];
  function swap(a, b) {
    var t = a;
    a = b;
    b = t;
  }

  let i, j;
  for(i = 0; i < arr.length; i++)
  {
    for(j = 0; j < arr.length; j++)
    {
      if(arr[j] > arr[i]) 
      {
        swap(arr[j],arr[i]);
        animarr.push(arr);
      }
    }
  }
  return animarr;
}
