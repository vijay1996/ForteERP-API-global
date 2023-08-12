export function removeDuplicatesDocuments (array: Array<any>, property: string|null) {
    const uniqueArray:Array<any> = [];
    array.forEach((element: any) => {
        property ? 
        !uniqueArray.some((element1: any) => element._id === element1._id || element[`${property}`] === element1[`${property}`]) && (uniqueArray.push(element)) :
        !uniqueArray.some((element1: any) => element._id === element1._id) && (uniqueArray.push(element));
    })
    return uniqueArray;
}