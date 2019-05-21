import { fatorial } from './fatorial'

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv

console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit', () => {
    console.log('Script esta prestes a terminar')
})

console.log(process.argv)

const num = argv.num

console.log(`O fatorial de ${num} e igual a ${fatorial(num)}`)