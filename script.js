
const formulario = document.getElementById("cadastro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const imagem = document.getElementById("imagem").files[0];

    let nomeImagem = "Nenhuma imagem selecionada";

    if (imagem) {
        nomeImagem = imagem.name;
    }

    const dados =
        "===== CADASTRO =====\n\n" +
        "Nome: " + nome + "\n" +
        "Endereço: " + endereco + "\n" +
        "E-mail: " + email + "\n" +
        "CPF: " + cpf + "\n" +
        "Imagem: " + nomeImagem + "\n";

    const arquivo = new Blob([dados], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(arquivo);
    link.download = "cadastro.txt";

    link.click();

    URL.revokeObjectURL(link.href);

    alert("Cadastro salvo com sucesso!");
});
