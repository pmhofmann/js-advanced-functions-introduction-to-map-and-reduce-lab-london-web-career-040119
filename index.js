// Your code here
const mapToNegativize = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * -1)
      }
    return newArr
}

const mapToNoChange = arr => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

const mapToDouble = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

const mapToSquare = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

const reduceToTotal = (arr, total = 0) => {
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

const reduceToAllTrue = arr => {
    let truth = true
    for(let i = 0; i < arr.length; i++) {
        if (!!arr[i] === false)
            truth = false
    }
    return truth
}

const reduceToAnyTrue = arr => {
    let truth = false
    for(let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true)
            truth = true
    }
    return truth
}
