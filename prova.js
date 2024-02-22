let alunoCerto = { //Variável que armazena o Objeto de um aluno
    nome: 'Marcos Pereira dos Santos',
    idade: 18,
    cursando: ['PDM', 'AOS', 'TIA'],
    presenca: ['02/08/2023', '03/08/2023', '07/08/2023'],
    ra: '0923517'
}

const validarNome = alunoCerto.nome //Variável que armazena o valor do nome
const validarCurso = alunoCerto.cursando //Variável que armazena os cursos do aluno
const validarPresenca = alunoCerto.presenca //Variável que armazena os dias em que o aluno foi à aula


function validaCadastro(alunoCerto) { //Função para verificar se esta tudo correto no Objeto
    //Verifica se o nome possui mais de 10 caracteres
    if(validarNome.length < 10){
        console.log('Não foi possível cadastrar o aluno!\nO nome possui menos de 10 caracteres.')
    }
    //Verifica se a idade é maior que 14 anos
    if(alunoCerto.idade < 15){
        console.log('Não foi possível cadastrar o aluno!\nO aluno não possui mais de 15 anos.')
    }
    //Verifica se o aluno está fazendo mais de 3 cursos
    if(validarCurso.length < 3){
        console.log('Não foi possível cadastrar o aluno!\nO aluno está cursando menos de 3 matérias.')
    }
    //Verifica se o aluno teve presença em mais de 2 aulas
    if(validarPresenca.length < 2){
        console.log('Não foi possível cadastrar o aluno!\nO aluno não teve presença em mais de 2 aulas.')
    }
    //Verifica se o RA do aluno possuí menos de 7 caracteres
    if(alunoCerto.ra.length < 7){
        console.log('Não foi possível cadastrar o aluno!\nO aluno possui um RA com menos de 7 caracteres.')
    }
    //Verifica se o RA do aluno possuí mais de 7 caracteres
     if(alunoCerto.ra.length > 7){
        console.log('Não foi possível cadastrar o aluno!\nO aluno possui um RA com mais de 7 caracteres.')
    }
    //Retorna uma mensagem de sucesso, caso não haja erros
    else{
        return console.log('Aluno cadastrado com sucesso!')
    }
}

validaCadastro(alunoCerto) //Executa a função de validação
