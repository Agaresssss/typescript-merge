import { Merging } from './Merging';

let arrayMerge = new Merging();

let array1 :number[] = [];
let array2 = [9,4,5,7,2,1,6,7]

let array3 = arrayMerge.merge(array1, array2);

console.log(array3);