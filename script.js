// Banco de dados das sementes
const seedsDatabase = [
  {
    id: 1,
    nomeVulgar: "Abiu",
    nomeCientifico: "Pouteria caimito",
    familia: "Sapotaceae",
    dataColeta: "24/08/2025",
    local: "Jundiaí",
    utilidades: {
      alimentacao: "fruto de polpa doce, consumido in natura ou em sucos e sorvetes.",
      nutricional: "rico em vitaminas e minerais, fonte de energia.",
      "medicinal popular": "usado contra anemia, tosse e problemas respiratórios.",
      economico: "cultivado em pomares e quintais para consumo e venda.",
    },
    image: "images/abiu.jpg",
  },
  {
    id: 2,
    nomeVulgar: "Fava-arara",
    nomeCientifico: "Dipteryx odorata",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      Aromatizante: "semente rica em cumarina, usada na perfumaria.",
      Medicinal: "tradicionalmente empregada contra tosses, gripes e bronquites.",
      Madeira: "muito densa e durável, usada em construções e móveis.",
      "Uso Cultural": "sementes utilizadas em artesanato e rituais tradicionais",
    },
    image: "images/fava_arara.jpg",
  },
  {
    id: 3,
    nomeVulgar: "Tento-vermelho",
    nomeCientifico: "Campsiandra laurifolia",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      Artesanato: "sementes vermelhas usadas em biojoias e enfeites.",
      Ornamental: "muito apreciado pela beleza e brilho das sementes.",
      Ecológico: "espécie nativa importante na recomposição florestal.",
    },
    image: "images/tento-vermelho.jpg",
    observacao: "semente tóxica, não comestível."
  },
  {
    id: 4,
    nomeVulgar: "Mututi",
    nomeCientifico: "Peltogyne paniculata",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      madeira: "madeira nobre, utilizada em pisos, móveis de luxo e construção civil.",
      ornamental: "madeira de cor roxa intensa, muito valorizada no design.",
      resistencia: "madeira pesada e durável, indicada para obras externas.",
      ecologico: "importante na recuperação de áreas degradadas.",
    },
    image: "images/mututi.jpg",
  },
  {
    id: 5,
    nomeVulgar: "Buriti",
    nomeCientifico: "Mauritia flexuosa",
    familia: "Arecaceae",
    dataColeta: "24/08/2025",
    local: "Santa Izabel-PA",
    utilidades: {
      alimentacao: "polpa usada em sucos, doces, sorvetes e vinho.",
      cosmetico: "óleo do fruto rico em vitamina A e carotenoides.",
      artesanal: "folhas e talos usados na confecção de peças artesanais (miriti).",
      ambiental: "espécie chave em áreas alagadas, ajuda na manutenção da fauna.",
    },
    image: "images/buriti.jpg",
  },
  {
    id: 6,
    nomeVulgar: "Castanha-do-Pará",
    nomeCientifico: "Bertholletia excelsa",
    familia: "Lecythidaceae",
    dataColeta: "24/08/2025",
    local: "Santa Izabel do Pará",
    utilidades: {
      alimentacao: "amêndoa comestível, rica em óleos e selênio.",
      cosmetico: "óleo utilizado na indústria de cosméticos e fármacos.",
      ecologico: "alimento essencial para a fauna amazônica (cutias, araras).",
      economico: "produto extrativista de grande importância na Amazônia.",
    },
    image: "images/castanha-para.jpg",
  },
  {
    id: 7,
    nomeVulgar: "Jutaí-café (Jatobá)",
    nomeCientifico: "Hymenaea courbaril",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      alimentacao: "polpa farinácea adocicada, nutritiva.",
      madeira: "extremamente dura e resistente, usada em construções pesadas e pisos.",
      medicinal: "partes da planta utilizadas tradicionalmente contra problemas respiratórios e inflamações.",
      economico: "fruto aproveitado na culinária regional (farinha, bebidas).",
      ecologico: "importante para a fauna, frutos consumidos por animais.",
    },
    image: "images/jatoba.jpg",
  },
  {
    id: 8,
    nomeVulgar: "Tachi-branco",
    nomeCientifico: "Tachigali alba",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      madeira: "leve, usada em construção temporária, caixotaria e movelaria simples.",
      ambiental: "espécie pioneira, útil em reflorestamentos.",
      ecologico: "sementes aladas dispersas pelo vento auxiliam na regeneração natural.",
      ornamental: "porte elegante, presença em projetos paisagísticos.",
    },
    image: "images/tachi-branco.jpg",
  },
  {
    id: 9,
    nomeVulgar: "Ipê-rosa",
    nomeCientifico: "Handroanthus impetiginosus",
    familia: "Bignoniaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      madeira: "muito resistente, usada em construção pesada e mobiliário.",
      ornamental: "árvore de floração exuberante, bastante cultivada em praças e avenidas.",
      "medicinal popular": "casca usada em chás (pau-d’arco) para fins anti-inflamatórios e imunoestimulantes.",
      ecologico: "flores atraem polinizadores, especialmente abelhas.",
    },
    image: "images/ipe-rosa.jpg",
  },
  {
    id: 10,
    nomeVulgar: "Sapucaia",
    nomeCientifico: "Lecythis pisonis",
    familia: "Lecythidaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí",
    utilidades: {
      alimentacao: "sementes oleaginosas, comestíveis (semelhantes à castanha).",
      madeira: "dura e resistente, usada em construções e móveis.",
      ornamental: "árvore de grande porte e valor paisagístico.",
      ecologico: "frutos servem de alimento para fauna.",
    },
    image: "images/sapucaia.jpg",
  },
  {
    id: 11,
    nomeVulgar: "Tamanqueira",
    nomeCientifico: "Aegiphila sellowiana",
    familia: "Lamiaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí – PA",
    utilidades: {
      madeira: "resistente, usada tradicionalmente para fazer tamancos.",
      ornamental: "árvore útil em paisagismo urbano e rural.",
      ecologico: "aplicável em recuperação de áreas degradadas.",
    },
    image: "images/tamanqueira.jpg",
  },
  {
    id: 12,
    nomeVulgar: "Sucupira",
    nomeCientifico: "Pterodon emarginatus Vogel",
    familia: "Fabaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí – PA",
    utilidades: {
      medicinal: "óleo da semente com propriedades anti-inflamatórias, usado para tratar artrite, reumatismo e dores.",
      cosmetico: "presente em produtos naturais terapêuticos.",
      madeira: "resistente, usada em construções e móveis.",
      artesanal: "sementes aproveitadas em biojoias e enfeites.",
    },
    image: "images/sucupira.jpg",
  },
  {
    id: 13,
    nomeVulgar: "Maranhoto",
    nomeCientifico: "Colubrina glandulosa",
    familia: "Rhamnaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí – PA",
    utilidades: {
      medicinal: "flavonoides com ação anti-inflamatória e antioxidante.",
      apicola: "atrativa para abelhas (produção de mel).",
      ecologico: "usada em projetos de reflorestamento e recuperação ambiental.",
      artesanal: "sementes com potencial decorativo.",
    },
    image: "images/maranhoto.jpg",
  },
  {
    id: 14,
    nomeVulgar: "Mirindiba-doce",
    nomeCientifico: "Glycydendron amazonicum",
    familia: "Euphorbiaceae",
    dataColeta: "23/07/2024",
    local: "Tucuruí – PA",
    utilidades: {
      madeira: "muito dura, usada em construções, móveis, lenha e carvão vegetal.",
      medicinal: "folhas utilizadas na medicina tradicional como chá.",
      ambiental: "boa para reflorestamento e atração de fauna.",
      ornamental: "aplicável em arborização.",
    },
    image: "images/mirindiba.jpg",
  },
  {
    id: 15,
    nomeVulgar: "Açaí",
    nomeCientifico: "Euterpe oleracea",
    familia: "Arecaceae",
    dataColeta: "24/08/2025",
    local: "Jundiaí – PA",
    utilidades: {
      alimentacao: "polpa usada em sucos, “açaí na tigela”, doces, geleias e licores.",
      cosmetico: "óleo da semente usado em cremes e shampoo.",
      artesanal: "sementes (caroços) transformadas em biojoias e objetos decorativos.",
      construcao: "estipe utilizado em construções rústicas, palha para cobertura.",
      medicinal: "propriedades antioxidantes e anti-inflamatórias identificadas em estudos.",
    },
    image: "images/acai.jpg",
  },
]

