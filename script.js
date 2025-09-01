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
      (seed.nomeCientifico && seed.nomeCientifico.toLowerCase().includes(searchTerm))

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
        adstringente: "🍃",
        cicatrizacao: "❤️‍🩹",
        construcao: "🧱",
        repelente: "🦟",
        apicola: "🐝",
        resistencia: "💪",
        fitoterapico: "🩹",
        antioxidante: "🥦",



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
  // Funções auxiliares
  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function sortSeedsAlphabetically(seeds) {
    return seeds.slice().sort((a, b) => a.nomeVulgar.localeCompare(b.nomeVulgar, "pt-BR", { sensitivity: "base" }));
  }
}

