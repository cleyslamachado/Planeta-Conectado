document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.querySelector("input[name='nome']").value;
    let email = document.querySelector("input[name='email']").value;
    let senha = document.querySelector("input[name='senha']").value;

    let msg = document.getElementById("mensagem");

    let erros = []; 

    
    let regexMaiuscula = /[A-Z]/;
    let regexNumero = /[0-9]/;
    let regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;

    
    if (nome === "" || email === "" || senha === "") {
        erros.push("Preencha todos os campos obrigatórios.");
    }

   
    if (senha.length < 8) {
        erros.push("A senha deve ter no mínimo 8 caracteres.");
    }

    if (!regexMaiuscula.test(senha)) {
        erros.push("A senha deve conter pelo menos UMA letra maiúscula.");
    }

    if (!regexNumero.test(senha)) {
        erros.push("A senha deve conter pelo menos UM número.");
    }

    if (!regexEspecial.test(senha)) {
        erros.push("A senha deve conter pelo menos UM caractere especial.");
    }

    
    if (erros.length > 0) {
        msg.style.color = "red";
        msg.innerHTML = erros.join("<br>"); 
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Cadastro realizado com sucesso!";
});

const toggleSenha = document.getElementById("toggleSenha");
const senhaInput = document.getElementById("senha");

toggleSenha.addEventListener("click", function() {
    if (senhaInput.type === "password") {
        senhaInput.type = "text"; 
        toggleSenha.classList.remove("bi-eye");
        toggleSenha.classList.add("bi-eye-slash");
    } else {
        senhaInput.type = "password"; 
        toggleSenha.classList.remove("bi-eye-slash");
        toggleSenha.classList.add("bi-eye");
    }
});
