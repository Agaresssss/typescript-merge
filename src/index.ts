import { Merging } from './Merging';

let arrayMerge = new Merging();

let array1 :number[] = [1,2,3,4,5,6];
let array2 :number[] = [15,14,13,12]
let array3 :number[] = [7,8,9,10,11]

let result  = arrayMerge.merge(array1, array2,array3);

console.log(result);