let filteredSeeds = [...seedsDatabase]

// Inicializar a aplicação
document.addEventListener("DOMContentLoaded", () => {
  displaySeeds(filteredSeeds)
  updateResultsCount(filteredSeeds.length)
})

// Exibir sementes na grade
function displaySeeds(seeds) {
  const seedsGrid = document.getElementById("seedsGrid")

  if (seeds.length === 0) {
    seedsGrid.innerHTML = `
            <div class="no-results">
                <h3>🔍 Nenhuma semente encontrada</h3>
                <p>Tente ajustar sua busca ou filtros</p>
            </div>
        `
    return
  }

  seedsGrid.innerHTML = seeds
    .map(
      (seed) => `
        <div class="seed-card" onclick="openModal(${seed.id})">
            <div class="seed-image">
                ${seed.image ? `<img src="${seed.image}" alt="${seed.nomeVulgar}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">` : ""}
                <div class="fallback-emoji" ${seed.image ? 'style="display: none;"' : ""}>🌱</div>
            </div>
            <div class="seed-info">
                ${seed.nomeVulgar ? `<h3 class="seed-name">${seed.nomeVulgar}</h3>` : ""}
                ${seed.nomeCientifico ? `<p class="seed-scientific">${seed.nomeCientifico}</p>` : ""}
                ${seed.categoria ? `<span class="seed-category">${seed.categoria}</span>` : ""}
            </div>
        </div>
    `,
    )
    .join("")
}

