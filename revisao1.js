// let e const
{
    var a = 2 // escopo global
    let b = 3 // escopo de bloco
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`
    {
        "nome": "${produto}"
    }
`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
