// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight , height){
let BMI = weight / (height * height)
return BMI
}
let AliWeight = 80
let AliHeight = 1.90
let MohamedWeight = 94
let MohamedHieght = 1.86
let AliBmi = calculateBMI(AliWeight , AliHeight)
let MohamedBmi = calculateBMI(MohamedWeight , MohamedHieght)
if(MohamedBmi>AliBmi){
 console.log("Mohamed has higher BMI than Ali")
}else if(AliBmi>MohamedBmi){
console.log("Ali has a higher BMI than Mohamed")
}else{
    console.log("Both Ali and Mohamed have the same BMI")
}

