window.addEventListener("load",()=>{
    //displays
    const editEmail = document.querySelector(".btn-edit-email");
    const editGenero = document.querySelector(".btn-edit-genero");
    const editNascimento = document.querySelector(".btn-edit-nascimento");
    const spanEmail = document.querySelector(".span-email");
    const spanGenero = document.querySelector(".span-genero");
    const spanNascimento = document.querySelector(".span-nascimento");
    const inputEmail = document.querySelector(".input-email");
    const inputGenero = document.querySelector(".input-genero");
    const inputNascimento = document.querySelector(".input-nascimento");
    inputEmail.style.display = "none";
    inputGenero.style.display = "none";
    inputNascimento.style.display = "none";
    const confirmEmail = document.querySelector(".confirm-email");
    const confirmGenero = document.querySelector(".confirm-genero");
    const confirmNascimento = document.querySelector(".confirm-nascimento");
    confirmEmail.style.display = "none";
    confirmGenero.style.display = "none";
    confirmNascimento.style.display = "none";
    
    // Editar dados e inputs (EMAIL)
        editEmail.addEventListener('click',()=>{
            editEmail.style.display = "none";
            confirmEmail.style.display = "block";
            spanEmail.style.display = "none";
            inputEmail.style.display = "block";
        })
        confirmEmail.addEventListener('click',()=>{
            if (inputEmail.value != ""){
                spanEmail.innerHTML = inputEmail.value;
                editEmail.style.display = "block";
                confirmEmail.style.display = "none";
                spanEmail.style.display = "block";
                inputEmail.style.display = "none";
            }
        })
    // Editar dados e inputs (GENERO)
    editGenero.addEventListener('click',()=>{
        editGenero.style.display = "none";
        confirmGenero.style.display = "block";
        spanGenero.style.display = "none";
        inputGenero.style.display = "block";
    })
    confirmGenero.addEventListener('click',()=>{
        if (inputGenero.value != "" || inputGenero.value != null){
            spanGenero.innerHTML = inputGenero.value;
            editGenero.style.display = "block";
            confirmGenero.style.display = "none";
            spanGenero.style.display = "block";
            inputGenero.style.display = "none";
        }
    })
    // Editar dados e inputs (NASCIMENTO)
    editNascimento.addEventListener('click',()=>{
        editNascimento.style.display = "none";
        confirmNascimento.style.display = "block";
        spanNascimento.style.display = "none";
        inputNascimento.style.display = "block";
    })
    confirmNascimento.addEventListener('click',()=>{
        if (inputNascimento.value != ""){
            spanNascimento.innerHTML = inputNascimento.value;
            editNascimento.style.display = "block";
            confirmNascimento.style.display = "none";
            spanNascimento.style.display = "block";
            inputNascimento.style.display = "none";
        }
    })
})