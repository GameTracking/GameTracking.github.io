
window.addEventListener("load",()=>{
    //Enviar Sugestão
    var btnEnviar = document.querySelector('#enviar');
    if (btnEnviar){
        btnEnviar.addEventListener("click",(x)=>{
            x.preventDefault();
            EnviarSugestao();
        });
    }
    
    //Cadastrar
    btnCadastrar = document.querySelector('#cadastrar');
    if (btnCadastrar){
        btnCadastrar.addEventListener("click",(x)=>{
            x.preventDefault();
            Cadastrar();
        })
    }

    //Logar
    btnLogar = document.querySelector('#logar');
    if (btnLogar){
        btnLogar.addEventListener("click",(x)=>{
            x.preventDefault();
            Logar();
        })
    }
});

function EnviarSugestao(){
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var mensagem = document.querySelector("#mensagem").value;

    if ( nome == "" || email == "" || mensagem ==""){
        alert("Preencha os campos necessários!");
    } else{
        alert("Sugestão enviada!");
    }
}

function Cadastrar(){
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    var csenha = document.querySelector("#csenha").value;
    
    //Validação

    if (nome == "" || email =="" || senha == "" || csenha == ""){
        alert('Preencha os campos necessários!');
    }else if(senha != csenha){
        alert("As senhas não correspondem!")
    }
    else{
        alert('Cadastro realizado')
    }
}

function Logar(){
    var nome = document.querySelector("#nome").value;
    var senha = document.querySelector("#senha").value;
    
    //Validação

    if (nome == "" || senha == ""){
        alert('Preencha os campos necessários!');
    }
    else{
        alert('Logado com sucesso!');
    }    
}


function storage(){
    var nomeUsuario = document.querySelector('.nome-usuario');
    if(nomeUsuario){
        localStorage.setItem("nome", "Jubileu");
        nomeUsuario.innerHTML = localStorage.getItem("nome")
    }
    
}


window.onload = storage();
