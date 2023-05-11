//1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

  //მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
  //მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
  //გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
  //წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
  //დაბეჭდეთ მასივისი ახალი ელემენტები.

  let array1 =[5, 25, 89, 120, 36];
    array1.push("javascript", "python");
    array1.unshift("html", "css");
    console.log(array1.length);
    array1.shift();
    array1.pop();
    console.log(array1);

//2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits=["ფორთოხალი","ბანანი","მსხალი"];
console.log(fruits.length);
fruits.push("ვაშლი","ანანასი");
fruits.unshift("საზამთრო");
console.log(fruits.length);
fruits.splice(2,0, "მანგო");
fruits.shift();
fruits.pop();
console.log(fruits);

//3.მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array2=[1, 2, 3, 4, 5];
array2.splice(3, 0, "a",  "b");

console.log(array2);

//4. .მოცემულია მასივი:
//let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
//ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredArray = languages.filter(element => element.length > 3);

console.log(filteredArray);

//5. Მოცემულია მასივი:
//let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

//Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let filteredArray2=words.filter(element=>element.includes("m")||element.includes("M"));
console.log(filteredArray2);

//6.მოცემულია მასივი:
//Let array=[2,15,10,24] წაშალეთ ამ
//მასივიდან რიცხვი 10;

let removeTen=[2,15,10,24];
removeTen.splice(removeTen.indexOf(10), 1);
console.log(removeTen);








