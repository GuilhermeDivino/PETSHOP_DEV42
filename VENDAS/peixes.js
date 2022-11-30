let produtoJson = [
    {
        id: 1,
        name: 'Ração Nutribetta Nutricon para Peixes 12g',
        img: 'images/racao_peixe01.jpg',
        price: [9.09, 9.09, 9.09],
        sizes: [
          '12g',
          '12g',
          '12g'
        ],
        description: 'Indicado para peixes;'
    },
    {
        id: 2,
        name: 'Alimento para Peixe Tetra Peixe TetraMin Flakes',
        img: 'images/racao_peixe02.jpg',
        price: [11.99, 11.99, 11.99],
        sizes: [
          '20g',
          '20g',
          '20g'
        ],
        description: ' Indicado para peixes tropicais;'
    },
    {
        id: 3,
        name: 'Ração Nutricon Bottom para Peixes',
        img: 'images/racao_peixe03.jpg',
        price: [12.99, 23.99, 23.99],
        sizes: [
          '50g',
          '110g',
          '110g'
        ],
        description: 'Indicado para peixes de estimação e invertebrados que habitam os fundos de aquários;'
    },
    {
        id: 4,
        name: 'Ração Nutricon Carnivoros Superfície para Peixes',
        img: 'images/racao_peixe04.jpg',
        price: [15.99, 40.99, 44.99],
        sizes: [
          '70g',
          '225g',
          '275g'
        ],
        description: 'Indicado para peixes carnívoros de estimação, de médio e grande porte em sua fase inicial;'
    },
    {
        id: 5,
        name: 'Alimento para peixe Alcon Guppy 20gr',
        img: 'images/racao_peixe05.jpg',
        price: [19.99, 19.99, 19.99],
        sizes: [
          '20g',
          '20g',
          '20g'
        ],
        description: 'Indicada para peixes de pequeno porte;'
    },
    {
        id: 6,
        name: 'Alimento para Peixe Alcon Gold Neon 30gr',
        img: 'images/racao_peixe06.jpg',
        price: [15.90, 15.90, 15.90],
        sizes: [
          '30g',
          '30g',
          '30g'
        ],
        description: 'Indicado para peixes de pequeno porte;'
    },
    {
      id: 7,
      name: 'Substrato Para Aquários Aqua Pedras Cascalho de Rio',
      img: 'images/decoracao_peixe01.jpg',
      price: [3.49, 19.99, 19.99],
      sizes: [
        '1kg',
        '5kg',
        '5kg'
      ],
      description: 'Todo aquário precisa de uma base para que a vida dos peixes e plantas tenha qualidade;'
  },
  {
      id: 8,
      name: 'Decoração Mbreda BlackRock Rochas Para Aquário',
      img: 'images/decoracao_peixe02.jpg',
      price: [18.99, 19.99, 41.99],
      sizes: [
        'P',
        'M',
        'G'
      ],
      description: ' Complementa o visual do seu aquário, deixando-o muito mais bonito;'
  },
  {
      id: 9,
      name: 'Decoração Lester Planta Mini para Aquários',
      img: 'images/decoracao_peixe03.jpg',
      price: [5.99, 5.99, 5.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Seu aquário mais encantador e enriquecido de beleza;'
  },
  {
      id: 10,
      name: 'Enfeite Lester Barril Mini',
      img: 'images/decoracao_peixe04.jpg',
      price: [20.99, 20.99, 20.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Produto fabricado em resina de alta resistência;'
  },
  {
      id: 11,
      name: 'Decoração Lester Cama do Beta para Aquários',
      img: 'images/decoracao_peixe05.jpg',
      price: [24.99, 24.99, 24.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Seu aquário mais encantador e enriquecido de beleza;'
  },
  {
      id: 12,
      name: 'Decoração Soma Peixes Ruína Grega',
      img: 'images/decoracao_peixe06.jpg',
      price: [19.99, 19.99, 19.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Proporciona um ambiente bonito em seu aquário;'
    },
    {
      id: 13,
      name: 'Kit Meu Primeiro Aquário 20L Aquaterrário',
      img: 'images/aquario_peixe01.jpg',
      price: [259.99, 259.99, 259.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Aquário retangular com sump traseiro nano 20;'
  },
  {
      id: 14,
      name: 'Aquário de Vidro Retangular Teruo Yamamoto para Peixes',
      img: 'images/aquario_peixe02.jpg',
      price: [78.99, 188.99, 734.99],
      sizes: [
        'P',
        'M',
        'G'
      ],
      description: 'Pode ser usado para peixes de água salgada e doce, répteis e tartarugas;'
  },
  {
      id: 15,
      name: 'Aquário Beteira Design para Peixes Casinha Decorada',
      img: 'images/aquario_peixe03.jpg',
      price: [35.99, 35.99, 35.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Bonito e ideial para decoração; '
  },
  {
      id: 16,
      name: 'Aquário Beteira Teruo Yamamoto 1l',
      img: 'images/aquario_peixe04.jpg',
      price: [26.99, 26.99, 26.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Possui o tamanho ideal para o peixe betta;'
  },
  {
      id: 17,
      name: 'Aquário Boyu Curvo Preto EC-600 66L',
      img: 'images/aquario_peixe05.jpg',
      price: [999.99, 999.99, 999.99],
      sizes: [
        '110V',
        '220V',
        '220V'
      ],
      description: 'Aquário de água doce e marinha;'
  },
  {
      id: 18,
      name: 'Aquário Beteira Design Tubular Decorada',
      img: 'images/aquario_peixe06.jpg',
      price: [35.99, 35.99, 35.99],
      sizes: [
        '--',
        '--',
        '--'
      ],
      description: 'Ofereça o tradicional aquário para seu animalzinho;'
  }
];