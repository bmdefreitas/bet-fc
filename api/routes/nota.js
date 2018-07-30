const notas = [
    {
        data: '2017-10-31',
        itens: [
            { codigo: '2143', valor: 200.00 },
            { codigo: '2111', valor: 500.00 }
        ]
    },
    {
        data: '2017-07-12',
        itens: [
            { codigo: '2222', valor: 120.00 },
            { codigo: '2143', valor: 280.00 }
        ]
    }, 
    {
        data: '2017-02-02',
        itens: [
            { codigo: '2143', valor: 110.00 },
            { codigo: '7777', valor: 390.00 }
        ]
    },     
];

module.exports = app => {

    app.get('/notas', (req, res) => res.json(notas));
}