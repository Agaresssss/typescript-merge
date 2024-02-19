import { Merging } from '../src/Merging';


describe('Merging', () => {
    let arrayMerge = new Merging();

    test('test merging 3 sorted array equal langth not duplicate', () => {
        let array1:number[] = [1, 2, 3, 4, 5];
        let array2:number[] = [10,9,8,7,6];
        let array3 :number[] = [11,12,13,14,15]
        let result = arrayMerge.merge(array1, array2,array3);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    })

    test("test merging 3 negative sorted array equal langth not duplicate",()=> {
        let array1:number[] = [-5,-4,-3,-2,-1];
        let array2:number[] = [-10,-9,-8,-7,-6]; 
        let array3 :number[] = [-15,-14,-13,-12,-11]
        let result = arrayMerge.merge(array1, array2,array3);
        expect(result).toEqual([-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]);
    })

    test("test merging 3 sorted array equal langth not duplicate and mix",()=> {
        let array1:number[] = [1,3,5,7,9,11,13];
        let array2:number[] = [29,27,25,23,21,19,17]; 
        let array3 :number[] = [2,4,6,8,10,12,14]
        let result = arrayMerge.merge(array1, array2,array3);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,19,21,23,25,27,29]);
    })


    test("test merging 3 unsorted array equal langth duplicate",()=> {
        let array1:number[] = [4,7,8,9,1,5,6];
        let array2:number[] = [12,16,1,9,7,4,3]; 
        let array3 :number[] = [3,4,12,15,1,8,9]
        let result = arrayMerge.merge(array1, array2,array3);
        expect(result).toEqual([1,1,1,3,3,4,4,4,5,6,7,7,8,8,9,9,9,12,12,15,16]);
    })
    

    test("test merging 3 non equal array, and array having are not duplicate number", ()=>{
            let array1:number[] = [1,2,3,4,5]
            let array2:number[] = [10,9,8,6]
            let array3 :number[] = [7,11,12,13,16,17,18,19,20]
            let result = arrayMerge.merge(array1, array2,array3);;
            expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20]);
    })
    test("test merging 1 empty array and duplicate number ",()=>{
        let array1 : number[] = []  
        let array2 : number[] = [90,78,56,48,34,12]  
        let array3 :number[] = [12,34,48,56,78,90]
        let result = arrayMerge.merge(array1, array2 ,array3);
        expect(result).toEqual([12,12,34,34,48,48,56,56,78,78,90,90]);
    })
    test("test merging 2 empty array ",()=>{
        let array1 : number[] = []
        let array2 : number[] = []
        let array3 :number[] = [7,7,5,9,4]
        let result = arrayMerge.merge(array1, array2 ,array3);
        expect(result).toEqual([4,5,7,7,9]);
    })
    test("test merging 3 empty array ",()=>{
        let array1 : number[] = []
        let array2 : number[] = []
        let array3 :number[] = []
        let result = arrayMerge.merge(array1, array2 ,array3);
        expect(result).toEqual([]);
    })
    test("test merging 3 empty array and zero ",()=>{
        let array1 : number[] = [0]
        let array2 : number[] = []
        let array3 :number[] = [0]
        let result = arrayMerge.merge(array1, array2 ,array3);
        expect(result).toEqual([0,0]);
    })

})

