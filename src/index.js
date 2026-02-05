import { greet } from "./greet/greet.js"
import { createInterface } from "node:readline"
import { stdin as input, stdout as output} from "node:process"

const prompt = createInterface({input, output})

let name;
let number;
let multiple;

prompt.question("- Qual é o seu nome?", answer =>{
    name = answer
    if(Number.parseInt(name)){
        console.log("❌ Você não digitou um nome válido")
        process.exit(0)
    } prompt.question("- Escolha o número de verificação de múltiplo:", answer =>{
        multiple = Number.parseInt(answer)
        if(Number.isNaN(multiple)){
            console.log("❌ Você não digitou um número válido.")
            process.exit(0)
        } prompt.question("- Escolha o número para verificar:", answer =>{
            number = Number.parseInt(answer)
            if(Number.isNaN(number)){
                console.log("❌ Você não digitou um número válido.")
            }
            prompt.close()
        })
    })
})

prompt.on("close", () => {
    console.log(greet(name))
    console.log(`Número escolhido: ${number}`)
    if(number % multiple === 0){
        console.log(`✅ O número ${number} é múltiplo de ${multiple}`)
    } else {
        console.log(`❌ O número ${number} não é múltiplo de ${multiple}`)
    }
})