import {Imerge}  from "./Imerge";




class Merging implements Imerge {

    getPartition (array : number[],low : number,high : number) : number {
        let pivot = array[high];
        let i = low - 1;
        for(let j = low; j <= high-1; j++){
            if(array[j] < pivot){
                i++;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        let temp = array[i+1];
        array[i+1] = array[high];
        array[high] = temp;
        return i+1;
    }
    quickSort(array: number[],low : number,high : number): number[] {
        if(low < high){
            let partition = this.getPartition(array,low,high);
            this.quickSort(array,low,partition-1);
            this.quickSort(array,partition+1,high);
        }
        return array;
    }

    merge(collection_1: number[], collection_2: number[],collection_3: number[]) : number[] {
        let sum = [...collection_1, ...collection_2,...collection_3];
        return this.quickSort(sum,0,sum.length-1);
    }

}

export {Merging}