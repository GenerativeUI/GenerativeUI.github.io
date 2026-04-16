// Drug Database - Comprehensive list of oncology drugs approved 2020-2024
const drugDatabase = [
    {
        "name": "Bizengri",
        "generic": "zenocutuzumab-zbco",
        "company": "Merus",
        "indication": "Non-small cell lung cancer and pancreatic adenocarcinoma",
        "year": "2024",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lung",
    },
    {
        "name": "Ziihera",
        "generic": "zanidatamab-hrii",
        "company": "Jazz Pharmaceuticals",
        "indication": "Biliary tract cancer",
        "year": "2024",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Revuforj",
        "generic": "revumenib",
        "company": "Syndax",
        "indication": "Acute leukemia",
        "year": "2024",
        "mechanism": "Menin inhibitor",
        "category": "other",
        "indicationType": "leukemia",
    },
    {
        "name": "Vyloy",
        "generic": "zolbetuximab-clzb",
        "company": "Astellas",
        "indication": "Gastric or gastroesophageal junction cancer",
        "year": "2024",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Itovebi",
        "generic": "inavolisib",
        "company": "Genentech",
        "indication": "Metastatic breast cancer",
        "year": "2024",
        "mechanism": "PI3K inhibitor",
        "category": "kinase",
        "indicationType": "breast",
    },
    {
        "name": "Lazcluze",
        "generic": "lazertinib",
        "company": "Janssen Biotech",
        "indication": "Non-small cell lung cancer",
        "year": "2024",
        "mechanism": "EGFR inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Voranigo",
        "generic": "vorasidenib",
        "company": "Servier",
        "indication": "Grade 2 astrocytoma or oligodendroglioma",
        "year": "2024",
        "mechanism": "IDH1 and IDH2 inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Rytelo",
        "generic": "imetelstat",
        "company": "Geron Corp",
        "indication": "Myelodysplastic syndromes",
        "year": "2024",
        "mechanism": "Telomerase inhibitor",
        "category": "other",
        "indicationType": "leukemia",
    },
    {
        "name": "Imdelltra",
        "generic": "tarlatamab-dlle",
        "company": "Amgen",
        "indication": "Extensive-stage small cell lung cancer",
        "year": "2024",
        "mechanism": "T-cell engager",
        "category": "immunotherapy",
        "indicationType": "lung",
    },
    {
        "name": "Anktiva",
        "generic": "nogapendekin alfa inbakicept-pmln",
        "company": "ImmunityBio",
        "indication": "Bladder cancer",
        "year": "2024",
        "mechanism": "IL-15 receptor agonist",
        "category": "immunotherapy",
        "indicationType": "other",
    },
    {
        "name": "Tevimbra",
        "generic": "tislelizumab-jsgr",
        "company": "BeiGene",
        "indication": "Esophageal squamous cell carcinoma",
        "year": "2024",
        "mechanism": "PD-1 blocking antibody",
        "category": "immunotherapy",
        "indicationType": "other",
    },

    {
        "name": "Ogsiveo",
        "generic": "nirogacestat",
        "company": "SpringWorks Therapeutics",
        "indication": "Desmoid tumors",
        "year": "2023",
        "mechanism": "Gamma-secretase inhibitor",
        "category": "other",
        "indicationType": "other",
    },
    {
        "name": "Truqap",
        "generic": "capivasertib",
        "company": "AstraZeneca",
        "indication": "Breast cancer",
        "year": "2023",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "breast",
    },
    {
        "name": "Augtyro",
        "generic": "repotrectinib",
        "company": "Bristol Myers",
        "indication": "Non-small cell lung cancer",
        "year": "2023",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Fruzaqla",
        "generic": "fruquintinib",
        "company": "Takeda Pharmaceuticals",
        "indication": "Colorectal cancer",
        "year": "2023",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "colorectal",
    },
    {
        "name": "Loqtorzi",
        "generic": "toripalimab-tpzi",
        "company": "Coherus and Junshi Biosciences",
        "indication": "Nasopharyngeal carcinoma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Aphexda",
        "generic": "motixafortide",
        "company": "BioLineRx",
        "indication": "Multiple myeloma",
        "year": "2023",
        "mechanism": "Peptide inhibitor of CXCR4",
        "category": "other",
        "indicationType": "myeloma",
    },
    {
        "name": "Elrexfio",
        "generic": "elranatamab-bcmm",
        "company": "Pfizer",
        "indication": "Multiple myeloma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "myeloma",
    },
    {
        "name": "Talvey",
        "generic": "talquetamab-tgvs",
        "company": "Janssen Pharmaceutical",
        "indication": "Multiple myeloma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "myeloma",
    },
    {
        "name": "Vanflyta",
        "generic": "quizartinib",
        "company": "Daiichi Sankyo",
        "indication": "Acute myeloid leukemia",
        "year": "2023",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "leukemia",
    },
    {
        "name": "Columvi",
        "generic": "glofitamab-gxbm",
        "company": "Genentech",
        "indication": "Large B-cell lymphoma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lymphoma",
    },
    {
        "name": "Epkinly",
        "generic": "epcoritamab-bysp",
        "company": "Genmab",
        "indication": "Large B-cell lymphoma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lymphoma",
    },
    {
        "name": "Zynyz",
        "generic": "retifanlimab-dlwr",
        "company": "Incyte Corporation",
        "indication": "Merkel cell carcinoma",
        "year": "2023",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Orserdu",
        "generic": "elacestrant",
        "company": "Stemline Therapeutics",
        "indication": "Breast cancer",
        "year": "2023",
        "mechanism": "Antiestrogen",
        "category": "other",
        "indicationType": "breast",
    },
    {
        "name": "Jaypirca",
        "generic": "pirtobrutinib",
        "company": "Lilly",
        "indication": "Mantle cell lymphoma",
        "year": "2023",
        "mechanism": "BTK Inhibitor",
        "category": "kinase",
        "indicationType": "lymphoma",
    },
    {
        "name": "Lunsumio",
        "generic": "mosunetuzumab-axgb",
        "company": "Genentech",
        "indication": "Follicular lymphoma",
        "year": "2022",
        "mechanism": "Monoclonal (bispecific)",
        "category": "monoclonal",
        "indicationType": "lymphoma",
    },
    {
        "name": "Krazati",
        "generic": "adagrasib",
        "company": "Mirati Therapeutics",
        "indication": "Non-small cell lung cancer",
        "year": "2022",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Rezlidhia",
        "generic": "olutasidenib",
        "company": "Forma Therapeutics",
        "indication": "Acute myeloid leukemia",
        "year": "2022",
        "mechanism": "IDH inhibitor",
        "category": "kinase",
        "indicationType": "leukemia",
    },
    {
        "name": "Elahere",
        "generic": "mirvetuximab soravtansine-gynx",
        "company": "ImmunoGen",
        "indication": "Ovarian cancer",
        "year": "2022",
        "mechanism": "Antibody conjugate",
        "category": "adc",
        "indicationType": "other",
    },
    {
        "name": "Tecvayli",
        "generic": "teclistamab-cqyv",
        "company": "Janssen Pharmaceuticals",
        "indication": "Multiple myeloma",
        "year": "2022",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "myeloma",
    },
    {
        "name": "Imjudo",
        "generic": "tremelimumab",
        "company": "AstraZeneca",
        "indication": "Liver cancer",
        "year": "2022",
        "mechanism": "Monoclonal antibody (CTLA-4 inhibitor)",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Lytgobi",
        "generic": "futibatinib",
        "company": "Taiho",
        "indication": "Intrahepatic cholangiocarcinoma",
        "year": "2022",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Pluvicto",
        "generic": "lutetium 177Lu vipivotide tetraxetan",
        "company": "Novartis",
        "indication": "Prostate cancer",
        "year": "2022",
        "mechanism": "Radio-immunotherapy conjugate",
        "category": "other",
        "indicationType": "prostate",
    },
    {
        "name": "Opdualag",
        "generic": "nivolumab/relatlimab",
        "company": "Bristol Myers Squibb",
        "indication": "Melanoma",
        "year": "2022",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Vonjo",
        "generic": "pacritinib",
        "company": "CTI Biopharma",
        "indication": "Myelofibrosis",
        "year": "2022",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "leukemia",
    },
    {
        "name": "Kimmtrak",
        "generic": "tebentafusp-tebn",
        "company": "Immunocore",
        "indication": "Uveal melanoma",
        "year": "2022",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Scemblix",
        "generic": "asciminib",
        "company": "Novartis",
        "indication": "Leukemia",
        "year": "2021",
        "mechanism": "Kinase inhibitor (BCR-ABL allosteric inhibitor)",
        "category": "kinase",
        "indicationType": "leukemia",
    },
    {
        "name": "Tivdak",
        "generic": "tisotumab vedotin-tftv",
        "company": "Seagen",
        "indication": "Cervical cancer",
        "year": "2021",
        "mechanism": "Antibody drug conjugate",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Exkivity",
        "generic": "mobocertinib",
        "company": "Takeda",
        "indication": "Lung cancer",
        "year": "2021",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Truseltiq",
        "generic": "infigratinib",
        "company": "QED Therapeutics",
        "indication": "Cholangiocarcinoma",
        "year": "2021",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",  
    },
    {
        "name": "Rybrevant",
        "generic": "amivantamab-vmjw",
        "company": "Janssen Pharmaceutical",
        "indication": "Non-small cell lung cancer",
        "year": "2021",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lung",
    },
    {
        "name": "Lumakras",
        "generic": "sotorasib",
        "company": "Amgen",
        "indication": "Non-small cell lung cancer",
        "year": "2021",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Zynlonta",
        "generic": "loncastuximab tesirine-lpyl",
        "company": "ADC Therapeutics",
        "indication": "Lymphoma",
        "year": "2021",
        "mechanism": "Antibody conjugate",
        "category": "adc",
        "indicationType": "lymphoma",
    },
    {
        "name": "Jemperli",
        "generic": "dostarlimab-gxly",
        "company": "GlaxoSmithKline",
        "indication": "Endometrial cancer",
        "year": "2021",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Fotivda",
        "generic": "tivozanib",
        "company": "Aveo Pharmaceuticals",
        "indication": "Renal cell carcinoma",
        "year": "2021",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Pepaxto",
        "generic": "melphalan flufenamide",
        "company": "Oncopeptides AB",
        "indication": "Myeloma",
        "year": "2021",
        "mechanism": "Alkylating agent",
        "category": "other",
        "indicationType": "myeloma",
    },
    {
        "name": "Ukoniq",
        "generic": "umbralisib",
        "company": "TG Therapeutics",
        "indication": "Lymphoma",
        "year": "2021",
        "mechanism": "PI3K inhibitor",
        "category": "kinase",
        "indicationType": "lymphoma",
    },
    {
        "name": "Tepmetko",
        "generic": "tepotinib",
        "company": "EMD Serono (Merck)",
        "indication": "Non-small cell lung cancer",
        "year": "2021",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Ayvakit",
        "generic": "avapritinib",
        "company": "Blueprint Medicines",
        "indication": "Gastrointestinal stromal tumor",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Tazverik",
        "generic": "tazemetostat",
        "company": "Epizyme",
        "indication": "Epithelioid sarcoma",
        "year": "2020",
        "mechanism": "Enzyme inhibitor",
        "category": "other",
        "indicationType": "other",
    },
    {
        "name": "Sarclisa",
        "generic": "isatuximab",
        "company": "Sanofi",
        "indication": "Multiple myeloma",
        "year": "2020",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "myeloma",
    },
    {
        "name": "Tukysa",
        "generic": "tucatinib",
        "company": "Cascadian Therapeutics / Seagen",
        "indication": "Breast cancer",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "breast",
    },
    {
        "name": "Pemazyre",
        "generic": "pemigatinib",
        "company": "Incyte",
        "indication": "Cholangiocarcinoma",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Trodelvy",
        "generic": "sacituzumab govitecan-hziy",
        "company": "Immunomedics / Gilead",
        "indication": "Breast cancer",
        "year": "2020",
        "mechanism": "Topoisomerase inhibitor (ADC)",
        "category": "adc",
        "indicationType": "breast",
    },
    {
        "name": "Tabrecta",
        "generic": "capmatinib",
        "company": "Novartis",
        "indication": "Non-small cell lung cancer",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Retevmo",
        "generic": "selpercatinib",
        "company": "Eli Lilly",
        "indication": "Thyroid cancer, lung cancer",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Qinlock",
        "generic": "ripretinib",
        "company": "Deciphera Pharmaceuticals",
        "indication": "Gastrointestinal stromal tumors",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "other",
    },
    {
        "name": "Zepzelca",
        "generic": "lurbinectedin",
        "company": "Jazz / PharmaMar",
        "indication": "Small-cell lung cancer",
        "year": "2020",
        "mechanism": "Oncogenic transcription inhibitor",
        "category": "other",
        "indicationType": "lung",
    },
    {
        "name": "Gavreto",
        "generic": "pralsetinib",
        "company": "Blueprint Medicines",
        "indication": "Non-small cell lung cancer",
        "year": "2020",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Blenrep",
        "generic": "belantamab mafodotin-blmf",
        "company": "GlaxoSmithKline",
        "indication": "Multiple myeloma",
        "year": "2020",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "myeloma",
    },
    {
        "name": "Monjuvi",
        "generic": "tafasitamab-cxix",
        "company": "MorphoSys / Incyte (commercialized)",
        "indication": "Diffuse large B-cell lymphoma",
        "year": "2020",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lymphoma",
    },
    {
        "name": "Danyelza",
        "generic": "naxitamab",
        "company": "Y-mAbs Therapeutics",
        "indication": "Neuroblastoma",
        "year": "2020",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "other",
    },
    {
        "name": "Tecartus",
        "generic": "brexucabtagene autoleucel",
        "company": "Kite Pharma",
        "indication": "Mantle cell lymphoma",
        "year": "2020",
        "mechanism": "CAR-T therapy",
        "category": "car-t",
        "indicationType": "lymphoma",
    },
    {
        "name": "Margenza",
        "generic": "margetuximab",
        "company": "Macrogenics",
        "indication": "HER2+ breast cancer",
        "year": "2020",
        "mechanism": "Monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "breast",
    },
    {
        "name": "Orgovyx",
        "generic": "relugolix",
        "company": "Myovant Sciences",
        "indication": "Prostate cancer",
        "year": "2020",
        "mechanism": "Hormone suppressant",
        "category": "other",
        "indicationType": "prostate",
    },
    {
        "name": "Monjuvi (label expansion / new indication)",
        "generic": "tafasitamab-cxix",
        "company": "Incyte",
        "indication": "Relapsed or refractory follicular lymphoma (combo)",
        "year": "2025",
        "mechanism": "CD19-directed monoclonal antibody",
        "category": "monoclonal",
        "indicationType": "lymphoma",
    },
    {
        "name": "Ibtrozi",
        "generic": "taletrectinib",
        "company": "Nuvation Bio",
        "indication": "ROS1-positive NSCLC",
        "year": "2025",
        "mechanism": "Kinase inhibitor",
        "category": "kinase",
        "indicationType": "lung",
    },
    {
        "name": "Emrelis",
        "generic": "telisotuzumab vedotin-tllv",
        "company": "AbbVie",
        "indication": "c-Met-high NSCLC (accelerated approval)",
        "year": "2025",
        "mechanism": "Antibody-drug conjugate",
        "category": "adc",
        "indicationType": "lung",
    },
    {
        "name": "Adcetris (brentuximab vedotin) - new combo indication",
        "generic": "brentuximab vedotin",
        "company": "Seagen / Pfizer",
        "indication": "Combo for relapsed/refractory large B-cell lymphoma",
        "year": "2025",
        "mechanism": "ADC (CD30-directed)",
        "category": "adc",
        "indicationType": "lymphoma",
    }
];


