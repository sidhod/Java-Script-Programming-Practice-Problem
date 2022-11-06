// Example of Promise
function add(a, b) {
    return a + b;
}
function error() {
    return "You Got Error";
}
let demo = () => {
    return new Promise((resolve, reject) => {
        let flag = false;
        if (flag == true) {
            resolve(add(5, 10));
        } else {
            reject(error());
        }
    });
}
demo()
    .then((value) => console.log("after resolve-->", value))
    .catch((error) => console.log("after reject-->", error));
