// Example of Promise
//add fuction
function add(a, b) {
    return a + b;
}
// timeout for 3 sec
function resolveAfter3seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(add(5, 5));
        }, 1000);
    });
}

//async fuction
async function asyncCall() {
    let add = 5;
    console.log("calling");
    const result = await resolveAfter3seconds();
    console.log("after resolve result ", result);
    const FinalResult = result + add;
    console.log("after resolve ", FinalResult);

}
//Call Function
asyncCall();