// Global variables
let currentPage = 1;
const itemsPerPage = 10;
let filteredDrugs = [...drugDatabase];
let sortColumn = -1;
let sortDirection = 'asc';

// DOM elements
const searchInput = document.getElementById('searchInput');
const yearFilter = document.getElementById('yearFilter');
const indicationFilter = document.getElementById('indicationFilter');
const mechanismFilter = document.getElementById('mechanismFilter');
const resultsCount = document.getElementById('resultsCount');
const drugTableBody = document.getElementById('drugTableBody');
const pagination = document.getElementById('pagination');
const modal = document.getElementById('drugModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeFilters();
    initializeFAQ();
    renderDrugTable();
    updateResultsCount();
    setCurrentYear();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Filter functionality
function initializeFilters() {
    searchInput.addEventListener('input', filterDrugs);
    yearFilter.addEventListener('change', filterDrugs);
    indicationFilter.addEventListener('change', filterDrugs);
    mechanismFilter.addEventListener('change', filterDrugs);
}

function filterDrugs() {
    const searchTerm = searchInput.value.toLowerCase();
    const yearValue = yearFilter.value;
    const indicationValue = indicationFilter.value;
    const mechanismValue = mechanismFilter.value;

    filteredDrugs = drugDatabase.filter(drug => {
        const matchesSearch = !searchTerm ||
            drug.name.toLowerCase().includes(searchTerm) ||
            drug.company.toLowerCase().includes(searchTerm) ||
            drug.indication.toLowerCase().includes(searchTerm) ||
            drug.mechanism.toLowerCase().includes(searchTerm);

        const matchesYear = !yearValue || drug.year === yearValue;
        const matchesIndication = !indicationValue || drug.indicationType === indicationValue;
        const matchesMechanism = !mechanismValue || drug.category === mechanismValue;

        return matchesSearch && matchesYear && matchesIndication && matchesMechanism;
    });

    currentPage = 1;
    renderDrugTable();
    updateResultsCount();
}

// Table rendering
function renderDrugTable() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const drugsToShow = filteredDrugs.slice(startIndex, endIndex);

    drugTableBody.innerHTML = '';

    if (drugsToShow.length === 0) {
        drugTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                    No drugs found matching your criteria
                </td>
            </tr>
        `;
        pagination.innerHTML = '';
        return;
    }

    drugsToShow.forEach(drug => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="drug-name">${drug.name}</td>
            <td class="company-name">${drug.company}</td>
            <td class="indication">${drug.indication}</td>
            <td class="year">${drug.year}</td>
            <td>
                <button class="details-btn" onclick="showDrugDetails('${drug.name}')">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </td>
        `;
        drugTableBody.appendChild(row);
    });

    renderPagination();
}

// Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredDrugs.length / itemsPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';

    // Previous button
    paginationHTML += `
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
    `;

    // Next button
    paginationHTML += `
        <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;

    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredDrugs.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderDrugTable();

        // Scroll to table
        document.getElementById('drug-list').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Table sorting
function sortTable(columnIndex) {
    if (sortColumn === columnIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = columnIndex;
        sortDirection = 'asc';
    }

    const columnMappings = ['name', 'company', 'indication', 'year', 'mechanism'];
    const sortKey = columnMappings[columnIndex];

    filteredDrugs.sort((a, b) => {
        let aVal = a[sortKey];
        let bVal = b[sortKey];

        if (sortKey === 'year') {
            aVal = parseInt(aVal);
            bVal = parseInt(bVal);
        } else {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }

        if (sortDirection === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    currentPage = 1;
    renderDrugTable();
}

// Results count
function updateResultsCount() {
    const count = filteredDrugs.length;
    const total = drugDatabase.length;

    if (count === total) {
        resultsCount.textContent = `Showing all ${total} oncology drugs approved 2020-2025`;
    } else {
        resultsCount.textContent = `Showing ${count} of ${total} drugs`;
    }
}

// Drug details modal
function showDrugDetails(drugName) {
    const drug = drugDatabase.find(d => d.name === drugName);
    if (!drug) return;

    modalBody.innerHTML = `
        <div class="drug-detail">
            <h2>${drug.name}</h2>
            <div class="drug-info-grid">
                <div class="info-item">
                    <h4>Company</h4>
                    <p>${drug.company}</p>
                </div>
                <div class="info-item">
                    <h4>Indication</h4>
                    <p>${drug.indication}</p>
                </div>
                <div class="info-item">
                    <h4>Year of Approval</h4>
                    <p>${drug.year}</p>
                </div>
                <div class="info-item">
                    <h4>Mechanism of Action</h4>
                    <p>${drug.mechanism}</p>
                </div>
                <div class="info-item">
                    <h4>Drug Category</h4>
                    <p>${getDrugCategory(drug.category)}</p>
                </div>
                <div class="info-item">
                    <h4>Indication Type</h4>
                    <p>${getIndicationType(drug.indicationType)}</p>
                </div>
            </div>
            <div class="drug-description">
                <h4>About This Drug</h4>
                <p>${getDrugDescription(drug)}</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function getDrugDescription(drug) {
    const descriptions = {
        'kinase': 'This kinase inhibitor works by blocking specific enzymes that cancer cells need to grow and divide. It targets specific genetic mutations or proteins that are overactive in cancer cells.',
        'monoclonal': 'This monoclonal antibody is designed to recognize and bind to specific proteins on cancer cells, either directly killing them or marking them for destruction by the immune system.',
        'immunotherapy': 'This immunotherapy treatment helps the body\'s immune system recognize and attack cancer cells more effectively. It may work by removing barriers that prevent immune cells from attacking tumors.',
        'adc': 'This antibody-drug conjugate combines the targeting ability of an antibody with the killing power of chemotherapy. The antibody delivers the toxic drug directly to cancer cells while sparing healthy tissue.',
        'car-t': 'This CAR-T therapy involves genetically modifying a patient\'s T-cells to better recognize and attack cancer cells. The modified cells are then infused back into the patient.',
        'other': 'This treatment works through a unique mechanism to target cancer cells. The specific way it works depends on the drug\'s molecular structure and target.'
    };

    return descriptions[drug.category] || descriptions['other'];
}

