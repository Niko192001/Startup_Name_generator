
const firstword = ['Tech', 'Inno', 'Smart', 'Blue', 'Next', 'Bright', 'Quantum', 'Rapid', 'Future', 'Digital'];
const secondword = ['Vision', 'Solutions', 'Systems', 'Works', 'Dynamics', 'Hub', 'Network', 'Innovations', 'labs', 'path'];

function getstartupname (a,b){
    let randomNumberFromA = Math.floor(Math.random() * a.length);
    let randomNumberFromB = Math.floor (Math.random()* b.length );
    let randomElement = a[randomNumberFromA] + '' + b[randomNumberFromB];

console.log(randomElement);
}
getstartupname(firstword, secondword);


