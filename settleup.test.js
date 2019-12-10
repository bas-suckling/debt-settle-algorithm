// import jest from 'jest'

let debtsWithZero = [
    { name: 'a', balance: 200 },
    { name: 'b', balance: 300 },
    { name: 'c', balance: -50 },
    { name: 'd', balance: -411 },
    { name: 'e', balance: -39 },
    { name: 'f', balance: 0}
]


let debtsUnsorted = [
    { name: 'c', balance: -50 },
    { name: 'a', balance: 200 },
    { name: 'e', balance: -39 },
    { name: 'b', balance: 300 },
    { name: 'd', balance: -411 },
]

let debts = [
    { name: 'a', balance: 200 },
    { name: 'b', balance: 300 },
    { name: 'c', balance: -50 },
    { name: 'd', balance: -411 },
    { name: 'e', balance: -39 },
]

let transactionArray = []

//need to sort debt
// function balanceDebt(debtArray) {
//     while (debtArray.length > 0) {


//     }
// }

function sortBalances (array) {
    return array.sort((a, b) => {
        return b.balance - a.balance
    })
}

function removeZeroBalances (array) {
    return array.filter((balance) => (balance.balance != 0))
}

// console.log('this is the sorted array',sortBalances(debts))
// console.log('this is the sorted array with zeros removed', removeZeroBalances(debts))

test('test some basic js', function () {
    expect(2 + 2 === 4).toBeTruthy()
})

test('given an array with an object where balance = 0, function returns an array with no zero balances', function () {
    let expected = [{ name: 'a', balance: 200 },
                    { name: 'b', balance: 300 },
                    { name: 'c', balance: -50 },
                    { name: 'd', balance: -411 },
                    { name: 'e', balance: -39 }]

    let actual = removeZeroBalances(debtsWithZero)
    expect (actual).toEqual(expected)
})

test('given an array without an object where balance = 0 function returns the same array', function () {
    let expected = [{ name: 'a', balance: 200 },
                    { name: 'b', balance: 300 },
                    { name: 'c', balance: -50 },
                    { name: 'd', balance: -411 },
                    { name: 'e', balance: -39 }]

    let actual = removeZeroBalances(debts)
    expect (actual).toEqual(expected)
})

test ('given an unsorted array of objects, return a sorted array, sorted in ascending order by balance', function () {
    let expected = [{ name: 'b', balance: 300 },
                    { name: 'a', balance: 200 },
                    { name: 'e', balance: -39 },
                    { name: 'c', balance: -50 },
                    { name: 'd', balance: -411 },]

    let actual = sortBalances(debtsUnsorted)

    expect (actual).toEqual(expected)
})