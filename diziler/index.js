let items = [1, 2, 3, 4, 5];

let femaleUsers = ["Ayşe", "Hülya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

items.push(maleUsers);
console.log(items);

console.log(items.length);
console.log(items[0].length); // array içinde istediğimiz arrayin length bilgisini aldık
console.log(items[0][0]); // Ayşe bilgisine ulaşmamızı sağlar

let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items:", items);

items.unshift("Lorem");
items.push("ipsum");

console.log(items[items.indexOf("ipsum")]);

// Array kopyalamak
let copyItems = items;
console.log(items);

copyItems.pop(); // son öğeyi cıkarttık

console.log("copyItem", copyItems);
console.log("Items", items);

console.log("kopyalandıktan sonra")

copyItems = items.slice();
copyItems.pop(); // son öğeyi cıkarttık

console.log("copyItem", copyItems);
console.log("Items", items);


let es6Items = [...items]
console.log(es6Items)

//birleştirme

let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)

//stringe çevirme
console.log(allUsers.toString())
console.log(allUsers.join( "*-* "))

// spile ile istediğimiz ındex bilgisine öğe eklemek
//sondan bir önceye ekleme
allUsers.splice(allUsers.length-1, 0 , "Melisa")
console.log(allUsers)
//başka konuma ekleme
allUsers.splice(allUsers.length - 4, 0, "Sude");
console.log(allUsers);