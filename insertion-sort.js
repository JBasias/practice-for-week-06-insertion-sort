// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(A) {

  let ret=[]; let cry; let j=A.length-1;


  while(j>=0)
  {
    console.log(ret.join(','))
    ret.push(A[j]);
    j--;

    for(let i=ret.length-1;i>0;i--)
    {
        if(ret[i]<ret[i-1])
        {
          cry=ret[i];
          ret[i]=ret[i-1];
          ret[i-1]=cry;
        }
    }

    //console.log(ret.join(','))

  }
      return ret;



  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(A) {

  let cry; let j=0;


  while(j<A.length)
  {

    //console.log(A.join(','))
    //ret.push(A[j]);
    //j--;

    for(let i=j;i>0;i--)
    {
        if(A[i]<A[i-1])
        {
          cry=A[i];
          A[i]=A[i-1];
          A[i-1]=cry;
        }
        else
        {
          break;
        }
    }

    j++;

    console.log(A.join(','))
    //console.log(ret.join(','))

  }
      return A;


  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
}

module.exports = [insertionSort, insertionSortInPlace];
