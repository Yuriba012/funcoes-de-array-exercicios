const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = objeto =>{
    const novoObjeto = {}
    for (frase in objeto)
        novoObjeto[frase] = objeto[frase].toUpperCase()
    return novoObjeto
}

const textoCorrido = objeto =>{
    let texto = ''
    for (key in objeto){
        texto += `${objeto[key]}\n`
    }
    return texto
}

const imprimir = (objeto, callback) => console.log(callback(objeto))

imprimir(objeto, caixaAlta)
imprimir(objeto, textoCorrido)