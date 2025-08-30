//Mostrar mensagem ao visitar página pela primeira vez
if (!sessionStorage.getItem("visitou")) {
    alert("Bem-Vindo(a)!");
    sessionStorage.setItem("visitou", "true");
}

//Mostrar ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
    const anoAtual = new Date().getFullYear();
    document.getElementById("ano").textContent = anoAtual;
});


//Clicar numa linha da tabela de formação para mostrar os dados
document.addEventListener("DOMContentLoaded", () => {
    const linhas = document.querySelectorAll("table tbody tr");

    linhas.forEach(linha => {
        linha.addEventListener("click", () => {
            let colunas = linha.querySelectorAll("td");
            let mensagem = `Instituição: ${colunas[0].textContent}\nCurso: ${colunas[1].textContent}\nAno: ${colunas[2].textContent}`;
            alert(mensagem);
        });
    });
});

//Aviso que estará saindo do site de Portfólio e será direcionado ao GitHub
document.addEventListener("DOMContentLoaded", () => {
    const gitHubLinks = document.querySelectorAll("#portfolio .card1 a");

    gitHubLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert("Você está saindo do meu portfólio e será redirecionado ao meu GitHub")
        });
    });
});

//Validação de Entrada de Dados no Formulário de Contato
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioContato");

    if (form) {
        form.addEventListener("submit", () => {
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                alert("Preencha todos os campos antes de enviar");
                event.preventDefault();
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Insira um e-mail válido")
                event.preventDefault();
                return;
            }

            alert("Mensagem enviada com sucesso");
        });
    }
});
