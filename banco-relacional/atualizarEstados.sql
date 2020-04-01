UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA';

SELECT est.nome FROM estados est WHERE sigla = 'MA';

update estados
SET nome = 'Paraná',
    populacao = 11.32
WHERE sigla = 'PR';

SELECT 
    est.nome, 
    sigla, 
    populacao 
FROM estados est 
WHERE sigla = 'PR';