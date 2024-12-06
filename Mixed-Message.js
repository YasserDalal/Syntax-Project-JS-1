console.log('Project #1  \n \n Mixed Messages \n \n \n')


const message = () => {
   const randomnum1 = Math.floor(Math.random() * 4)
   const randomnum2 = Math.floor(Math.random() * 4)
   const array1 = ['Sun', 'Moon', 'Earth', 'Jupiter']
   const addons = ['will going to be cold tomorrow brother I swear', 
                   "is the worst planet that I've ever lived on",
                   "I hope someday maybe if it was my birthday I'll be in the", 
                   "Goddamn this place is full of fucking aliens is this what you call"]
   if (randomnum2 > 2 && randomnum1 <= 3) {
      console.log(`\n \n ${addons[randomnum2]} ${array1[randomnum1]}? you idiot`)
      
   } else {
      if (randomnum2 === 2) {
         console.log(`\n \n ${addons[randomnum2]} ${array1[randomnum1]}`)
      } else if(randomnum2 < 2) {
         console.log(`\n \n ${array1[randomnum1]} ${addons[randomnum2]}`)
      }
   }
}


message()
