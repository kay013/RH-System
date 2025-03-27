document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Buscar funcionários da API
        const resFuncionarios = await fetch("http://localhost:3000/funcionarios");
        const funcionarios = await resFuncionarios.json();
        
        const listaFuncionarios = document.getElementById("lista-funcionarios");
        if (listaFuncionarios) {
            listaFuncionarios.innerHTML = funcionarios.map(func => 
                `<tr><td>${func.nome}</td><td>${func.cargo}</td><td>${func.email}</td></tr>`
            ).join('');
        }

        // Buscar vagas da API
        const resVagas = await fetch("http://localhost:3000/vagas");
        const vagas = await resVagas.json();
        
        const listaVagas = document.getElementById("lista-vagas");
        if (listaVagas) {
            listaVagas.innerHTML = vagas.map(vaga => 
                `<li class='list-group-item'>${vaga.titulo}</li>`
            ).join('');
        }
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }

    // Simulação de login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha })
            });
            
            const data = await res.json();
            if (data.success) {
                alert("Login bem-sucedido!");
            } else {
                alert("Email ou senha incorretos!");
            }
        });
    }
});