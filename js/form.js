document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let nome = document.querySelector("input[name='nome']").value;
    let email = document.querySelector("input[name='email']").value;
    let senha = document.querySelector("input[name='senha']").value;

    let msg = document.getElementById("mensagem");

    if (nome === "" || email === "" || senha === "") {
        msg.innerText = "Preencha todos os campos obrigatórios!";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "Cadastro realizado com sucesso!";
    msg.style.color = "green";

});
