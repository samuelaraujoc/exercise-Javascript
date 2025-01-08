function gerarNota() {
    const valorVenda = parseFloat(document.getElementById('valor-venda').value);
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    const impostos = {
        IRPF: (valorVenda * irpf) / 100,
        PIS: (valorVenda * pis) / 100,
        COFINS: (valorVenda * cofins) / 100,
        INSS: (valorVenda * inss) / 100,
        ISSQN: (valorVenda * issqn) / 100
    };

    const totalImpostos = Object.values(impostos).reduce((acc, val) => acc + val, 0);
    const valorLiquido = valorVenda - totalImpostos;

    const notaFiscalDiv = document.getElementById('nota-fiscal');
    notaFiscalDiv.innerHTML = `
                <p>Valor da Venda: R$ ${valorVenda.toFixed(2)}</p>
                <p>IRPF: R$ ${impostos.IRPF.toFixed(2)}</p>
                <p>PIS: R$ ${impostos.PIS.toFixed(2)}</p>
                <p>COFINS: R$ ${impostos.COFINS.toFixed(2)}</p>
                <p>INSS: R$ ${impostos.INSS.toFixed(2)}</p>
                <p>ISSQN: R$ ${impostos.ISSQN.toFixed(2)}</p>
                <p>Total de Impostos: R$ ${totalImpostos.toFixed(2)}</p>
                <p>Valor Líquido: R$ ${valorLiquido.toFixed(2)}</p>
            `;
}
