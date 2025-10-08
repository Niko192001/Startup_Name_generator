// firstword array, words are taking from the gitbook
const firstword = ['Tech', 'Inno', 'Smart', 'Blue', 'Next', 'Bright', 'Quantum', 'Rapid', 'Future', 'Digital'];

// secondword Array, words are taking from the gitbook
const secondword = ['Vision', 'Solutions', 'Systems', 'Works', 'Dynamics', 'Hub', 'Network', 'Innovations', 'labs', 'path'];

const getStartUpName = () =>{
    const firstNum = Math.floor(Math.random()* firstword.length)
    const secondNum = Math.floor(Math.random()* secondword.length)
    return `${firstword[firstNum]} ${secondword[secondNum]}`
}

console.log("Your startup name is: " + getStartUpName() )

// I am geeting the name Tech Systems for my Startup_Name_Generator
