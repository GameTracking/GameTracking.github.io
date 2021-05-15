
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

    //botao de busca
    var btnBusca = document.querySelector('#btn-busca');

    btnBusca.addEventListener('click',()=>{
        buscar();
    })

    //barra de busca
    var barraBusca = document.querySelector('#busca');
    barraBusca.addEventListener('keyup',()=>{
        buscar();
    })
});

function EnviarSugestao(){
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var mensagem = document.querySelector("#mensagem").value;

    if ( nome == "" || email == "" || mensagem ==""){
        Swal.fire(
            'Erro',
            'Preencha os campos necessários!',
            'error'
          )
    } else{
        
        Swal.fire(
            'Sucesso',
            'Sugestão "' + mensagem + '" enviada!',
            'success'
          )

        setTimeout(()=>{
            window.location.href = "index.html";
        },2000)
    }
}

function Cadastrar(){
    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    var csenha = document.querySelector("#csenha").value;
    
    //Validação

    if (nome == "" || email == "" || senha == "" || csenha == ""){

        Swal.fire(
            'Erro',
            'Preencha os campos necessários!',
            'error'
          )

    }else if(senha != csenha){
        Swal.fire(
            'Erro',
            'As senhas não correspondem!',
            'error'
          )
    }
    else{
        Swal.fire(
            'Sucesso',
            'Cadastro realizado!',
            'success'
          )

        setTimeout(()=>{
            window.location.href = "perfil.html";
        },2000)
    }
}

function Logar(){
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha").value;
    
    //Validação

    if (email == "" || senha == ""){
        Swal.fire(
            'Erro',
            'Preencha os campos necessários!',
            'error'
          )
    }
    else{
        Swal.fire(
            'Sucesso',
            'Logado com sucesso!',
            'success'
          )

        setTimeout(()=>{
            window.location.href = "perfil.html";
        },2000)
    }
    }   


function storage(){
    var nomeUsuario = document.querySelector('.nome-usuario');
    if(nomeUsuario){
        localStorage.setItem("nome", "Rogério");
        nomeUsuario.innerHTML = localStorage.getItem("nome")
    }
    
}

window.onload = storage();


//botao buscar

function buscar(){


    //valor do que o usuario digitou na barra de pesquisa
    
    var input = document.querySelector('#busca').value;
    var filtro = input.toUpperCase();

    //div onde esta informações dos jogos
    var conteudo = document.querySelectorAll('.infos');

    conteudo.forEach((x)=>{
        var nomeJogo = x.childNodes[1].innerHTML;

        var valor = nomeJogo.toUpperCase().indexOf(filtro);

        if(nomeJogo.toUpperCase().indexOf(filtro)> -1){
            x.style.display = "";
            x.parentNode.style.display = "";
            x.childNodes[1].style.display = "";

        }
        else{

            x.style.display = "None";
            x.parentNode.style.display = "None";
            x.childNodes[1].style.display = "None";            
        }
    })
}





