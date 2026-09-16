const items = [
    {
        id: "titanio",
        nome: "Titânio",
        categoria: "recursos",
        icone: "Ti",
        descricao: "Material básico usado em construções e fabricação.",
        receita: "Obtido em afloramentos de calcário ou sucata metálica.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cobre",
        nome: "Minério de cobre",
        categoria: "recursos",
        icone: "Cu",
        descricao: "Minério usado em componentes elétricos.",
        receita: "Obtido em afloramentos de calcário.",
        localizacao: "Biomas rasos e cavernas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "quartzo",
        nome: "Quartzo",
        categoria: "recursos",
        icone: "Qz",
        descricao: "Cristal usado para produzir vidro.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Diversos biomas e cavernas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "chumbo",
        nome: "Chumbo",
        categoria: "recursos",
        icone: "Pb",
        descricao: "Metal usado em proteção contra radiação e construções.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Planaltos gramados e áreas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "prata",
        nome: "Prata",
        categoria: "recursos",
        icone: "Ag",
        descricao: "Metal usado em eletrônicos e equipamentos.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Florestas de kelp e cavernas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ouro",
        nome: "Ouro",
        categoria: "recursos",
        icone: "Au",
        descricao: "Metal usado em tecnologia avançada.",
        receita: "Obtido em afloramentos de arenito.",
        localizacao: "Cavernas e biomas profundos.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "litio",
        nome: "Lítio",
        categoria: "recursos",
        icone: "Li",
        descricao: "Material para reforços e tecnologia avançada.",
        receita: "Coletado no ambiente.",
        localizacao: "Ilhas e biomas profundos.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "diamante",
        nome: "Diamante",
        categoria: "recursos",
        icone: "Dm",
        descricao: "Cristal usado em ferramentas e equipamentos avançados.",
        receita: "Obtido em afloramentos de xisto.",
        localizacao: "Montanhas e cavernas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "magnetita",
        nome: "Magnetita",
        categoria: "recursos",
        icone: "Mg",
        descricao: "Minério magnético usado em módulos e scanners.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Cavernas de cogumelos e áreas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "rubi",
        nome: "Rubi",
        categoria: "recursos",
        icone: "Rb",
        descricao: "Cristal usado para fabricar aerogel.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef, Blood Kelp e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "niquel",
        nome: "Minério de níquel",
        categoria: "recursos",
        icone: "Ni",
        descricao: "Metal usado em upgrades de profundidade.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cianita",
        nome: "Cianita",
        categoria: "recursos",
        icone: "Ky",
        descricao: "Cristal usado em tecnologia de endgame.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Zona de Lava Inativa e Lagos de Lava.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "uraninita",
        nome: "Uraninita",
        categoria: "recursos",
        icone: "U",
        descricao: "Minério radioativo usado para alimentar reatores nucleares.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef e áreas profundas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "sal",
        nome: "Depósito de sal",
        categoria: "recursos",
        icone: "Na",
        descricao: "Recurso usado em alimentos curados e água desinfetada.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "enxofre-caverna",
        nome: "Enxofre de caverna",
        categoria: "recursos",
        icone: "S",
        descricao: "Material usado em ferramentas e explosivos.",
        receita: "Coletado em flores de enxofre.",
        localizacao: "Cavernas rasas e áreas com Crashfish.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cristal-enxofre",
        nome: "Cristal de enxofre",
        categoria: "recursos",
        icone: "CS",
        descricao: "Cristal usado em tecnologia avançada do Cyclops.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River e áreas de lava.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "coral-tabela",
        nome: "Amostra de coral-tabela",
        categoria: "recursos",
        icone: "CT",
        descricao: "Material orgânico para chips de computador.",
        receita: "Cortado usando uma faca.",
        localizacao: "Biomas rasos.",
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
        id: "cacho-creepvine",
        nome: "Cacho de sementes de Creepvine",
        categoria: "recursos",
        icone: "CV",
        descricao: "Material para produzir silicone e lubrificante.",
        receita: "Coletado de Creepvines.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "amostra-creepvine",
        nome: "Amostra de Creepvine",
        categoria: "recursos",
        icone: "FC",
        descricao: "Material vegetal usado em malha de fibra.",
        receita: "Cortado usando uma faca.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Faca de sobrevivência."
    },
    {
        id: "saco-gel",
        nome: "Saco de gel",
        categoria: "recursos",
        icone: "SG",
        descricao: "Organismo usado para produzir aerogel.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Grand Reef, Blood Kelp e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "oleo-sangue",
        nome: "Óleo de sangue",
        categoria: "recursos",
        icone: "OS",
        descricao: "Recurso para fabricar benzina.",
        receita: "Coletado de Bloodvines.",
        localizacao: "Blood Kelp Zone e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "dente-stalker",
        nome: "Dente de Stalker",
        categoria: "recursos",
        icone: "DS",
        descricao: "Material usado para vidro esmaltado.",
        receita: "Coletado após Stalkers soltarem dentes.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "saco-acido-profundo",
        nome: "Saco de ácido profundo",
        categoria: "recursos",
        icone: "AP",
        descricao: "Organismo usado para produzir ácido clorídrico.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "coral-tubo",
        nome: "Coral-tubo",
        categoria: "recursos",
        icone: "TC",
        descricao: "Material usado em água desinfetada.",
        receita: "Coletado diretamente do ambiente.",
        localizacao: "Biomas rasos.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "lingote-titanio",
        nome: "Lingote de titânio",
        categoria: "materiais",
        icone: "Ti",
        descricao: "Material compactado usado em veículos e estruturas grandes.",
        receita: "10x Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "lingote-plasteel",
        nome: "Lingote de plasteel",
        categoria: "materiais",
        icone: "PS",
        descricao: "Material estrutural avançado.",
        receita: "Lingote de titânio + 2x Lítio.",
        localizacao: "Fabricador.",
        desbloqueio: "Lingote de titânio."
    },
    {
        id: "vidro",
        nome: "Vidro",
        categoria: "materiais",
        icone: "GL",
        descricao: "Material transparente para equipamentos e bases.",
        receita: "2x Quartzo.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "vidro-esmaltado",
        nome: "Vidro esmaltado",
        categoria: "materiais",
        icone: "VE",
        descricao: "Vidro reforçado para veículos.",
        receita: "Vidro + Dente de Stalker.",
        localizacao: "Fabricador.",
        desbloqueio: "Vidro."
    },
    {
        id: "borracha-silicone",
        nome: "Borracha de silicone",
        categoria: "materiais",
        icone: "Si",
        descricao: "Material flexível para ferramentas e equipamentos.",
        receita: "2x Cacho de sementes de Creepvine.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "lubrificante",
        nome: "Lubrificante",
        categoria: "materiais",
        icone: "Lu",
        descricao: "Material para veículos e dispositivos móveis.",
        receita: "Cacho de sementes de Creepvine.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "malha-fibra",
        nome: "Malha de fibra",
        categoria: "materiais",
        icone: "MF",
        descricao: "Material têxtil para equipamentos de mergulho.",
        receita: "2x Amostra de Creepvine.",
        localizacao: "Fabricador.",
        desbloqueio: "Faca de sobrevivência."
    },
    {
        id: "benzina",
        nome: "Benzina",
        categoria: "materiais",
        icone: "BZ",
        descricao: "Material orgânico processado usado em fibra sintética.",
        receita: "3x Óleo de sangue.",
        localizacao: "Fabricador.",
        desbloqueio: "Óleo de sangue."
    },
    {
        id: "fibra-sintetica",
        nome: "Fibra sintética",
        categoria: "materiais",
        icone: "FS",
        descricao: "Material avançado para trajes especiais.",
        receita: "Benzina + Malha de fibra.",
        localizacao: "Fabricador.",
        desbloqueio: "Benzina."
    },
    {
        id: "aerogel",
        nome: "Aerogel",
        categoria: "materiais",
        icone: "AG",
        descricao: "Material avançado usado em tecnologia de profundidade.",
        receita: "Saco de gel + Rubi.",
        localizacao: "Fabricador.",
        desbloqueio: "Saco de gel e Rubi."
    },
    {
        id: "acido-cloridrico",
        nome: "Ácido clorídrico",
        categoria: "materiais",
        icone: "HCl",
        descricao: "Componente químico para fabricar polianilina.",
        receita: "3x Saco de ácido profundo.",
        localizacao: "Fabricador.",
        desbloqueio: "Acesso ao Lost River."
    },
    {
        id: "polianilina",
        nome: "Polianilina",
        categoria: "materiais",
        icone: "PA",
        descricao: "Material condutor para upgrades avançados.",
        receita: "Ouro + Ácido clorídrico.",
        localizacao: "Fabricador.",
        desbloqueio: "Ácido clorídrico."
    },
    {
        id: "bateria",
        nome: "Bateria",
        categoria: "tecnologia",
        icone: "BT",
        descricao: "Fonte de energia portátil.",
        receita: "Fita de cobre + Cogumelo ácido.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "celula-energia",
        nome: "Célula de energia",
        categoria: "tecnologia",
        icone: "CE",
        descricao: "Fonte de energia para veículos.",
        receita: "2x Bateria + Borracha de silicone.",
        localizacao: "Fabricador.",
        desbloqueio: "Bateria."
    },
    {
        id: "fio-cobre",
        nome: "Fio de cobre",
        categoria: "tecnologia",
        icone: "FC",
        descricao: "Condutor elétrico para componentes.",
        receita: "2x Minério de cobre.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "kit-fiacao",
        nome: "Kit de fiação",
        categoria: "tecnologia",
        icone: "KF",
        descricao: "Componente elétrico para ferramentas e equipamentos.",
        receita: "2x Prata.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "kit-fiacao-avancado",
        nome: "Kit de fiação avançado",
        categoria: "tecnologia",
        icone: "KA",
        descricao: "Componente eletrônico para tecnologias avançadas.",
        receita: "Kit de fiação + 2x Ouro.",
        localizacao: "Fabricador.",
        desbloqueio: "Kit de fiação."
    },
    {
        id: "chip-computador",
        nome: "Chip de computador",
        categoria: "tecnologia",
        icone: "PC",
        descricao: "Componente eletrônico avançado.",
        receita: "Ouro + 2x Amostra de coral-tabela + Fio de cobre.",
        localizacao: "Fabricador.",
        desbloqueio: "Faca de sobrevivência."
    },
    {
        id: "bateria-ionica",
        nome: "Bateria iônica",
        categoria: "tecnologia",
        icone: "BI",
        descricao: "Bateria de alta capacidade baseada em tecnologia alienígena.",
        receita: "Cubo iônico + 2x Lítio + Ouro.",
        localizacao: "Fabricador.",
        desbloqueio: "Projeto alienígena."
    },
    {
        id: "celula-ionica",
        nome: "Célula de energia iônica",
        categoria: "tecnologia",
        icone: "CI",
        descricao: "Célula de alta capacidade para veículos.",
        receita: "2x Bateria iônica + Borracha de silicone.",
        localizacao: "Fabricador.",
        desbloqueio: "Projeto alienígena."
    },
    {
        id: "scanner",
        nome: "Scanner",
        categoria: "ferramentas",
        icone: "SC",
        descricao: "Analisa recursos, criaturas, fragmentos e tecnologias.",
        receita: "Bateria + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "faca-sobrevivencia",
        nome: "Faca de sobrevivência",
        categoria: "ferramentas",
        icone: "FS",
        descricao: "Ferramenta para defesa e coleta.",
        receita: "Borracha de silicone + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "thermoblade",
        nome: "Thermoblade",
        categoria: "ferramentas",
        icone: "TB",
        descricao: "Versão aquecida da faca de sobrevivência.",
        receita: "Faca de sobrevivência + Bateria.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Estação de modificação."
    },
    {
        id: "lanterna",
        nome: "Lanterna",
        categoria: "ferramentas",
        icone: "LT",
        descricao: "Ilumina cavernas e áreas escuras.",
        receita: "Bateria + Vidro.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "seaglide",
        nome: "Seaglide",
        categoria: "ferramentas",
        icone: "SG",
        descricao: "Dispositivo portátil de locomoção rápida.",
        receita: "Bateria + Lubrificante + Fio de cobre + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "ferramenta-reparo",
        nome: "Ferramenta de reparo",
        categoria: "ferramentas",
        icone: "FR",
        descricao: "Repara veículos, bases e equipamentos.",
        receita: "Borracha de silicone + Enxofre de caverna + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "construtor-habitat",
        nome: "Construtor de habitat",
        categoria: "ferramentas",
        icone: "HB",
        descricao: "Constrói módulos e estruturas de base.",
        receita: "Chip de computador + Bateria + Kit de fiação.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cortador-laser",
        nome: "Cortador a laser",
        categoria: "ferramentas",
        icone: "CL",
        descricao: "Abre portas seladas de destroços e Aurora.",
        receita: "Diamante + Bateria + Titânio + Enxofre de caverna.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "canhao-propulsao",
        nome: "Canhão de propulsão",
        categoria: "ferramentas",
        icone: "CP",
        descricao: "Move objetos usando força gravitacional.",
        receita: "Bateria + Kit de fiação + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "canhao-repulsao",
        nome: "Canhão de repulsão",
        categoria: "ferramentas",
        icone: "CR",
        descricao: "Versão avançada do canhão de propulsão.",
        receita: "Canhão de propulsão + 2x Magnetita.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Canhão de propulsão."
    },
    {
        id: "rifle-estase",
        nome: "Rifle de estase",
        categoria: "ferramentas",
        icone: "RE",
        descricao: "Paralisa criaturas temporariamente.",
        receita: "Bateria + Kit de fiação + Titânio + Magnetita.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "bolsa-ar",
        nome: "Bolsa de ar",
        categoria: "ferramentas",
        icone: "BA",
        descricao: "Fornece oxigênio emergencial.",
        receita: "Borracha de silicone.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "beacon",
        nome: "Beacon",
        categoria: "ferramentas",
        icone: "BC",
        descricao: "Marca locais importantes no mundo.",
        receita: "Fita de cobre + Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "sinalizador",
        nome: "Sinalizador",
        categoria: "ferramentas",
        icone: "FL",
        descricao: "Produz luz temporária colorida.",
        receita: "Enxofre de caverna.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "extintor",
        nome: "Extintor de incêndio",
        categoria: "ferramentas",
        icone: "EX",
        descricao: "Apaga incêndios em veículos e estruturas.",
        receita: "3x Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cilindro-o2-padrao",
        nome: "Cilindro de O₂ padrão",
        categoria: "equipamentos",
        icone: "O2",
        descricao: "Aumenta a reserva de oxigênio.",
        receita: "3x Titânio.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "cilindro-o2-alta",
        nome: "Cilindro de O₂ de alta capacidade",
        categoria: "equipamentos",
        icone: "O2+",
        descricao: "Aumenta significativamente o oxigênio máximo.",
        receita: "Cilindro padrão + 4x Titânio + 2x Vidro + Prata.",
        localizacao: "Fabricador.",
        desbloqueio: "Cilindro padrão."
    },
    {
        id: "cilindro-o2-ultra",
        nome: "Cilindro de O₂ ultra capacidade",
        categoria: "equipamentos",
        icone: "O2++",
        descricao: "Oferece uma grande reserva de oxigênio.",
        receita: "Cilindro de alta capacidade + 4x Lítio + 2x Vidro + 4x Titânio.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Estação de modificação."
    },
    {
        id: "nadadeiras",
        nome: "Nadadeiras",
        categoria: "equipamentos",
        icone: "NF",
        descricao: "Aumentam a velocidade de natação.",
        receita: "2x Borracha de silicone.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "nadadeiras-ultra-glide",
        nome: "Nadadeiras ultra glide",
        categoria: "equipamentos",
        icone: "UF",
        descricao: "Versão avançada das nadadeiras.",
        receita: "Nadadeiras + Borracha de silicone + Lítio.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Nadadeiras."
    },
    {
        id: "nadadeiras-ultra-charge",
        nome: "Nadadeiras ultra charge",
        categoria: "equipamentos",
        icone: "UC",
        descricao: "Recarregam ferramentas durante a natação.",
        receita: "Nadadeiras + Kit de fiação avançado + Polianilina.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Nadadeiras."
    },
    {
        id: "rebreather",
        nome: "Rebreather",
        categoria: "equipamentos",
        icone: "RB",
        descricao: "Reduz penalidades de oxigênio em profundidade.",
        receita: "Kit de fiação + Malha de fibra.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "bussola",
        nome: "Bússola",
        categoria: "equipamentos",
        icone: "BS",
        descricao: "Mostra direção e coordenadas.",
        receita: "Chip de computador + Kit de fiação.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "traje-radiacao",
        nome: "Traje de radiação",
        categoria: "equipamentos",
        icone: "TR",
        descricao: "Protege contra radiação próxima à Aurora.",
        receita: "2x Malha de fibra + 2x Chumbo.",
        localizacao: "Fabricador.",
        desbloqueio: "Evento da Aurora."
    },
    {
        id: "traje-reforcado",
        nome: "Traje reforçado",
        categoria: "equipamentos",
        icone: "TF",
        descricao: "Reduz dano e oferece proteção térmica.",
        receita: "2x Fibra sintética + 2x Diamante.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Estação de modificação."
    },
    {
        id: "kit-medico",
        nome: "Kit de primeiros socorros",
        categoria: "consumiveis",
        icone: "HP",
        descricao: "Recupera saúde.",
        receita: "Produzido pelo fabricador médico.",
        localizacao: "Cápsula e bases.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "agua-filtrada",
        nome: "Água filtrada",
        categoria: "consumiveis",
        icone: "H2O",
        descricao: "Recupera hidratação.",
        receita: "1x Peixe-bolha.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "agua-desinfetada",
        nome: "Água desinfetada",
        categoria: "consumiveis",
        icone: "H2O+",
        descricao: "Recupera bastante hidratação.",
        receita: "Depósito de sal + Coral-tubo.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "bloco-nutritivo",
        nome: "Bloco nutritivo",
        categoria: "consumiveis",
        icone: "BN",
        descricao: "Alimento de emergência.",
        receita: "Não fabricável normalmente.",
        localizacao: "Cápsula e Aurora.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peeper-cozido",
        nome: "Peeper cozido",
        categoria: "consumiveis",
        icone: "PP",
        descricao: "Peixe preparado no fabricador.",
        receita: "1x Peeper.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peeper-curado",
        nome: "Peeper curado",
        categoria: "consumiveis",
        icone: "PC",
        descricao: "Peixe preservado com sal.",
        receita: "Peeper + Depósito de sal.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "reginald-cozido",
        nome: "Reginald cozido",
        categoria: "consumiveis",
        icone: "RG",
        descricao: "Alimento cozido de alto valor energético.",
        receita: "1x Reginald.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "reginald-curado",
        nome: "Reginald curado",
        categoria: "consumiveis",
        icone: "RC",
        descricao: "Reginald preservado com sal.",
        receita: "Reginald + Depósito de sal.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peixe-espada-cozido",
        nome: "Peixe-espada cozido",
        categoria: "consumiveis",
        icone: "PS",
        descricao: "Peixe preparado no fabricador.",
        receita: "1x Peixe-espada.",
        localizacao: "Fabricador.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "seamoth",
        nome: "Seamoth",
        categoria: "veiculos",
        icone: "SM",
        descricao: "Submersível pessoal rápido para exploração.",
        receita: "Lingote de titânio + Célula de energia + 2x Vidro + Lubrificante.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos do Seamoth."
    },
    {
        id: "prawn-suit",
        nome: "PRAWN Suit",
        categoria: "veiculos",
        icone: "PR",
        descricao: "Exotraje para exploração profunda e mineração.",
        receita: "2x Lingote de plasteel + 2x Aerogel + Vidro esmaltado + Diamante.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos do PRAWN Suit."
    },
    {
        id: "cyclops",
        nome: "Cyclops",
        categoria: "veiculos",
        icone: "CY",
        descricao: "Submarino que funciona como base móvel.",
        receita: "3x Lingote de plasteel + 3x Vidro esmaltado + Lubrificante + Kit de fiação avançado + 3x Chumbo.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear as três partes do Cyclops."
    },
    {
        id: "mobile-vehicle-bay",
        nome: "Mobile Vehicle Bay",
        categoria: "veiculos",
        icone: "MV",
        descricao: "Plataforma usada para fabricar veículos.",
        receita: "Lingote de titânio + Lubrificante + Célula de energia.",
        localizacao: "Fabricador.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "seamoth-depth-mk1",
        nome: "Seamoth Depth Module MK1",
        categoria: "modulos",
        icone: "S1",
        descricao: "Aumenta a profundidade máxima do Seamoth.",
        receita: "Lingote de plasteel.",
        localizacao: "Vehicle Upgrade Console.",
        desbloqueio: "Vehicle Upgrade Console."
    },
    {
        id: "seamoth-depth-mk2",
        nome: "Seamoth Depth Module MK2",
        categoria: "modulos",
        icone: "S2",
        descricao: "Segundo upgrade de profundidade do Seamoth.",
        receita: "Seamoth Depth Module MK1 + Lingote de plasteel + 2x Magnetita.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Seamoth Depth Module MK1."
    },
    {
        id: "seamoth-depth-mk3",
        nome: "Seamoth Depth Module MK3",
        categoria: "modulos",
        icone: "S3",
        descricao: "Upgrade máximo de profundidade do Seamoth.",
        receita: "Seamoth Depth Module MK2 + Lingote de plasteel + 3x Cianita.",
        localizacao: "Estação de modificação.",
        desbloqueio: "Seamoth Depth Module MK2."
    },
    {
        id: "seamoth-sonar",
        nome: "Seamoth Sonar",
        categoria: "modulos",
        icone: "SS",
        descricao: "Mapeia o ambiente usando pulsos sonoros.",
        receita: "Kit de fiação avançado + Magnetita.",
        localizacao: "Vehicle Upgrade Console.",
        desbloqueio: "Vehicle Upgrade Console."
    },
    {
        id: "seamoth-storage",
        nome: "Seamoth Storage Module",
        categoria: "modulos",
        icone: "ST",
        descricao: "Adiciona armazenamento ao Seamoth.",
        receita: "3x Titânio + Lítio.",
        localizacao: "Vehicle Upgrade Console.",
        desbloqueio: "Vehicle Upgrade Console."
    },
    {
        id: "seamoth-perimeter",
        nome: "Seamoth Perimeter Defense",
        categoria: "modulos",
        icone: "PD",
        descricao: "Cria uma descarga elétrica defensiva.",
        receita: "Polianilina + Kit de fiação.",
        localizacao: "Vehicle Upgrade Console.",
        desbloqueio: "Vehicle Upgrade Console."
    },
    {
        id: "prawn-depth-mk1",
        nome: "PRAWN Depth Module MK1",
        categoria: "modulos",
        icone: "P1",
        descricao: "Aumenta a profundidade máxima do PRAWN Suit.",
        receita: "Lingote de plasteel + 2x Minério de níquel.",
        localizacao: "Vehicle Upgrade Console.",
        desbloqueio: "Vehicle Upgrade Console."
    },
    {
        id: "prawn-depth-mk2",
        nome: "PRAWN Depth Module MK2",
        categoria: "modulos",
        icone: "P2",
        descricao: "Upgrade máximo de profundidade do PRAWN Suit.",
        receita: "PRAWN Depth Module MK1 + 3x Cianita.",
        localizacao: "Estação de modificação.",
        desbloqueio: "PRAWN Depth Module MK1."
    },
    {
        id: "prawn-drill-arm",
        nome: "PRAWN Drill Arm",
        categoria: "modulos",
        icone: "DA",
        descricao: "Braço usado para minerar depósitos grandes.",
        receita: "5x Diamante + 4x Titânio + Lítio.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "prawn-grapple-arm",
        nome: "PRAWN Grappling Arm",
        categoria: "modulos",
        icone: "GA",
        descricao: "Braço com gancho para mobilidade.",
        receita: "Kit de fiação avançado + Benzina + Titânio.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "prawn-propulsion-arm",
        nome: "PRAWN Propulsion Arm",
        categoria: "modulos",
        icone: "PA",
        descricao: "Braço que move objetos.",
        receita: "Canhão de propulsão + Kit de fiação avançado + 2x Titânio.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "prawn-torpedo-arm",
        nome: "PRAWN Torpedo Arm",
        categoria: "modulos",
        icone: "TA",
        descricao: "Braço lançador de torpedos.",
        receita: "Kit de fiação avançado + Borracha de silicone + 2x Titânio.",
        localizacao: "Mobile Vehicle Bay.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "cyclops-depth-mk1",
        nome: "Cyclops Depth Module MK1",
        categoria: "modulos",
        icone: "C1",
        descricao: "Aumenta a profundidade máxima do Cyclops.",
        receita: "Lingote de plasteel + 3x Rubi.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Cyclops."
    },
    {
        id: "cyclops-depth-mk2",
        nome: "Cyclops Depth Module MK2",
        categoria: "modulos",
        icone: "C2",
        descricao: "Segundo upgrade de profundidade do Cyclops.",
        receita: "Cyclops Depth Module MK1 + 3x Minério de níquel + Lingote de plasteel.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Cyclops Depth Module MK1."
    },
    {
        id: "cyclops-depth-mk3",
        nome: "Cyclops Depth Module MK3",
        categoria: "modulos",
        icone: "C3",
        descricao: "Upgrade máximo de profundidade do Cyclops.",
        receita: "Cyclops Depth Module MK2 + 3x Cianita.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Cyclops Depth Module MK2."
    },
    {
        id: "cyclops-sonar",
        nome: "Cyclops Sonar Upgrade",
        categoria: "modulos",
        icone: "CS",
        descricao: "Mapeia o ambiente ao redor do Cyclops.",
        receita: "Chip de computador + 3x Magnetita.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Cyclops."
    },
    {
        id: "cyclops-shield",
        nome: "Cyclops Shield Generator",
        categoria: "modulos",
        icone: "SH",
        descricao: "Gera um escudo de proteção temporário.",
        receita: "Kit de fiação avançado + Polianilina + Célula de energia.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Projeto encontrado na Aurora."
    },
    {
        id: "cyclops-fire-suppression",
        nome: "Cyclops Fire Suppression System",
        categoria: "modulos",
        icone: "FF",
        descricao: "Apaga incêndios automaticamente no Cyclops.",
        receita: "Aerogel + Cristal de enxofre.",
        localizacao: "Cyclops Upgrade Fabricator.",
        desbloqueio: "Projeto encontrado na Aurora."
    },
    {
        id: "fundacao",
        nome: "Fundação",
        categoria: "base",
        icone: "FD",
        descricao: "Estrutura que reforça e nivela uma base.",
        receita: "2x Titânio + 2x Chumbo.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "compartimento-i",
        nome: "Compartimento I",
        categoria: "base",
        icone: "CI",
        descricao: "Módulo básico de corredor.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "compartimento-l",
        nome: "Compartimento L",
        categoria: "base",
        icone: "CL",
        descricao: "Corredor em formato de L.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "compartimento-t",
        nome: "Compartimento T",
        categoria: "base",
        icone: "CT",
        descricao: "Corredor em formato de T.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "compartimento-x",
        nome: "Compartimento X",
        categoria: "base",
        icone: "CX",
        descricao: "Corredor em formato de cruz.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "conector-vertical",
        nome: "Conector vertical",
        categoria: "base",
        icone: "CV",
        descricao: "Conecta módulos em diferentes alturas.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "sala-multiuso",
        nome: "Sala multiuso",
        categoria: "base",
        icone: "SM",
        descricao: "Compartimento grande de base.",
        receita: "6x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear ou encontrar o projeto."
    },
    {
        id: "observatorio",
        nome: "Observatório",
        categoria: "base",
        icone: "OB",
        descricao: "Módulo com ampla visão externa.",
        receita: "2x Vidro esmaltado + Lingote de plasteel.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "moonpool",
        nome: "Moonpool",
        categoria: "base",
        icone: "MP",
        descricao: "Doca e ponto de upgrade para veículos.",
        receita: "2x Lingote de titânio + 2x Lubrificante + 2x Chumbo.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "scanner-room",
        nome: "Scanner Room",
        categoria: "base",
        icone: "SR",
        descricao: "Escaneia recursos e objetos próximos.",
        receita: "5x Titânio + 2x Cobre + Ouro + Kit de fiação.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "escotilha",
        nome: "Escotilha",
        categoria: "base",
        icone: "EH",
        descricao: "Entrada para módulos de base.",
        receita: "2x Quartzo + 2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "janela",
        nome: "Janela",
        categoria: "base",
        icone: "JN",
        descricao: "Janela de vidro para base.",
        receita: "Vidro.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "reforco",
        nome: "Reforço",
        categoria: "base",
        icone: "RF",
        descricao: "Aumenta a integridade estrutural da base.",
        receita: "3x Titânio + Lítio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "antepara",
        nome: "Antepara",
        categoria: "base",
        icone: "AP",
        descricao: "Porta interna que ajuda a conter inundações.",
        receita: "3x Titânio + Borracha de silicone.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "escada",
        nome: "Escada",
        categoria: "base",
        icone: "ES",
        descricao: "Permite movimentação vertical dentro da base.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "fabricador",
        nome: "Fabricador",
        categoria: "base",
        icone: "FB",
        descricao: "Produz ferramentas, materiais e alimentos.",
        receita: "Kit de fiação + Titânio + Ouro.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "estacao-modificacao",
        nome: "Estação de modificação",
        categoria: "base",
        icone: "EM",
        descricao: "Melhora ferramentas, equipamentos e módulos.",
        receita: "Kit de fiação + Titânio + Diamante + Chumbo.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear três fragmentos."
    },
    {
        id: "carregador-bateria",
        nome: "Carregador de bateria",
        categoria: "base",
        icone: "CB",
        descricao: "Recarrega baterias usando energia da base.",
        receita: "Kit de fiação + 2x Cobre + Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "carregador-celula",
        nome: "Carregador de célula de energia",
        categoria: "base",
        icone: "CC",
        descricao: "Recarrega células de energia.",
        receita: "Kit de fiação avançado + 2x Rubi + 2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "console-upgrade-veiculo",
        nome: "Vehicle Upgrade Console",
        categoria: "base",
        icone: "VU",
        descricao: "Permite fabricar upgrades de veículos.",
        receita: "Chip de computador + Titânio + Lítio.",
        localizacao: "Moonpool.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "armario",
        nome: "Armário",
        categoria: "base",
        icone: "AR",
        descricao: "Armazena itens coletados.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "armario-pequeno",
        nome: "Armário pequeno",
        categoria: "base",
        icone: "AP",
        descricao: "Armazenamento compacto.",
        receita: "2x Titânio.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "painel-solar",
        nome: "Painel solar",
        categoria: "energia",
        icone: "PS",
        descricao: "Gera energia da luz solar.",
        receita: "2x Quartzo + 2x Titânio + Cobre.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "biorreator",
        nome: "Biorreator",
        categoria: "energia",
        icone: "BR",
        descricao: "Gera energia usando matéria orgânica.",
        receita: "3x Titânio + Kit de fiação + Lubrificante.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "gerador-termico",
        nome: "Gerador térmico",
        categoria: "energia",
        icone: "GT",
        descricao: "Gera energia a partir do calor.",
        receita: "5x Titânio + Aerogel + 2x Magnetita.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "reator-nuclear",
        nome: "Reator nuclear",
        categoria: "energia",
        icone: "RN",
        descricao: "Fonte de energia de alta capacidade.",
        receita: "3x Chumbo + Kit de fiação avançado + 3x Lingote de plasteel.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Escanear fragmentos."
    },
    {
        id: "hastes-reator",
        nome: "Hastes do reator",
        categoria: "energia",
        icone: "HR",
        descricao: "Combustível para o reator nuclear.",
        receita: "Vidro esmaltado + Lingote de plasteel + 3x Uraninita.",
        localizacao: "Fabricador.",
        desbloqueio: "Reator nuclear."
    },
    {
        id: "transmissor-energia",
        nome: "Transmissor de energia",
        categoria: "energia",
        icone: "TE",
        descricao: "Transmite energia entre geradores e base.",
        receita: "Ouro + Kit de fiação.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peeper",
        nome: "Peeper",
        categoria: "peixes",
        icone: "PP",
        descricao: "Peixe comestível comum.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows e vários biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peixe-bolha",
        nome: "Peixe-bolha",
        categoria: "peixes",
        icone: "PB",
        descricao: "Peixe usado para produzir água filtrada.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "reginald",
        nome: "Reginald",
        categoria: "peixes",
        icone: "RG",
        descricao: "Peixe com alto valor alimentar.",
        receita: "Coletado usando as mãos.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "peixe-espada",
        nome: "Peixe-espada",
        categoria: "peixes",
        icone: "PS",
        descricao: "Peixe comestível encontrado em regiões rasas.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "hoverfish",
        nome: "Hoverfish",
        categoria: "peixes",
        icone: "HF",
        descricao: "Peixe pequeno e comestível.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "boomerang",
        nome: "Boomerang",
        categoria: "peixes",
        icone: "BM",
        descricao: "Peixe comestível de natação rápida.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows e regiões próximas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "holefish",
        nome: "Holefish",
        categoria: "peixes",
        icone: "HO",
        descricao: "Peixe comestível de formato circular.",
        receita: "Coletado usando as mãos.",
        localizacao: "Safe Shallows.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "oculus",
        nome: "Oculus",
        categoria: "peixes",
        icone: "OC",
        descricao: "Peixe raro e comestível.",
        receita: "Coletado usando as mãos.",
        localizacao: "Jellyshroom Caves.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "spadefish",
        nome: "Spadefish",
        categoria: "peixes",
        icone: "SF",
        descricao: "Peixe comestível comum.",
        receita: "Coletado usando as mãos.",
        localizacao: "Grassy Plateaus.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "garryfish",
        nome: "Garryfish",
        categoria: "peixes",
        icone: "GF",
        descricao: "Peixe comestível comum.",
        receita: "Coletado usando as mãos.",
        localizacao: "Grassy Plateaus.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "eyeye",
        nome: "Eyeye",
        categoria: "peixes",
        icone: "EE",
        descricao: "Peixe comestível encontrado em cavernas.",
        receita: "Coletado usando as mãos.",
        localizacao: "Cavernas rasas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "lantern-fruit",
        nome: "Fruta-lanterna",
        categoria: "plantas",
        icone: "FL",
        descricao: "Fruta cultivável que recupera fome e hidratação.",
        receita: "Colhida da árvore-fruta-lanterna.",
        localizacao: "Ilha Flutuante e bases.",
        desbloqueio: "Coletar ou cultivar."
    },
    {
        id: "marblemelon",
        nome: "Marblemelon",
        categoria: "plantas",
        icone: "MM",
        descricao: "Fruta cultivável que recupera fome e hidratação.",
        receita: "Colhida de planta cultivada.",
        localizacao: "Ilha Flutuante e bases.",
        desbloqueio: "Coletar ou cultivar."
    },
    {
        id: "batata-chinesa",
        nome: "Batata chinesa",
        categoria: "plantas",
        icone: "BC",
        descricao: "Alimento cultivável.",
        receita: "Colhida de planta cultivada.",
        localizacao: "Ilha Flutuante e bases.",
        desbloqueio: "Coletar ou cultivar."
    },
    {
        id: "amostra-arvore-bulbo",
        nome: "Amostra de árvore-bulbo",
        categoria: "plantas",
        icone: "AB",
        descricao: "Alimento vegetal coletável.",
        receita: "Colhida da árvore-bulbo.",
        localizacao: "Bulb Zone.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "semente-membrain",
        nome: "Semente de Membrain",
        categoria: "plantas",
        icone: "MB",
        descricao: "Planta coletável e cultivável.",
        receita: "Coletada diretamente.",
        localizacao: "Diversos biomas.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-stalker",
        nome: "Ovo de Stalker",
        categoria: "ovos",
        icone: "OS",
        descricao: "Ovo coletável que pode ser chocado em contenção alienígena.",
        receita: "Coletado diretamente.",
        localizacao: "Florestas de kelp.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-sandshark",
        nome: "Ovo de Sand Shark",
        categoria: "ovos",
        icone: "OS",
        descricao: "Ovo de criatura coletável.",
        receita: "Coletado diretamente.",
        localizacao: "Grassy Plateaus e Dunes.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-boneshark",
        nome: "Ovo de Boneshark",
        categoria: "ovos",
        icone: "OB",
        descricao: "Ovo de criatura coletável.",
        receita: "Coletado diretamente.",
        localizacao: "Underwater Islands e Crag Field.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-crabsnake",
        nome: "Ovo de Crabsnake",
        categoria: "ovos",
        icone: "OC",
        descricao: "Ovo de criatura coletável.",
        receita: "Coletado diretamente.",
        localizacao: "Jellyshroom Caves.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-crab-squid",
        nome: "Ovo de Crabsquid",
        categoria: "ovos",
        icone: "OQ",
        descricao: "Ovo de criatura coletável.",
        receita: "Coletado diretamente.",
        localizacao: "Deep Grand Reef e Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "ovo-ghost-ray",
        nome: "Ovo de Ghost Ray",
        categoria: "ovos",
        icone: "OG",
        descricao: "Ovo de criatura coletável.",
        receita: "Coletado diretamente.",
        localizacao: "Lost River.",
        desbloqueio: "Disponível desde o início."
    },
    {
        id: "tablet-roxo",
        nome: "Tablet roxo",
        categoria: "alienigenas",
        icone: "TP",
        descricao: "Chave alienígena usada para abrir instalações.",
        receita: "Cubo iônico + 2x Diamante.",
        localizacao: "Fabricador alienígena.",
        desbloqueio: "Encontrar ou desbloquear a receita."
    },
    {
        id: "tablet-laranja",
        nome: "Tablet laranja",
        categoria: "alienigenas",
        icone: "TL",
        descricao: "Chave usada em instalações alienígenas.",
        receita: "Não fabricável normalmente.",
        localizacao: "Base Degasi e instalações.",
        desbloqueio: "Exploração."
    },
    {
        id: "tablet-azul",
        nome: "Tablet azul",
        categoria: "alienigenas",
        icone: "TA",
        descricao: "Chave para instalações avançadas.",
        receita: "Cubo iônico + 2x Cianita.",
        localizacao: "Fabricador alienígena.",
        desbloqueio: "Encontrar ou desbloquear a receita."
    },
    {
        id: "cubo-ionico",
        nome: "Cubo iônico",
        categoria: "alienigenas",
        icone: "CI",
        descricao: "Fonte de energia alienígena.",
        receita: "Coletado em instalações precursoras.",
        localizacao: "Instalações alienígenas.",
        desbloqueio: "Exploração."
    },
    {
        id: "plataforma-neptune",
        nome: "Plataforma de lançamento Neptune",
        categoria: "especiais",
        icone: "NP",
        descricao: "Base da nave Neptune.",
        receita: "5x Lingote de plasteel + 2x Aerogel + 3x Cobre + 4x Chumbo.",
        localizacao: "Construtor de habitat.",
        desbloqueio: "História principal."
    },
    {
        id: "portico-neptune",
        nome: "Pórtico da Neptune",
        categoria: "especiais",
        icone: "NG",
        descricao: "Estrutura superior da nave Neptune.",
        receita: "4x Lingote de plasteel + 5x Titânio + 2x Lítio.",
        localizacao: "Plataforma Neptune.",
        desbloqueio: "Plataforma de lançamento Neptune."
    },
    {
        id: "propulsor-neptune",
        nome: "Propulsor da Neptune",
        categoria: "especiais",
        icone: "NB",
        descricao: "Módulo de propulsão da nave Neptune.",
        receita: "2x Cianita + Kit de fiação + 3x Lingote de plasteel + 2x Aerogel.",
        localizacao: "Plataforma Neptune.",
        desbloqueio: "Plataforma de lançamento Neptune."
    },
    {
        id: "reserva-combustivel-neptune",
        nome: "Reserva de combustível Neptune",
        categoria: "especiais",
        icone: "NF",
        descricao: "Tanque de combustível da nave Neptune.",
        receita: "4x Cristal de enxofre + 4x Cianita + 2x Lingote de plasteel.",
        localizacao: "Plataforma Neptune.",
        desbloqueio: "Plataforma de lançamento Neptune."
    },
    {
        id: "cockpit-neptune",
        nome: "Cockpit da Neptune",
        categoria: "especiais",
        icone: "NC",
        descricao: "Cabine de comando da nave Neptune.",
        receita: "2x Vidro esmaltado + Lingote de plasteel + Kit de fiação avançado + Chip de computador.",
        localizacao: "Plataforma Neptune.",
        desbloqueio: "Plataforma de lançamento Neptune."
    }
];