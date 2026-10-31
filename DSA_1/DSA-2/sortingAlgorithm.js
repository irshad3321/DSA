// bubble-sorting-------
// function bubbleSorting(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let flag=0;
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 flag=1;
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//         if(flag==0){
//             break;
//         }
//     }
//     return arr
// }

// let arr=[1,2,34,5,77,4,3,87,6,5];
// console.log(bubbleSorting(arr));


// insertion sorting---------
// function inserstion(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp=arr[i];
//         let j=i-1;
//         while(j>=0&&temp<=arr[j]){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=temp
//     }
//     return arr;
// }
// let arr=[1,2,3,45,4,5,5,3,2]
// console.log(inserstion(arr));   

// selection sorting----------


// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j;
//             }
//         }
//         [arr[i],arr[min]]=[arr[min],arr[i]];

//     }
//     return arr
// }

// let arr=[1,-1,2,3,43,3,2,66,4,3]
// console.log(selection(arr));


// quick sorting---------
// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let left=[];
//     let right=[];
//     let pivit=arr[arr.length-1];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivit){
//             right.push(arr[i]);
//         }else{
//             left.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivit,...quickSort(right)];
// }

// let arr=[1,2,3,44,3,5,6,55,4];

// console.log(quickSort(arr));


// merge sorting-----------
// function splitArr(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let mid=Math.floor(arr.length/2);
//     let left=arr.slice(0,mid);
//     let right=arr.slice(mid);

//     return merge(splitArr(left),splitArr(right));

// }

// function merge(leftArr,rightArr){
//     let sortedArray=[];

//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sortedArray.push(leftArr.shift());
//         }else{
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return [...sortedArray,...leftArr,...rightArr];
// }

// let arr=[1,2,3,33,44,55,6,5,642,2];

// console.log(splitArr(arr));