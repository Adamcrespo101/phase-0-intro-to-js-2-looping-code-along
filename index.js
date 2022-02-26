// Code your solutions in this file
 const names = ['Guadalupe', 'Ollie', 'Aki'];

// function writeCards(names){
//     let cards = []
//     for (let i = 0; i < names.length; i++){
//         cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`) 
//         debugger;
        
//     } 
//     return cards;
// }
    
// function countDown(i){
//     while (i > 0){
//        console.log(i)
//        i -=1
//     }
//     console.log(i)
// }

const writeCards = (names) =>{
    let cards = []
    for(let i = 0; i < names.length; i++)
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    return cards;
}

const countDown = (index) => {
    while (index > 0){
        console.log(index)
        index -= 1;
    }
        console.log(index)
}