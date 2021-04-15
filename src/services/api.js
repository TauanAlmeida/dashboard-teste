var vendaDepartamento = [
  { name: "Ferram", value: 27 },
  { name: "Bombas", value: 9 },
  { name: "E.P.I", value: 5 },
  { name: "Pulver", value: 7 },
  { name: "Moto-ser", value: 8 },
  { name: "Irrig", value: 13 },
  { name: "Automot", value: 17 },
  { name: "Casa/Jardim", value: 8 },
  { name: "Outros", value: 6 },
];

/* var vendas = {
    valorTotal: [
      { name: "JAN", value: 122.5 },
      { name: "FEV", value: 135.5 },
      { name: "MAR", value: 127.52 },
      { name: "ABR", value: 145.92 },
      { name: "MAI", value: 189.35 },
      { name: "JUL", value: 174.568 },
      { name: "AGO", value: 129.325 },
      { name: "SET", value: 189.653 },
      { name: "OUT", value: 147.896 },
      { name: "NOV", value: 157.986 },
      { name: "DEZ", value: 135.488 },
    ],
    custoMercadoria: [
      { name: "JAN", value: 85.750 },
      { name: "FEV", value: 92.140 },
      { name: "MAR", value: 82.888 },
      { name: "ABR", value: 113.818 },
      { name: "MAI", value: 136.332 },
      { name: "JUL", value: 122.198 },
      { name: "AGO", value: 87.941 },
      { name: "SET", value: 123.274 },
      { name: "OUT", value: 131.029 },
      { name: "NOV", value: 106.485 },
      { name: "DEZ", value: 92.131 },
    ]
},
 */

const vendas = {
  valorTotal: [
    { name: "JAN", value: 122.5 },
    { name: "FEV", value: 135.5 },
    { name: "MAR", value: 127.52 },
    { name: "ABR", value: 145.92 },
    { name: "MAI", value: 189.35 },
    { name: "JUL", value: 174.568 },
    { name: "AGO", value: 129.325 },
    { name: "SET", value: 189.653 },
    { name: "OUT", value: 147.896 },
    { name: "NOV", value: 157.986 },
    { name: "DEZ", value: 135.488 },
  ],
  custoMercadoria: [
    { name: "JAN", value: 85.75 },
    { name: "FEV", value: 92.14 },
    { name: "MAR", value: 82.888 },
    { name: "ABR", value: 113.818 },
    { name: "MAI", value: 136.332 },
    { name: "JUL", value: 122.198 },
    { name: "AGO", value: 87.941 },
    { name: "SET", value: 123.274 },
    { name: "OUT", value: 131.029 },
    { name: "NOV", value: 106.485 },
    { name: "DEZ", value: 92.131 },
  ],
};

const vendasMeioPagamento = [
  { name: "Cheque", value: 25334 },
  { name: "Dinheiro", value: 15015 },
  { name: "Cartão de crédito", value: 7272 },
];
const Top5Vendedor = [
  { name: "Felipe", value: 16.419, total: "R$ 91.184,60" },
  { name: "Alberto", value: 95.744, total: "R$ 273.553,80" },
  { name: "Mário", value: 54.711, total: "R$ 364.738,40" },
  { name: "Carlos", value: 91.185, total: "R$ 455.923,00" },
  { name: "João", value: 191.488, total: "R$ 638.292,20" },
];
export { vendaDepartamento, vendas, vendasMeioPagamento, Top5Vendedor };
