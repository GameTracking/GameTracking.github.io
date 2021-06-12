
window.addEventListener("load",()=>{


    //variabel login
    var logado = '';

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
            logado = 'logado';
            localStorage.setItem('logado',logado);
        })
    }

        //Teste
        var h2 = document.querySelector('.h2-perfil');
        if(h2){
            h2.addEventListener('click',()=>{
                console.log(localStorage.getItem('logado'));
            })
        }

    //botao de busca
    var btnBusca = document.querySelector('#btn-busca');
    if (btnBusca){
        btnBusca.addEventListener('click',()=>{
            buscar();
        })
    }
    

    //barra de busca
    var barraBusca = document.querySelector('#busca');
    if(barraBusca){
        barraBusca.addEventListener('keyup',()=>{
            buscar();
        })
    }
  

    //Sair
    var btnSair = document.querySelector('#sair');
    if(btnSair){
        btnSair.addEventListener('click',(x)=>{
            x.preventDefault();
            sair();
        })
    }

    var btnSairMenu = document.querySelector('#sair-menu');
    if(btnSairMenu){
        btnSairMenu.addEventListener('click',(x)=>{
            x.preventDefault();
            sair();
        })
    }


});


function verificaLogin(){

    var menu = document.querySelector('.menu');

    var estado = localStorage.getItem('logado');

    if(estado == 'logado'){
        menu.classList.add('logado');
        if(menu.classList.contains('deslogado')){
            menu.classList.remove('deslogado');
        }
    }else{
        menu.classList.add('deslogado');
        if(menu.classList.contains('logado')){
            menu.classList.remove('logado');
        }
    }

    
}


verificaLogin();

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

        logado = 'logado';
        localStorage.setItem('logado',logado);

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
        localStorage.setItem("nome", "Usuário");
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

function sair(){
    Swal.fire({
        title: 'Não nos abandone :(',
        text: "Tem certeza que deseja sair?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sim'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deslogado!',
            'Deslogado com sucesso!',
            'success'
          )
          logado = 'deslogado';
          localStorage.setItem('logado',logado);
          setTimeout(()=>{
            window.location.href = "index.html";
        },2000)
        }
      })
}

function mask(o, f) {
    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);
  }
  
  function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }