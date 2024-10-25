        
        async function obterCotacoes() {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/BRL');
            const data = await response.json();
            return data.rates; // Retorna todas as taxas de câmbio
        }

        async function converter() {
            const valor = parseFloat(document.getElementById('valor').value);
            const moeda = document.getElementById('moeda').value;

            if (isNaN(valor)) {
                document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
                return;
            }

            const taxas = await obterCotacoes();
            const resultado = valor * taxas[moeda];

            document.getElementById('resultado').innerText = `${valor} BRL = ${resultado.toFixed(2)} ${moeda}`;
        }