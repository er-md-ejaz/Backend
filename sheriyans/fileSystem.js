const { error } = require('console');
const fs = require('fs');

// fs.writeFile("hello.txt", "Hello World!", (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.appendFile("hello.txt", " Hey, How are you?", (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.rename("hello.txt", "greet.txt", (err) => {
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.copyFile("greet.txt", "./Copy/copy.txt", (err) => {
//     if(err) console.error(err.message);
//     else console.log("Done");
// })

// fs.unlink("greet.txt", (err) => {
//     if(err) console.error(err.message);
//     else console.log("removed");
// })

// fs.rm("./Copy/copy.txt", {recursive: true}, (err) => {
//     if(err) console.error(err.message);
//     else console.log("removed");
// })

fs.rm("./Copy", {recursive: true}, (err) => {
    if(err) console.error(err.message);
    else console.log("removed");
})