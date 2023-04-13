import prisma from "../src/database/db";
import bcrypt from "bcrypt";

async function main(){
    // await prisma.products.createMany({
    //     data:[
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png",
    //             "name":"Davideira",
    //             "description": "O nome Davideira faz alusão ao fruto que sai da videira, a uva. Em Portugal, as uvas crescem há mais de 4 mil anos. É um cultivo que faz parte da história do país. Esse vinho é uma homenagem à uva, elaborado com castas típicas do país.",
    //             "type": "Portugal Tinto Meio Seco 750 ml",
    //             "alcohol": "13.00% ABV",
    //             "value": 6490,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image":"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/27207-01.png",
    //             "name":"Pueblo del Sol",
    //             "description": "A uva que tornou-se símbolo do Uruguai e hoje é responsável por fazer parte dos maiores vinhos do país, a Tannat! Gera exemplares potentes, com taninos firmes, frutados e macios. O Pueblo del Sol Tannat traz a autenticidade da uva em solo uruguaio, uma experiência esplêndida!",
    //             "type": "Uruguai Tinto Seco 750 ml",
    //             "alcohol": "12.00% ABV",
    //             "value": 6490,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/24258-01.png",
    //             "name": "Amandla",
    //             "description": "Um exemplar que apresenta a Pinotage bem ao estilo sul-africano: leve, frutada e fácil de beber. Por ser proveniente de “bush vines”, vinhas arbustos, as uvas têm maior concentração de cores, aromas e sabores. Um exemplar que foge do estereótipo de uma Pinotage pesada e agressiva.",
    //             "type": "África do Sul Tinto Seco 750 ml",
    //             "alcohol": "13.50% ABV",
    //             "value": 10490,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26594-01.png",
    //             "name": " Ernst Loosen Private Reserve Riesling ",
    //             "description": "Produzido por um dos maiores nomes da vitivinicultura alemã, Ernst Loosen, este branco tem um perfil muito aromático e saboroso. Elaborado em Mosel, esse rótulo traz a Riesling, uva branca que ocupa mais de 60% dos vinhedos da região.",
    //             "type": "Alemanha Branco Meio Seco 750 ml",
    //             "alcohol": "12.00% ABV",
    //             "value": 17990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/24320-01.png",
    //             "name": "DiamAndes de Uco Cabernet Sauvignon",
    //             "description": "Um Cabernet Sauvignon argentino com essência francesa, assim é definido este exemplar. Um vinho que traz toda a potência do terroir argentino, com a elegância no estilo da França, auxiliada pela consultoria do renomado Michel Rolland, esta vinícola é do mesmo grupo que elabora o Clos de Los Siete. A DiamAndes traz qualidade e personalidade em seus exemplares.",
    //             "type": "Argentina Tinto Seco 750 ml",
    //             "alcohol": "14.00% ABV",
    //             "value": 29990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28046-01.png",
    //             "name": "John Duval",
    //             "description": "John Duval Wines é uma renomada vinícola localizada no sul da Austrália que carrega mais de 100 anos de história. São mais de cinco gerações unindo conhecimentos tradicionais, avanços tecnológicos e respeito ao terroir na produção de vinhos de alta qualidade. Cada vinho é feito de uvas provenientes exclusivamente de vinhas velhas de Barossa, assinatura e estilo distinto da John Duval Wines, conhecido pela elegância, complexidade e estrutura. Esse exemplar é produzido com Grenache de safras excepcionais proveniente de dois vinhedos muito antigos e de baixo rendimento - 90% de um vinhedo ancestral do Vale do Éden com mais de 150 anos e 10% de vinhas de 55 anos plantadas nos ricos solos do Vale Barossa do Norte. Esse é um vinho tinto de pequena produção proveniente de vinhas velhas e de baixo rendimento, ou seja, frutas mais concentradas em nutrientes que geram vinhos com maior complexidade em aromas e sabores. Profundo e gostoso de beber, mostra frutas vermelhas de perfil mais fresco acompanhadas de notas florais, de ervas e de especiarias doces, que se confirmam na boca, tudo equilibrado por taninos aveludados e acidez vibrante, o que te faz almejar pelo próximo gole!",
    //             "type": "Austrália Tinto Meio Seco 750 ml",
    //             "alcohol": "14.00% ABV",
    //             "value": 98990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28752-01.png",
    //             "name": "Ballade Cabernet Sauvignon",
    //             "description": "Ballade Cabernet Sauvignon é um vinho leve, frutado e harmônico da Miolo, vinícola brasileira reconhecida e premiada internacionalmente. Sinônimo de qualidade, tradição e pioneirismo no plantio de uvas finas no Brasil, tem na paixão pela vitivinicultura o desejo de levar mundo afora o vinho fino brasileiro, e isto tornou a Miolo a maior exportadora de vinhos do Brasil e a mais reconhecida no mercado internacional! A linha Ballade é produzida exclusivamente para a Wine, uma parceria de sucesso e muito bem avaliada que você só encontra aqui! Exemplar da variedade Cabernet Sauvignon cultivada em vinhedos próprios localizados na região da Campanha Central, Rio Grande do Sul. Vinho com perfil jovem, descomplicado, leve e muito agradável. Adequado para veganos.",
    //             "type": "Brasil Tinto Seco 750 ml",
    //             "alcohol": "12.50% ABV",
    //             "value": 4990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/27590-01.png",
    //             "name": "Quinta Las Cabras Rosé ",
    //             "description": "A linha de vinhos finos Quinta las Cabras é uma homenagem ao modo de vida que as primeiras famílias tiveram no passado em Las Cabras, região localizada em Peumo, na Denominação de Origem Valle de Cachapoal. As ''Quintas'', eram mansões familiares onde incontáveis histórias eram escritas, diferentes gerações viviam, apaixonadas pela terra e foi onde começaram a elaboração do vinho. Esse é um blend das principais uvas tintas da região, Cabernet Franc, Syrah, Malbec e Pinot Noir, com um toque da aromática Pinot Grigio, que também passa um tempo em contato com suas borras ganhando mais volume em boca e nuances perfumadas.",
    //             "type": "Chile Rosé Seco 750 ml",
    //             "alcohol": "12.00% ABV",
    //             "value": 11990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28369-01.png",
    //             "name": "Montado Branco",
    //             "description": "Montado Branco é um blend das uvas Verdejo e Chardonnay de Toledo, uma antiga cidade localizada em uma colina sobre as planícies de Castilla-La Mancha, no centro da Espanha, que tem como objetivo capturar a essência da uva em seu vinho, proporcionando, assim, um exemplar que expresse as características naturais das uvas e do seu terroir. As uvas foram colhidas a noite para garantir o frescor, teve maceração à baixas temperaturas, o mosto passou por fermentação malolática, tudo para deixar o vinho com uma característica mais cremosa no paladar, além, claro, de manter nas notas frutadas e preservar o seu frescor!",
    //             "type": "Espanha Branco Seco 750 ml",
    //             "alcohol": "12.50% ABV",
    //             "value": 8990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26575-01.png",
    //             "name": "Apothic Red",
    //             "description": "Produzido no terroir californiano, esse tinto mescla as variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot. Apothic é um vinho inspirado nas antigas Apothecas (adegas subterrâneas), um lugar misterioso onde há mais de 800 anos os viticultores misturavam e armazenavam seus cobiçados vinhos.",
    //             "type": "Estados Unidos Tinto Meio Seco 750 ml",
    //             "alcohol": "13.60% ABV",
    //             "value": 20990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/20202-01.png",
    //             "name": "Château La Fleur-Pétrus A.O.C. Pomerol",
    //             "description": "Uma das grandes estrelas de Pomerol, o Château La Fleur-Pétrus produz apenas um rótulo, com garrafas muito limitadas. Situado entre os renomados Château Lafleur e o Petrus, esse produtor conquista a cada safra incríveis pontuações dos críticos mais renomados do mundo do vinho.",
    //             "type": "França Tinto Seco 750 ml",
    //             "alcohol": "13.50% ABV",
    //             "value": 1094900,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": "https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28056-01.png",
    //             "name": "I Giusti & Zanza Nemorino",
    //             "description": "I Giusti & Zanza Vigneti nasceu em 1996 da restauração de uma vinícola histórica nas colinas de Fauglia, em uma região da Toscana próxima ao mar Mediterrâneo, na área de Pisa, que tem um longo histórico de cultivo de vinho datado desde o início do século XVI. Os métodos de agricultura orgânica com uso de compostos orgânicos e biodinâmicos nas vinhas permaneceram como base da produção da vinícola que adota técnicas que respeitam a natureza, as características naturais das uvas e terroir e que busca uma harmonia na relação entre o ser humano e o lugar. O resultado é um vinho autêntico, expressivo e com muito frescor que conquista a cada gole, uma verdadeira viagem pela Toscana!",
    //             "type": "Itália Branco Seco 750 ml",
    //             "alcohol": "13.00% ABV",
    //             "value": 23990,
    //             "type_product": "wine"
    //         },
    //         {
    //             "image": 'https://a-static.mlcdn.com.br/280x210/jogo-de-6-tacas-340ml-para-agua-e-vinho-boston-casambiente/medeirospresentes/15978824871/0489f94bde9e963e3c1265a919fa3dc4.jpeg',
    //             "name":'Taça 340ml',
    //             "description":'Taça de vidro para Vinho Tinto',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":5579,
    //             "type_product":'cup'
    //         },
    //         {
    //             "image": 'https://a-static.mlcdn.com.br/280x210/jogo-de-taca-de-cristal-para-vinho-tinto-com-6-unidades-580ml-bohemia/gahe/4531895819/8468a159a13e155cfaf42e7092d6161d.jpeg',
    //             "name":'Taça de Cristal 580ml',
    //             "description":'Taça de Cristal para vinho Tinto',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":10733,
    //             "type_product":'cup'
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/jogo-de-taca-de-cristal-para-vinho-bordeau-com-6-unidades-gastro-bohemia-650ml/gahe/4531895807/049bf7c5670959303083ebd90add49f5.jpeg',
    //             "name":'Taça de Cristal 650ml',
    //             "description":'Taça de vinho Bordeau Gastro Bohemia',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":12068,
    //             "type_product":'cup'
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/jogo-6-tacas-para-agua-e-vinho-em-cristal-560ml-xtra-bohemia/medeirospresentes/15864148520/fa8419ce89df731230469b201048cf6f.jpeg',
    //             "name":'Taça de Cristal 560ml',
    //             "description":'Taça para água e vinho em Cristal Ctra Bohemia',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":18599,
    //             "type_product":'cup'
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/tabua-para-queijos-multiuso-frios-petiscos-brotinho-em-bambu-clink/limixdistribuidora/ck3572-3/866950bb87403d8568fee061971937c1.jpeg',
    //             "name":'Tábua para queijos',
    //             "description":'Essa tabua é perfeita para diversos tipos de queijos, feita em bambu com otima qualidade',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":4588,
    //             "type_product":'taboo'
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/tabua-de-servir-queijos-aperitivos-frios-em-madeira-pinus-carmisini/carmisinidesign/15939173264/0e46f1eb8cd35149cb3299e548843fc7.jpeg',
    //             "name":'Tábua Coração',
    //             "description":'Essa tábua em formato de coração é muito aconchegante e perfeita para servir aperitivos frios, feita com mandeira de Pinus - Carmisini',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":4499,
    //             "type_product":'taboo' 
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/tabua-de-queijos-vinho-e-taca-petisqueira-redonda-madeira-full-vendas/olistplus/opmx3qaovmm0owc1/4f0ce37d7ebcd7275d4d815161d9585b.jpeg',
    //             "name":'Tábua redonda',
    //             "description":'Essa tábua de queijos é otima para servir variados petiscos e seu formato redondo é muito acolhedora e romantica, possue até suporte para colocar taça',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":7970,
    //             "type_product":'taboo'
    //         },
    //         {
    //             "image":'https://a-static.mlcdn.com.br/280x210/tabua-de-queijo-e-frios-bambu-jogo-kit-com-4-talheres-inox-2-potes-2-mini-lousa-2-giz-e-gaveta-churrasco-alpha/churrascoalpha/120/3eab05e061fbc451aab6fcca1077c4f1.jpeg',
    //             "name":'Tábua Gaveteiro',
    //             "description":'Essa tábua é otima para quem gosta de versalidade, com um otimo espaço, vem com 4 talheres inox, 2 potes, 2 mini lousa, 2 giz, feita com bambu',
    //             "type":'Brazil',
    //             "alcohol":'',
    //             "value":32900,
    //             "type_product":'taboo'
    //         }
    //     ]
    // })

    // const pass = "adm123"
    // const passwordHashed = bcrypt.hashSync(pass, 12)

    // await prisma.users.create({
    //     data:{
    //         email: "adm@gmail.com.br",
    //         name: "adm",
    //         password: passwordHashed,
    //         adm: true
    //     }
    // })
}

main()
    .then(() => {console.log("Successful registration!!")})
    .catch(e => {console.log(e); process.exit(1)})
    .finally(async() => {await prisma.$disconnect()})