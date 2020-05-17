const translate = str => {
  const words = str.split(" ");
  const pigLatin = [];

  words.forEach(word => {
    let first = word[0].toLowerCase();
    let remainder = word.slice(1);
    pigLatin.push(`${remainder}${first}ay`);
  })

  return pigLatin.join(" ");
}


console.log(translate("Hello my name is Stu"));
