var myArr = [{id:1. name:"Test"},{id:12. name:"Base"},{id:1. name:"Test"}];

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

console.log("DATA IS "+  )