function getDrugCategory(category) {
    const categories = {
        'kinase': 'Kinase Inhibitor',
        'monoclonal': 'Monoclonal Antibody',
        'immunotherapy': 'Immunotherapy',
        'adc': 'Antibody-Drug Conjugate',
        'car-t': 'CAR-T Therapy',
        'other': 'Other Mechanism'
    };

    return categories[category] || 'Unknown';
}

function getIndicationType(indicationType) {
    const types = {
        'lung': 'Lung Cancer',
        'breast': 'Breast Cancer',
        'lymphoma': 'Lymphoma',
        'myeloma': 'Multiple Myeloma',
        'leukemia': 'Leukemia',
        'prostate': 'Prostate Cancer',
        'colorectal': 'Colorectal Cancer',
        'other': 'Other Cancer Types'
    };

    return types[indicationType] || 'Various';
}

// Modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Action functions
function findClinicalTrials() {
    window.open('https://clinicaltrials.gov', '_blank');
}

function contactOncologist() {
    window.open('https://www.cancer.org/treatment/finding-and-paying-for-treatment/choosing-your-treatment-team/choosing-a-doctor.html', '_blank');
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'Oncology Drugs Approved 2020-2024',
            text: 'Comprehensive guide to FDA-approved cancer treatments',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Page URL copied to clipboard!');
        });
    }
}