// Funcionalidade de busca
function searchSeeds() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const familyFilter = document.getElementById("familyFilter").value

  filteredSeeds = seedsDatabase.filter((seed) => {
    const matchesSearch =
      searchTerm === "" ||
      (seed.nomeVulgar && seed.nomeVulgar.toLowerCase().includes(searchTerm)) ||
      (seed.nomeCientifico && seed.nomeCientifico.toLowerCase().includes(searchTerm)) ||
      (seed.familia && seed.familia.toLowerCase().includes(searchTerm)) ||
      (seed.categoria && seed.categoria.toLowerCase().includes(searchTerm)) ||
      (seed.local && seed.local.toLowerCase().includes(searchTerm)) ||
      (seed.utilidades &&
        Object.values(seed.utilidades).some((util) => util && util.toLowerCase().includes(searchTerm)))

    const matchesFamily = familyFilter === "" || seed.familia === familyFilter

    return matchesSearch && matchesFamily
  })

  displaySeeds(filteredSeeds)
  updateResultsCount(filteredSeeds.length)
}

// Busca em tempo real
document.getElementById("searchInput").addEventListener("input", searchSeeds)

// Filtro por família em tempo real
document.getElementById("familyFilter").addEventListener("change", searchSeeds)

// Atualizar contador de resultados
function updateResultsCount(count) {
  const resultsCount = document.getElementById("resultsCount")
  if (count === seedsDatabase.length) {
    resultsCount.textContent = "Mostrando todas as sementes"
  } else {
    resultsCount.textContent = `Mostrando ${count} de ${seedsDatabase.length} sementes`
  }
}


