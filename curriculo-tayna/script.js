function carregarDados(pessoa) {
    fetch('dados.json')
        .then(res => res.json())
        .then(data => {
            const perfil = data[pessoa];
            document.getElementById('nome-completo').textContent = perfil.informações.nome;

            document.getElementById('foto').style.backgroundImage = "url('foto 3x4.jpg')";

            const info = perfil["informações"];

            const contato = 
            `<p><strong>Data de nascimento:</strong> ${info.dataNascimento}</p>
            <p><strong>E-mail:</strong> ${info.email}</p>
            <p><strong>Telefone:</strong> ${info.telefone}</p>
            <p><strong>LinkedIn:</strong> <a href="${info.linkedin}" target="_blank">Perfil</a></p>
            <p><strong>GitHub:</strong> <a href="${info.github}" target="_blank">Repositório</a></p>`;
            document.getElementById('dados-contato').innerHTML = contato;

            const conhecimentosHTML = perfil.conhecimentos.map(item => `<li>${item}</li>`).join('');
            document.getElementById('lista-conhecimentos').innerHTML = conhecimentosHTML;

            const experienciasHTML = perfil.experiencias.map(exp => `
          <div>
            <h4>${exp.cargo} - ${exp.empresa}</h4>
            <p>${exp.descricao}</p>
            <p><em>${exp.inicio} - ${exp.fim}</em></p>
          </div>
        `).join('');
            document.getElementById('experiencias').innerHTML = experienciasHTML;

            const formacoesHTML = perfil.formacoes.map(form => `
          <div>
            <h4>${form.curso}</h4>
            <p>${form.instituicao}</p>
            <p><em>${form.status}</em></p>
          </div>
        `).join('');
            document.getElementById('formacoes').innerHTML = formacoesHTML;
        });
}