function searchClinicalTrials(drugName) {
    const searchTerm = encodeURIComponent(drugName);
    window.open(`https://clinicaltrials.gov/search?term=${searchTerm}`, '_blank');
}

function shareDrug(drugName) {
    const text = `Check out ${drugName} - a cancer treatment approved by the FDA. Learn more: ${window.location.href}`;

    if (navigator.share) {
        navigator.share({
            title: drugName,
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Drug information copied to clipboard!');
        });
    }
}

// Download functions
function downloadDrugList() {
    const csvContent = generateCSV();
    downloadFile(csvContent, 'oncology-drugs-2020-2024.csv', 'text/csv');
}

function downloadComparison() {
    const comparisonData = generateComparisonChart();
    downloadFile(comparisonData, 'drug-comparison-chart.html', 'text/html');
}

function downloadGlossary() {
    const glossary = generateGlossary();
    downloadFile(glossary, 'oncology-glossary.txt', 'text/plain');
}

function downloadTimeline() {
    const timeline = generateTimeline();
    downloadFile(timeline, 'approval-timeline.html', 'text/html');
}

function generateCSV() {
    const headers = ['Drug Name', 'Company', 'Indication', 'Year', 'Mechanism'];
    const csvRows = [headers.join(',')];

    drugDatabase.forEach(drug => {
        const row = [
            `"${drug.name}"`,
            `"${drug.company}"`,
            `"${drug.indication}"`,
            drug.year,
            `"${drug.mechanism}"`
        ];
        csvRows.push(row.join(','));
    });

    return csvRows.join('\n');
}