// Abrir modal com detalhes da semente
function openModal(seedId) {
  const seed = seedsDatabase.find((s) => s.id === seedId)
  if (!seed) return

  const modalBody = document.getElementById("modalBody")

  // Construir conteúdo do modal condicionalmente
  let modalContent = '<div class="modal-header">'

  // Seção da imagem
  if (seed.image) {
    modalContent += `
      <div class="modal-image-large">
        <img src="${escapeHtml(seed.image)}" alt="${escapeHtml(seed.nomeVulgar || "Semente")}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div class="fallback-emoji" style="display: none;">🌱</div>
      </div>`
  }

  // Título e informações básicas
  if (seed.nomeVulgar) {
    modalContent += `<h2 class="modal-title">${escapeHtml(seed.nomeVulgar)}</h2>`
  }

  if (seed.nomeCientifico) {
    modalContent += `<p class="modal-scientific"><strong>Nome científico:</strong> ${escapeHtml(seed.nomeCientifico)}</p>`
  }

  if (seed.familia) {
    modalContent += `<p class="modal-family"><strong>Família:</strong> ${escapeHtml(seed.familia)}</p>`
  }

  if (seed.categoria) {
    modalContent += `<span class="modal-category">${escapeHtml(seed.categoria)}</span>`
  }

  modalContent += "</div>"

  // Seção de informações de coleta
  if (seed.dataColeta || seed.local) {
    modalContent += '<div class="modal-section"><h3>Informações de Coleta</h3>'

    if (seed.dataColeta) {
      modalContent += `<p><strong>Data de coleta:</strong> ${escapeHtml(seed.dataColeta)}</p>`
    }

    if (seed.local) {
      modalContent += `<p><strong>Local:</strong> ${escapeHtml(seed.local)}</p>`
    }

    modalContent += "</div>"
  }

  // Seção de utilidades
  if (seed.utilidades && Object.keys(seed.utilidades).length > 0) {
    modalContent += '<div class="modal-section"><h3>Utilidades</h3><div class="utilidades-grid">'

    const getEmojiForUtility = (key) => {
      const normalizedKey = key
        .toLowerCase()
        .replace(/\s+/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

      const emojiMap = {
        alimentacao: "🍽️",
        nutricional: "🥗",
        medicinal: "🌿",
        medicinalpopular: "🌿",
        economico: "💰",
        aromatizante: "🌸",
        madeira: "🪵",
        usocultural: "🎭",
        cultural: "🎭",
        industrial: "🏭",
        ornamental: "🌺",
        decorativo: "🌺",
        textil: "🧵",
        cosmetico: "💄",
        religioso: "🙏",
        ritual: "🕯️",
        artesanal: "🎨",
        artesanato: "🎨",
      }
      return emojiMap[normalizedKey] || "🌱"
    }
    // Seção de observações (opcional)

    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    Object.entries(seed.utilidades).forEach(([key, value]) => {
      if (value) {
        const processedValue = processUtilityText(value)
        const processedKey = escapeHtml(capitalizeFirst(key))
        modalContent += `
          <div class="utilidade-item">
            <h4>${getEmojiForUtility(key)} ${processedKey}</h4>
            <p>${processedValue}</p>
          </div>`
      }
    })


    modalContent += "</div></div>"
  }
  if (seed.observacao) {
    modalContent += `
    <div class="modal-section">
      <h3>Observação</h3>
      <p>${escapeHtml(seed.observacao)}</p>
    </div>
  `
  }

  modalBody.innerHTML = modalContent

  document.getElementById("seedModal").style.display = "block"
  document.body.style.overflow = "hidden"
}



// Fechar modal
function closeModal() {
  document.getElementById("seedModal").style.display = "none"
  document.body.style.overflow = "auto"
}

// Fechar modal ao clicar fora
window.onclick = (event) => {
  const modal = document.getElementById("seedModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Fechar modal com tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// Adicionar rolagem suave para melhor UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

function escapeHtml(text) {
  if (!text) return ""
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

function processUtilityText(text) {
  if (!text) return ""
  return escapeHtml(text.toString().trim())
}
// Função para ordenar alfabeticamente pelo nome vulgar
function sortSeedsAlphabetically(seeds) {
  return seeds.slice().sort((a, b) =>
    a.nomeVulgar.localeCompare(b.nomeVulgar, "pt-BR", { sensitivity: "base" })
  )
}

// Inicializar a aplicação
document.addEventListener("DOMContentLoaded", () => {
  filteredSeeds = sortSeedsAlphabetically(filteredSeeds) // já entra ordenado
  displaySeeds(filteredSeeds)
  updateResultsCount(filteredSeeds.length)
})

// Exibir sementes na grade
function displaySeeds(seeds) {
  const seedsGrid = document.getElementById("seedsGrid")

  if (seeds.length === 0) {
    seedsGrid.innerHTML = `
            <div class="no-results">
                <h3>🔍 Nenhuma semente encontrada</h3>
                <p>Tente ajustar sua busca ou filtros</p>
            </div>
        `
    return
  }

  // sempre garantir ordenação antes de exibir
  const sortedSeeds = sortSeedsAlphabetically(seeds)

  seedsGrid.innerHTML = sortedSeeds
    .map(
      (seed) => `
        <div class="seed-card" onclick="openModal(${seed.id})">
            <div class="seed-image">
                ${seed.image ? `<img src="${seed.image}" alt="${seed.nomeVulgar}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">` : ""}
                <div class="fallback-emoji" ${seed.image ? 'style="display: none;"' : ""}>🌱</div>
            </div>
            <div class="seed-info">
                ${seed.nomeVulgar ? `<h3 class="seed-name">${seed.nomeVulgar}</h3>` : ""}
                ${seed.nomeCientifico ? `<p class="seed-scientific">${seed.nomeCientifico}</p>` : ""}
                ${seed.categoria ? `<span class="seed-category">${seed.categoria}</span>` : ""}
            </div>
        </div>
    `,
    )
    .join("")
}

