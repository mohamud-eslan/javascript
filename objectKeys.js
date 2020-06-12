function keysAndValues(obj) {
    let key1 = []
    let val1 = []

    for(key in obj){
        key1.push(key)
        val1.push(obj[key]);
    }

    let sumarr = []

    sumarr.push(key1)
    sumarr.push(val1)

    return sumarr
}



console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
//➞ [["a", "b", "c"], [1, 2, 3]]

 console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
//➞ [ ["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

 console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
//➞ [["key1", "key2", "key3"], [true, false, undefined]]

const on = {
    name: 'mohamed',
    age: 29,
    location: 'bellville'
}





// console.log(
// [
// ['name', 'age', 'location'],

// ['mohamed', 29, 'bellville']
// ])

// let aa = []
// let bb = ['name', 'age']
// let cc = [ 1,2]

// aa.push(bb)
// aa.push(cc)

// console.log(aa);
