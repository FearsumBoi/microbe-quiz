// microbeData.js

const categories = {
  "Bacteria": [
    {
        question: "In bacterial chemotaxis, which protein forms a complex with CheY-P to regulate flagellar motor rotation?",
        options: ["CheA", "CheW", "FliM", "CheZ"],
        answer: "FliM",
        explanation:  "FliM is where CheY-P binds to switch motor rotation."
    },
    {
        question: "In prokaryotic ribosomes, the peptidyl transferase activity is carried out by which molecular component?",
        options: ["5S rRNA in the 30S ribosomal subunit", "23S rRNA in the 50S ribosomal subunit", "16S rRNA in the 30S ribosomal subunit", "tRNA molecule in the A site"],
        answer: "23S rRNA in the 50S ribosomal subunit",
        explanation: "23S rRNA is the catalytically active part for peptide bond formation."
    },
    {
        question: "What is the primary function in bacterial Type IV secretion systems?",
        options: ["Transfer of DNA and proteins to other cells", "Secretion of toxins", "Uptake of nutrients from the environment", "Cell motility"],
        answer: "Cell motility"
    },
    {
        question: "Which lipid tail type is found in archaea?",
        options: ["Fatty acid", "Isoprene", "Glucose", "Pseudomurein"],
        answer: "Isoprene"
    },
    {
        question: "Which protein is needed to connect Okazaki fragments in DNA replication?",
        options: ["SSB", "DNA ligase", "DnaA", "DNA polymerase"],
        answer: "DNA ligase"
    },
    {
        question: "In what condition does the trp operon become active?:",
        options: ["When tryptophan levels are high", "When tryptophan levels are low", "In the presence of glucose", "In the absence of lactose"],
        answer: "When tryptophan levels are low"
    },
    {
        question: "Which sterilization method is best for air purification?",
        options: ["Autoclaving", "Chemical sterilization", "Ultraviolet Radiation", "Filtration"],
        answer: "Filtration"
    },
    {
        question: "Horizontal gene transfer via lysogenic viruses is known as?",
        options: ["Conjugation", "Transformation", "Transduction", "Viral gene transfer"],
        answer: "Transduction"
    },
    {
        question: "Which bacterial genus is identified using acid-fast staining?",
        options: ["Escherichia", "Staphylococcus", "Mycobacterium", "Bacillus"],
        answer: "Mycobacterium"
    },
    {
        question: "Which antibiotic class targets bacterial DNA by causing chromosomal breakage?",
        options: ["Cephalosporins", "Fluoroquinolones", "Penicillins", "Tetracyclines"],
        answer: "Fluoroquinolones"
    },
    {
        question: "Which equation represents alcoholic fermentation in yeast?",
        options: ["C6H12O6 → 2CO2 + 2C2H5OH", "C3H2O3 + 2NH3 → CO2 + C2H5OH + N2", "C6H12O6 + 2CO2 → 2C2H5OH", "C6H14O10 → 2CO2 + 2C2H4(OH)3"],
        answer: "C6H12O6 → 2CO2 + 2C2H5OH"
    },
    {
        question: "What is the primary function of bacterial FtsZ protein?",
        options: ["DNA replication", "Formation of the septum during cytokinesis", "Transport of nutrients across the cell membrane", "Attachment of the cell to surfaces"],
        answer: "Formation of the septum during cytokinesis"
    }
  ],
  "Microscopy": [
    {
        question: "Which microscope is best for viewing the surface structure of bacteria?",
        options: ["Transmission Electron Microscope (TEM)", "Scanning Electron Microscope (SEM)", "Fluorescence Microscope", "Phase Contrast Microscope"],
        answer: "Scanning Electron Microscope (SEM)"
    },
    {
        question: "Who was the first to observe microorganisms with a microscope?",
        options: ["Antonie van Leeuwenhoek", "Robert Hooke", "Louis Pasteur", "Robert Koch"],
        answer: "Antonie van Leeuwenhoek"
    },
    {
        question: "Which of the following is not a type of pump commonly used in TEM?",
        options:["Drum pump", "Roughing pump", "Turbo pump", "Ion pump"],
        answer:"Drum pump"
    },
    {
        question: "The numerical aperture (NA) of an objective lens is 0.95. Using light with a wavelength of 550 nm, what is the approximate theoretical resolution of the lens?",
        options: ["290nm", "550nm", "579nm", "125nm"],
        answer: "290nm"
    },
    {
      question: "What shape is this bacteria",
      options: ["Cocci", "Bacilli", "Spirillium", "Tetrad"],
      image: "microbe-images/spirillium.jpg",
      answer: "Spirillium"
    }
  ],
  "Genetics": [
    {
        question: "What is the primary function of the lac operon?",
        options: ["Regulation of lactose metabolism", "DNA replication", "Protein synthesis", "Cell division"],
        answer: "Regulation of lactose metabolism"
    },
    {
        question: "Which structure contains genes for enzymes and antibiotic resistance?",
        options: ["Plasmid", "Pilus", "Capsule", "Plasma membrane"],
        answer: "Plasmid"
    },
    {
        question: "DNA methylation, in the context of epigenetics, typical leads to:",
        options:["Transcriptional repression", "Enhanced transcription", "Post-translational modification of proteins", "Activation of RNA interference" ],
        answer: "Transcriptional repression"
    },
    {
        question: "What is the role of luciferase in recombinant plasmid biotechnology",
        options:["serve as protein for bioluminescence to visualize plasmid", "denature lucifer functional groups", "region in polylinker site", "serve as a reporter gene"],
        answer: "serve as a reporter gene"
    },
    {
        question: "What is the eukaryote analgous of the Shine-Dalgarno Sequence",
        options: ["TATA Box", "Kozak Sequence", "Pribnow Box", "Leeuwenhoek sequence"],
        answer: "Kozak Sequence"
    }
  ],
  "Staining Techniques": [
    {
        question: "What is the counterstain used in Gram staining?",
        options: ["Ethanol", "Safranin", "Fe2O3", "HCl"],
        answer: "Safranin"
    },
    {
        question: "Which staining technique is used to identify Mycobacterium species?",
        options: ["Gram stain", "Acid-fast stain", "Endospore stain", "Capsule stain"],
        answer: "Acid-fast stain"
    }
  ],
  "Metabolism": [
    {
        question: "Which metabolic process allows cyanobacteria to produce biofuels?",
        options: ["Anaerobic respiration", "Glycolysis", "Photosynthesis", "Tricarboxylic acid cycle"],
        answer: "Photosynthesis",
        explanation: "Cyanobacteria produce biofuels through photosynthesis and metabolic engineering, converting carbon dioxide and sunlight into organic compounds like sugars, which can then be further processed into biofuels like ethanol or butanol."
    },
    {
        question: "What is the main purpose of the Krebs cycle in metabolism?",
        options: ["ATP production", "Oxygen storage", "Fat synthesis", "Water generation"],
        answer: "ATP production"
    },
    {
        question: "Catabolite repression in bacteria refers to the suppression of certain metabolic pathways in the presence of what preferred energy source?",
        options: ["Glucose", "Lactose", "Fructose", "Sucrose"],
        answer: "Glucose"
    }
  ],
  "Pathogenesis": [
    {
        question: "Which class of antibiotics targets bacterial cell wall synthesis and includes penicillin?",
        options: ["Tetracyclines", "Beta-lactams", "Fluoroquinolones", "Macrolides"],
        answer: "Beta-lactams"
    },
    {
        question: "Which pathogen causes tuberculosis?",
        options: ["Streptococcus pneumoniae", "Mycobacterium tuberculosis", "Escherichia coli", "Salmonella enterica"],
        answer: "Mycobacterium tuberculosis"
    },
    {
        question: "Which bacterial structure is a major virulence factor for Neisseria meningitidis and helps evade host immune responses?",
        options: ["Capsule", "Pilus", "Endospore", "Flagellum"],
        answer: "Capsule"
    },
    {
        question: "Endotoxins are primarily composed of which macromolecule?",
        options: ["Proteins", "Lipopolysaccharides", "Peptidoglycans", "Nucleic acids"],
        answer: "Lipopolysaccharides"
    },
    {
        question: "Which toxin inhibits acetylcholine release, leading to flaccid paralysis?",
        options: ["Tetanospasmin", "Botulinum toxin", "Shiga toxin", "Diphtheria toxin"],
        answer: "Botulinum toxin"
    },
    {
        question: "What is the primary function of hemolysins in bacterial pathogenesis?",
        options: ["Inhibiting protein synthesis", "Breaking down red blood cells", "Preventing phagocytosis", "Neutralizing host antibodies"],
        answer: "Breaking down red blood cells"
    },
    {
        question: "Which mechanism allows bacteria to acquire antibiotic resistance genes from other bacteria?",
        options: ["Transcription", "Translation", "Horizontal gene transfer", "Binary fission"],
        answer: "Horizontal gene transfer"
    },
    {
        question: "Which bacterium is known for causing necrotizing fasciitis (flesh-eating disease)?",
        options: ["Pseudomonas aeruginosa", "Clostridium botulinum", "Streptococcus pyogenes", "Staphylococcus epidermidis"],
        answer: "Streptococcus pyogenes"
    },
    {
        question: "What is the main reason why Gram-negative bacteria are more resistant to certain antibiotics compared to Gram-positive bacteria?",
        options: ["Presence of teichoic acids", "Thicker peptidoglycan layer", "Outer membrane with porins", "Lack of a cell wall"],
        answer: "Outer membrane with porins"
    },
    {
        question: "Which stage of a viral infection involves the virus integrating its genetic material into the host genome?",
        options: ["Lytic phase", "Lysogenic phase", "Endocytosis", "Assembly"],
        answer: "Lysogenic phase"
    }
  ]
 };
