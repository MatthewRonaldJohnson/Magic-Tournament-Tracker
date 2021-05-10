const formatDFCArray = (arr) => {
    arr[2] = arr[1];
    arr[1] = " // ";

    return arr;
}

export default formatDFCArray;