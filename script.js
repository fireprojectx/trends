document.addEventListener('DOMContentLoaded', async () => {
  // Carregar a biblioteca de gráficos do Google
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  async function drawChart() {
    const data = await fetchTrendingSearches();
    const dataTable = google.visualization.arrayToDataTable(data);

    const options = {
      title: 'Trending Searches',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Search Volume',
        minValue: 0,
      },
      vAxis: {
        title: 'Search Term',
      },
    };

    const chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(dataTable, options);
  }

  async function fetchTrendingSearches() {
    // Simulação de dados até que a integração com a API do Google Trends seja configurada
    // Em um ambiente de produção, substitua isso por uma chamada para a API do Google Trends
    const mockData = [
      ['Search Term', 'Search Volume'],
      ['Example Term 1', 1000],
      ['Example Term 2', 750],
      ['Example Term 3', 600],
      ['Example Term 4', 400],
      ['Example Term 5', 300],
    ];

    // Código para chamar a API do Google Trends aqui
    // Exemplo:
    // const response = await fetch('URL_DA_API_DO_GOOGLE_TRENDS');
    // const data = await response.json();
    // Processar e retornar os dados da API

    return mockData;
  }
});
