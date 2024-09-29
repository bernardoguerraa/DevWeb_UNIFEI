window.onload = function() {
    const skills = {
        cpp: 85,
        java: 75,
        python: 80,
        html: 90,
        css: 85,
        js: 70,
        excel: 65,
        figma: 60,
        git:100
    };

    document.getElementById('cpp_progresso').style.width = skills.cpp + '%';
    document.getElementById('java_progresso').style.width = skills.java + '%';
    document.getElementById('python_progresso').style.width = skills.python + '%';
    document.getElementById('html_progresso').style.width = skills.html + '%';
    document.getElementById('css_progresso').style.width = skills.css + '%';
    document.getElementById('js_progresso').style.width = skills.js + '%';
    document.getElementById('excel_progresso').style.width = skills.excel + '%';
    document.getElementById('figma_progresso').style.width = skills.figma + '%';
    document.getElementById('git_progresso').style.width = skills.git + '%';
};

function calcularServico() {
    const tipoServico = document.getElementById("tipo_servico").value;
    const horas = document.getElementById("horas").value;
    const precoHora = document.querySelector(`#tipo_servico option[value="${tipoServico}"]`).getAttribute('data_preco');

    if (horas > 0) {
        const custoTotal = horas * precoHora;
        document.getElementById("resultado").innerText = `O custo do serviço de ${tipoServico.replace('_', ' ')} será R$${custoTotal}.`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
    }
}

