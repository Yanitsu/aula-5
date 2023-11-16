    class Pessoa{
        _registro = 0
        constructor (nome, idade,materia){
            this.nome = nome;
            this.idade = idade;
            this.materia = materia;
        }
        setarRegistro (novoRegistro){
            if (typeof novoRegistro == "number") {
                this.registro = novoRegistro
            } 
        }

        get registro(){
            return this._registro
        }
        set registro (x){
            if (typeof x == "number"){
                this._registro = x
            }
        }
    }


    class Aluno extends Pessoa{
        constructor (nome, idade, materia, id){
            super (nome, idade, materia)
            this.id = id
        }

        aviso(){
            alert (`${this.nome} Bem vindo ao site curso grau`)
        }
        aviso(){
            super.aviso()
        }
    }


    let p1 = new Aluno ("danilo", 70, "informatica", 18)
    p1.registro = 34
    p1.ola()
    p1.aviso()
    console.log(`nome ${p1.nome} idade ${p1.idade} materia ${p1.materia} id ${p1.id} registro ${p1.registro}`)
    function dividirnumeros(a, b){
        try{
            if (B === 0){
                throw new Error("Divisão invalida"); 
            }
            const resultado = a / b;
            return resultado;
            }
            catch(Erro){
                console.log("ocorreu um erro: " + Erro.message);
            } 
            finally {
                console.log("bloco finally sempre é executado, imdependente")

            }
        

    }
    console.log(dividirnumeros(10, 2));
    console.log(dividirnumeros(0, 0));


