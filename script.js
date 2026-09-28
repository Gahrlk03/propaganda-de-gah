
const formulario = document.getElementById("cadastro");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    const imagem = document.getElementById("imagem").files[0];

    // Criptografa a senha usando SHA-256
    const textoSenha = new TextEncoder().encode(senha);

    const resultado = await crypto.subtle.digest(
        "SHA-256",
        textoSenha
    );

    const senhaCriptografada = Array.from(
        new Uint8Array(resultado)
    )
    .map(numero => numero.toString(16).padStart(2, "0"))
    .join("");

    let nomeImagem = "Nenhuma imagem selecionada";

    if (imagem) {
        nomeImagem = imagem.name;
    }

    // Dados que serão salvos no TXT
    const dados =
        "===== CADASTRO =====\n\n" +
        "Nome: " + nome + "\n" +
        "Endereço: " + endereco + "\n" +
        "E-mail: " + email + "\n" +
        "Senha: " + senhaCriptografada + "\n" +
        "CPF: " + cpf + "\n" +
        "Imagem: " + nomeImagem + "\n";

    // Cria o arquivo TXT
    const arquivo = new Blob(
        [dados],
        { type: "text/plain" }
    );

    // Faz o download do TXT
    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);
    link.download = "cadastro.txt";

    link.click();

    URL.revokeObjectURL(link.href);

    alert("Cadastro salvo com sucesso!");
});
