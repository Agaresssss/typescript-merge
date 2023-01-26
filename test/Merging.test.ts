import { Merging } from '../src/Merging';




describe('Merging', () => {
    let arrayMerge = new Merging();

    test('test merge 2 sorted array equal langth', () => {
        let array1 = [1, 2, 3, 4, 5];
        let array2 = [6, 7, 8, 9, 10];
        let result = arrayMerge.merge(array1, array2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })

    test("test merge 2 unsorted array equal langth",()=>{
        let array1 = [-4,-6,5,7,8,9]
        let array2 = [-8,-9,2,1,4,3] 
        let result = arrayMerge.merge(array1, array2);
        expect(result).toEqual([-9,-8,-6,-4,1,2,3,4,5,7,8,9]);
    })

    test("test merging 2 non equal array, and array having are duplicate number",()=>{
            let array1 = [2,2,4,4,7,8,9]
            let array2 = [9,4,5,7,2,1,6,7]
            let result = arrayMerge.merge(array1, array2);
            expect(result).toEqual([1,2,2,2,4,4,4,5,6,7,7,7,8,9,9]);
    })
    test("test merging 1 empty array ",()=>{
        let array1 : number[] = []  
        let array2 = [9,4,5,7,2,1,6,7]
        console.log([...array1, ...array2]);
        let result = arrayMerge.merge(array1, array2);
        console.log(result);
        expect(result).toEqual([1,2,4,5,6,7,7,9]);
    })
    test("test merging 2 empty array ",()=>{
        let array1 : number[] = []
        let array2 : number[] = []
        let result = arrayMerge.merge(array1, array2);
        expect(result).toEqual([]);
    })

})

