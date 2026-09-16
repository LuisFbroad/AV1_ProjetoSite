const recursos = [
    {
        id: "titanio",
        nome: "Titânio",
        categoria: "recursos",
        icone: "Ti",
        descricao: "Material básico usado em construções, ferramentas e veículos.",
        receita: "Obtido em afloramentos de calcário ou sucata metálica.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "minerio-cobre",
        nome: "Minério de cobre",
        categoria: "recursos",
        icone: "Cu",
        descricao: "Minério usado para fabricar componentes elétricos.",
        receita: "Obtido em afloramentos de calcário.",
        localizacao: "Biomas rasos, cavernas e florestas de kelp.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "quartzo",
        nome: "Quartzo",
        categoria: "recursos",
        icone: "Qz",
        descricao: "Cristal usado para produzir vidro.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Biomas rasos, cavernas e áreas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "chumbo",
        nome: "Chumbo",
        categoria: "recursos",
        icone: "Pb",
        descricao: "Metal usado em proteção contra radiação e estruturas.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Planaltos gramados, cavernas e regiões profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "prata",
        nome: "Prata",
        categoria: "recursos",
        icone: "Ag",
        descricao: "Metal utilizado em ferramentas, equipamentos e eletrônicos.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Florestas de kelp, cavernas e planaltos gramados.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ouro",
        nome: "Ouro",
        categoria: "recursos",
        icone: "Au",
        descricao: "Metal utilizado em circuitos e componentes avançados.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Cavernas, planaltos e áreas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "litio",
        nome: "Lítio",
        categoria: "recursos",
        icone: "Li",
        descricao: "Material usado em reforços e tecnologias avançadas.",
        receita: "Coletado no ambiente ou em afloramentos.",
        localizacao: "Ilhas, cavernas e biomas profundos.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "diamante",
        nome: "Diamante",
        categoria: "recursos",
        icone: "Dm",
        descricao: "Cristal resistente usado em upgrades e ferramentas avançadas.",
        receita: "Obtido em afloramentos de xisto.",
        localizacao: "Montanhas, cavernas profundas e regiões vulcânicas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "magnetita",
        nome: "Magnetita",
        categoria: "recursos",
        icone: "Mg",
        descricao: "Minério magnético usado em módulos de veículos e scanners.",
        receita: "Coletado diretamente ou em afloramentos.",
        localizacao: "Cavernas de cogumelos e regiões profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "rubi",
        nome: "Rubi",
        categoria: "recursos",
        icone: "Rb",
        descricao: "Cristal raro utilizado na criação de aerogel.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef, Blood Kelp Zone e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "minerio-niquel",
        nome: "Minério de níquel",
        categoria: "recursos",
        icone: "Ni",
        descricao: "Metal usado para módulos avançados de profundidade.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cianita",
        nome: "Cianita",
        categoria: "recursos",
        icone: "Ky",
        descricao: "Cristal de endgame usado em tecnologias avançadas.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Zona de Lava Inativa e Lagos de Lava.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "enxofre-caverna",
        nome: "Enxofre de caverna",
        categoria: "recursos",
        icone: "S",
        descricao: "Material químico usado em ferramentas e explosivos.",
        receita: "Coletado em flores de enxofre.",
        localizacao: "Cavernas rasas e áreas com Crashfish.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cristal-enxofre",
        nome: "Cristal de enxofre",
        categoria: "recursos",
        icone: "CS",
        descricao: "Cristal usado em tecnologias avançadas do Cyclops.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River e regiões de lava.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "uraninita",
        nome: "Uraninita",
        categoria: "recursos",
        icone: "U",
        descricao: "Minério radioativo usado em hastes de reator nuclear.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef, Lost River e regiões profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "deposito-sal",
        nome: "Depósito de sal",
        categoria: "recursos",
        icone: "Na",
        descricao: "Recurso usado em água desinfetada e alimentos curados.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "coral-tabela",
        nome: "Amostra de coral-tabela",
        categoria: "recursos",
        icone: "CT",
        descricao: "Material orgânico usado para criar chips de computador.",
        receita: "Cortado usando a faca de sobrevivência.",
        localizacao: "Corais-tabela de biomas rasos.",
        desbloqueio: "Faca de sobrevivência."
    },
    {
        id: "cacho-sementes-creepvine",
        nome: "Cacho de sementes de Creepvine",
        categoria: "recursos",
        icone: "CV",
        descricao: "Material vegetal usado para borracha de silicone e lubrificante.",
        receita: "Coletado de Creepvines.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "amostra-creepvine",
        nome: "Amostra de Creepvine",
        categoria: "recursos",
        icone: "FC",
        descricao: "Material vegetal usado na criação de malha de fibra.",
        receita: "Cortado usando uma faca.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Faca de sobrevivência."
    },
    {
        id: "cogumelo-acido",
        nome: "Cogumelo ácido",
        categoria: "recursos",
        icone: "CA",
        descricao: "Organismo usado para fabricar baterias.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Biomas rasos.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "saco-gel",
        nome: "Saco de gel",
        categoria: "recursos",
        icone: "SG",
        descricao: "Organismo utilizado para produzir aerogel.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef, Blood Kelp Zone e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "oleo-sangue",
        nome: "Óleo de sangue",
        categoria: "recursos",
        icone: "OS",
        descricao: "Recurso vegetal usado para benzina e fibra sintética.",
        receita: "Coletado de Bloodvines.",
        localizacao: "Blood Kelp Zone e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "dente-stalker",
        nome: "Dente de Stalker",
        categoria: "recursos",
        icone: "DS",
        descricao: "Material usado na fabricação de vidro esmaltado.",
        receita: "Coletado após um Stalker perder um dente.",
        localizacao: "Florestas de kelp e áreas com Stalkers.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "coral-tubo",
        nome: "Coral-tubo",
        categoria: "recursos",
        icone: "TC",
        descricao: "Recurso usado para produzir água desinfetada.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Biomas rasos e cavernas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "saco-acido-profundo",
        nome: "Saco de ácido profundo",
        categoria: "recursos",
        icone: "AP",
        descricao: "Organismo usado na criação de ácido clorídrico.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River.",
        desbloqueio: "Disponível desde o início."
    }
];