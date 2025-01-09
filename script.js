function gerarNota() {
    const valorVenda = parseFloat(document.getElementById("valor-venda").value.replace(/[^\d,]/g, "").replace(",", "."));
    const itens = document.getElementById("itens").value;
    const irpf = parseFloat(document.getElementById("irpf").value);
    const pis = parseFloat(document.getElementById("pis").value);
    const cofins = parseFloat(document.getElementById("cofins").value);
    const inss = parseFloat(document.getElementById("inss").value);
    const issqn = parseFloat(document.getElementById("issqn").value);

    const totalImpostos = (valorVenda * (irpf + pis + cofins + inss + issqn)) / 100;
    const total = valorVenda - totalImpostos;

    document.getElementById('nota-fiscal').innerHTML = `
        <h3>Nota Fiscal (NFS-e)</h3>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <div class="itens">
            <p><strong>IRPF:</strong> ${irpf}%</p>
            <p><strong>PIS:</strong> ${pis}%</p>
            <p><strong>COFINS:</strong> ${cofins}%</p>
            <p><strong>INSS:</strong> ${inss}%</p>
            <p><strong>ISSQN:</strong> ${issqn}%</p>
        </div>
        <p class="total"><strong>Total com Impostos:</strong> R$ ${total.toFixed(2)}</p>
    `;
}

// Função para formatar o campo "Valor da Venda" como moeda brasileira
function formatarMoeda(input) {
    let valor = input.value.replace(/[^\d]/g, ""); 
    valor = (valor / 100).toFixed(2); 
    valor = valor.replace(".", ","); 
    input.value = `R$ ${valor}`; 
}