function generateComparisonChart() {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Oncology Drugs Comparison Chart</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Oncology Drugs Approved 2020-2024 - Comparison Chart</h1>
    <table>
        <tr>
            <th>Drug Name</th>
            <th>Company</th>
            <th>Indication</th>
            <th>Year</th>
            <th>Mechanism</th>
        </tr>
        ${drugDatabase.map(drug => `
            <tr>
                <td>${drug.name}</td>
                <td>${drug.company}</td>
                <td>${drug.indication}</td>
                <td>${drug.year}</td>
                <td>${drug.mechanism}</td>
            </tr>
        `).join('')}
    </table>
</body>
</html>`;
}

function generateGlossary() {
    return `ONCOLOGY DRUGS GLOSSARY

Key Terms and Definitions:

ANTIBODY-DRUG CONJUGATE (ADC)
A treatment that combines an antibody with a chemotherapy drug. The antibody targets specific proteins on cancer cells and delivers the toxic drug directly to them.

BIOMARKER
A biological molecule found in blood, other body fluids, or tissues that is a sign of a normal or abnormal process, or of a condition or disease.

CAR-T THERAPY
Chimeric Antigen Receptor T-cell therapy. A treatment where a patient's T-cells are genetically modified to better recognize and attack cancer cells.

IMMUNOTHERAPY
Treatment that uses the body's immune system to fight cancer. It can help the immune system recognize and attack cancer cells.

KINASE INHIBITOR
A drug that blocks enzymes called kinases, which are involved in cell growth and division. Many cancer cells have overactive kinases.

MONOCLONAL ANTIBODY
A laboratory-made protein that can bind to specific targets on cancer cells. It can either kill the cancer cell directly or mark it for destruction by the immune system.

PRECISION MEDICINE
An approach to patient care that allows doctors to select treatments based on a genetic understanding of a patient's disease.

TARGETED THERAPY
Treatment that targets specific genes, proteins, or the tissue environment that contributes to cancer growth and survival.

FDA APPROVAL PROCESS
The U.S. Food and Drug Administration's rigorous process to ensure drugs are safe and effective before they can be prescribed to patients.

CLINICAL TRIALS
Research studies that test new treatments in people to see if they are safe and effective.

Last updated: December 2024`;
}

function generateTimeline() {
    const timelineData = drugDatabase.reduce((acc, drug) => {
        if (!acc[drug.year]) {
            acc[drug.year] = [];
        }
        acc[drug.year].push(drug);
        return acc;
    }, {});

    return `
<!DOCTYPE html>
<html>
<head>
    <title>Oncology Drug Approval Timeline</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .timeline { max-width: 800px; margin: 0 auto; }
        .year-section { margin-bottom: 40px; }
        .year-title { font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 20px; }
        .drug-item { background: #f9fafb; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
        .drug-name { font-weight: bold; color: #1f2937; }
        .drug-company { color: #6b7280; font-size: 14px; }
        .drug-indication { color: #374151; margin: 5px 0; }
    </style>
</head>
<body>
    <h1>Oncology Drug Approval Timeline (2020-2024)</h1>
    <div class="timeline">
        ${Object.keys(timelineData).sort().reverse().map(year => `
            <div class="year-section">
                <h2 class="year-title">${year}</h2>
                ${timelineData[year].map(drug => `
                    <div class="drug-item">
                        <div class="drug-name">${drug.name}</div>
                        <div class="drug-company">${drug.company}</div>
                        <div class="drug-indication">${drug.indication}</div>
                    </div>
                `).join('')}
            </div>
        `).join('')}
    </div>
</body>
</html>`;
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Animation on scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.intro-card, .mechanism-card, .benefit-card, .resource-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Add loading states
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element, content) {
    element.innerHTML = content;
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Set current year in footer
function setCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Performance monitoring
window.addEventListener('load', () => {
    console.log('Oncology Drugs Guide loaded successfully');
});