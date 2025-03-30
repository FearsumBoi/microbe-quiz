const categories = {
    "Bacteria": [
      {
        "question": "In bacterial chemotaxis, which protein forms a complex with CheY-P to regulate flagellar motor rotation?",
        "options": ["CheA", "CheW", "FliM", "CheZ"],
        "answer": "FliM",
        "explanation": "FliM is where CheY-P binds to switch motor rotation."
      },
      {
        "question": "In prokaryotic ribosomes, the peptidyl transferase activity is carried out by which molecular component?",
        "options": [
          "5S rRNA in the 30S ribosomal subunit",
          "23S rRNA in the 50S ribosomal subunit",
          "16S rRNA in the 30S ribosomal subunit",
          "tRNA molecule in the A site"
        ],
        "answer": "23S rRNA in the 50S ribosomal subunit",
        "explanation": "23S rRNA is the catalytically active part for peptide bond formation."
      },
      {
        "question": "What is the primary function in bacterial Type IV secretion systems?",
        "options": [
          "Transfer of DNA and proteins to other cells",
          "Secretion of toxins",
          "Uptake of nutrients from the environment",
          "Cell motility"
        ],
        "answer": "Transfer of DNA and proteins to other cells"
      },
      {
        "question": "Which lipid tail type is found in archaea?",
        "options": ["Fatty acid", "Isoprene", "Glucose", "Pseudomurein"],
        "answer": "Isoprene"
      },
      {
        "question": "Which protein is needed to connect Okazaki fragments in DNA replication?",
        "options": ["SSB", "DNA ligase", "DnaA", "DNA polymerase"],
        "answer": "DNA ligase"
      },
      {
        "question": "In what condition does the trp operon become active?",
        "options": [
          "When tryptophan levels are high",
          "When tryptophan levels are low",
          "In the presence of glucose",
          "In the absence of lactose"
        ],
        "answer": "When tryptophan levels are low"
      },
      {
        "question": "Which sterilization method is best for air purification?",
        "options": ["Autoclaving", "Chemical sterilization", "Ultraviolet Radiation", "Filtration"],
        "answer": "Filtration"
      },
      {
        "question": "Horizontal gene transfer via lysogenic viruses is known as?",
        "options": ["Conjugation", "Transformation", "Transduction", "Viral gene transfer"],
        "answer": "Transduction"
      },
      {
        "question": "Which bacterial genus is identified using acid-fast staining?",
        "options": ["Escherichia", "Staphylococcus", "Mycobacterium", "Bacillus"],
        "answer": "Mycobacterium"
      },
      {
        "question": "Which antibiotic class targets bacterial DNA by causing chromosomal breakage?",
        "options": ["Cephalosporins", "Fluoroquinolones", "Penicillins", "Tetracyclines"],
        "answer": "Fluoroquinolones"
      },
      {
        "question": "Which equation represents alcoholic fermentation in yeast?",
        "options": [
          "C6H12O6 → 2CO2 + 2C2H5OH",
          "C3H2O3 + 2NH3 → CO2 + C2H5OH + N2",
          "C6H12O6 + 2CO2 → 2C2H5OH",
          "C6H14O10 → 2CO2 + 2C2H4(OH)3"
        ],
        "answer": "C6H12O6 → 2CO2 + 2C2H5OH"
      },
      {
        "question": "What is the primary function of bacterial FtsZ protein?",
        "options": [
          "DNA replication",
          "Formation of the septum during cytokinesis",
          "Transport of nutrients across the cell membrane",
          "Attachment of the cell to surfaces"
        ],
        "answer": "Formation of the septum during cytokinesis"
      },
      {
        "question": "In bacteriology, spherical bacteria arranged in grape-like clusters are known as:",
        "options": ["Staphylococci", "Streptococci", "Diplococci", "Bacilli"],
        "answer": "Staphylococci"
      },
      {
        "question": "Which of the following structures is present in Gram-positive bacteria but not in Gram-negative bacteria?",
        "options": ["Teichoic acids", "Outer membrane", "Peptidoglycan", "Ribosomes"],
        "answer": "Teichoic acids"
      },
      {
        "question": "A bacterium that requires high salt concentrations for growth is called a:",
        "options": ["Thermophile", "Halophile", "Barophile", "Acidophile"],
        "answer": "Halophile"
      },
      {
        "question": "Which genus of bacteria is known for lacking a cell wall and thereby resisting beta-lactam antibiotics?",
        "options": ["Mycoplasma", "Bacillus", "Streptococcus", "Listeria"],
        "answer": "Mycoplasma"
      },
      {
        "question": "In bacteria, the region where the chromosome (DNA) is located (not membrane-bound) is called the:",
        "options": ["Nucleus", "Nucleoid", "Plasmid", "Capsid"],
        "answer": "Nucleoid"
      },
      {
        "question": "Peptidoglycan (murein) is a major component of bacterial cell walls. It is a polymer composed of alternating ____ and ____ sugars cross-linked by peptides.",
        "options": [
          "N-acetylglucosamine (NAG); N-acetylmuramic acid (NAM)",
          "Glucose; galactose",
          "N-acetylglucosamine; chondroitin sulfate",
          "Cellulose; pectin"
        ],
        "answer": "N-acetylglucosamine (NAG); N-acetylmuramic acid (NAM)"
      },
      {
        "question": "What is the primary function of bacterial endospores?",
        "options": [
          "Reproduction and multiplication",
          "Survival in harsh conditions (dormant, resistant state)",
          "Nutrient absorption",
          "Exchange of genetic material"
        ],
        "answer": "Survival in harsh conditions (dormant, resistant state)"
      },
      {
        "question": "The time it takes for a bacterial population to double in number is called the:",
        "options": ["Generation time", "Half-life", "Growth rate", "Lag time"],
        "answer": "Generation time"
      },
      {
        "question": "In a typical bacterial growth curve, the initial phase in which bacteria adapt to new conditions and show little or no cell division is the:",
        "options": ["Lag phase", "Log (exponential) phase", "Stationary phase", "Death phase"],
        "answer": "Lag phase"
      },
      {
        "question": "Bacteria that require lower than atmospheric levels of oxygen (too much oxygen is harmful) are called:",
        "options": [
          "Microaerophiles",
          "Obligate aerobes",
          "Facultative anaerobes",
          "Aerotolerant anaerobes"
        ],
        "answer": "Microaerophiles"
      },
      {
        "question": "What structure do bacteria use to transfer DNA to another bacterium during conjugation?",
        "options": ["A pilus (sex pilus)", "A flagellum", "A capsule", "A ribosome"],
        "answer": "A pilus (sex pilus)"
      },
      {
        "question": "The primary function of bacterial flagella is:",
        "options": ["Motility (movement)", "DNA exchange", "Protein synthesis", "Adhesion to surfaces"],
        "answer": "Motility (movement)"
      },
      {
        "question": "Bacteria that thrive at high temperatures (above 45°C) are known as:",
        "options": ["Thermophiles", "Psychrophiles", "Mesophiles", "Halophiles"],
        "answer": "Thermophiles"
      },
      {
        "question": "Short, hair-like structures that help bacteria adhere to surfaces and to each other (important in forming biofilms) are called:",
        "options": ["Fimbriae (pili)", "Flagella", "Cilia", "Capsules"],
        "answer": "Fimbriae (pili)"
      },
      {
        "question": "The catalase test identifies bacteria that produce the enzyme catalase. A positive catalase test (bubbling upon H2O2 addition) indicates the bacterium can:",
        "options": [
          "break down hydrogen peroxide into water and oxygen",
          "ferment lactose rapidly",
          "move using flagella",
          "form a biofilm"
        ],
        "answer": "break down hydrogen peroxide into water and oxygen"
      },
      {
        "question": "Bacteria that can only grow at the bottom of a thioglycolate broth tube (where no oxygen is present) are classified as:",
        "options": [
          "Obligate anaerobes",
          "Obligate aerobes",
          "Facultative anaerobes",
          "Microaerophiles"
        ],
        "answer": "Obligate anaerobes"
      },
      {
        "question": "Bacteria that can use oxygen for respiration when it's available but can also grow without it (using fermentation or anaerobic respiration) are called:",
        "options": [
          "Facultative anaerobes",
          "Obligate aerobes",
          "Obligate anaerobes",
          "Microaerophiles"
        ],
        "answer": "Facultative anaerobes"
      },
      {
        "question": "Which scientist is credited with isolating Bacillus anthracis and developing postulates to prove the microbial cause of disease?",
        "options": [
          "Robert Koch",
          "Louis Pasteur",
          "Alexander Fleming",
          "Joseph Lister"
        ],
        "answer": "Robert Koch"
      },
      {
        "question": "Quorum sensing in bacteria refers to:",
        "options": [
          "the ability to sense and respond to population density by gene regulation",
          "the movement toward a chemical attractant",
          "the formation of a rigid biofilm matrix",
          "the transfer of DNA via a pilus"
        ],
        "answer": "the ability to sense and respond to population density by gene regulation"
      },
      {
        "question": "An obligate intracellular bacterium is one that:",
        "options": [
          "can only survive and replicate inside host cells",
          "requires high salt for growth",
          "lacks a cell membrane",
          "cannot tolerate oxygen"
        ],
        "answer": "can only survive and replicate inside host cells"
      },
      {
        "question": "A bacterial structure that helps evade phagocytosis by immune cells is the:",
        "options": ["Capsule", "Flagellum", "Cell wall", "Ribosome"],
        "answer": "Capsule"
      },
      {
        "question": "A biofilm is best described as:",
        "options": [
          "a community of bacteria embedded in a self-produced extracellular matrix attached to a surface",
          "a rapidly swimming collection of bacteria",
          "a layer of dead bacteria on a surface",
          "a pure culture of bacteria in liquid media"
        ],
        "answer": "a community of bacteria embedded in a self-produced extracellular matrix attached to a surface"
      },
      {
        "question": "The Gram stain differentiates bacteria based on differences in their:",
        "options": [
          "cell wall structure (peptidoglycan thickness and outer membrane presence)",
          "ribosomal RNA sequence",
          "DNA content",
          "capsule polysaccharide"
        ],
        "answer": "cell wall structure (peptidoglycan thickness and outer membrane presence)"
      },
      {
        "question": "During which phase of a bacterial growth curve do cells divide at an exponential rate?",
        "options": ["Log (exponential) phase", "Lag phase", "Stationary phase", "Death phase"],
        "answer": "Log (exponential) phase"
      },
      {
        "question": "Escherichia coli is commonly used as a model organism in microbiology because:",
        "options": [
          "it grows quickly and its genetics are well understood",
          "it is an obligate pathogen",
          "it has a very large genome",
          "it is a strict anaerobe"
        ],
        "answer": "it grows quickly and its genetics are well understood"
      },
      {
        "question": "The filament of a bacterial flagellum is composed of a protein called:",
        "options": ["Flagellin", "Tubulin", "Actin", "Keratin"],
        "answer": "Flagellin"
      },
      {
        "question": "Chemotaxis is the process by which bacteria:",
        "options": [
          "move toward or away from chemical stimuli",
          "divide to form chains",
          "exchange genetic material",
          "produce energy via fermentation"
        ],
        "answer": "move toward or away from chemical stimuli"
      },
      {
        "question": "Prokaryotic ribosomes have a size of ____ (in Svedberg units), distinguishing them from eukaryotic ribosomes.",
        "options": ["70S", "80S", "60S", "50S"],
        "answer": "70S"
      },
      {
        "question": "The direct uptake of naked DNA by a bacterial cell from its environment is known as:",
        "options": ["Transformation", "Conjugation", "Transduction", "Transposition"],
        "answer": "Transformation"
      },
      {
        "question": "What structure allows some bacteria (like Bacillus or Clostridium) to survive boiling, desiccation, and other extreme conditions?",
        "options": ["Endospores", "Capsules", "Flagella", "Plasmids"],
        "answer": "Endospores"
      },
      {
        "question": "Vibrio cholerae, the bacterium that causes cholera, has a distinctive shape described as:",
        "options": ["Comma-shaped (curved rod)", "Spherical", "Corkscrew spiral", "Filamentous"],
        "answer": "Comma-shaped (curved rod)"
      },
      {
        "question": "Which term describes rod-shaped bacteria in general?",
        "options": ["Bacilli", "Cocci", "Spirilla", "Vibrios"],
        "answer": "Bacilli"
      },
      {
        "question": "Chains of spherical bacteria (such as Streptococcus) are described by which term?",
        "options": ["Streptococci", "Staphylococci", "Diplococci", "Tetrads"],
        "answer": "Streptococci"
      },
      {
        "question": "The domain of prokaryotes that often includes extremophiles and has ether-linked membrane lipids is:",
        "options": ["Archaea", "Bacteria", "Eukarya", "Protista"],
        "answer": "Archaea"
      },
      {
        "question": "Which bacterium is widely used as a model organism in molecular biology labs due to its fast growth and well-understood genetics?",
        "options": [
          "Escherichia coli",
          "Staphylococcus aureus",
          "Bacillus anthracis",
          "Pseudomonas aeruginosa"
        ],
        "answer": "Escherichia coli"
      },
      {
        "question": "Bacterial flagella are made of subunits of a protein called flagellin. They are anchored in the cell by a basal body and rotate to provide:",
        "options": ["motility", "adhesion", "conjugation", "exotoxin delivery"],
        "answer": "motility"
      },
      {
        "question": "Most pathogenic bacteria prefer environments around neutral pH (pH ~7). They are termed:",
        "options": ["neutrophiles", "acidophiles", "alkaliphiles", "barophiles"],
        "answer": "neutrophiles"
      },
      {
        "question": "Lactobacillus in the human gut helps with digestion and produces lactic acid. It is an example of a beneficial member of the normal flora classified as a:",
        "options": ["probiotic bacterium", "pathogen", "halophile", "phototroph"],
        "answer": "probiotic bacterium"
      },
      {
        "question": "Streptomyces, a genus of soil bacteria, is notable because it:",
        "options": [
          "produces many antibiotics as secondary metabolites",
          "causes strep throat",
          "lacks a cell wall",
          "is responsible for malaria"
        ],
        "answer": "produces many antibiotics as secondary metabolites"
      }
    ],
    "Microscopy": [
      {
        "question": "Which microscope is best for viewing the surface structure of bacteria?",
        "options": [
          "Transmission Electron Microscope (TEM)",
          "Scanning Electron Microscope (SEM)",
          "Fluorescence Microscope",
          "Phase Contrast Microscope"
        ],
        "answer": "Scanning Electron Microscope (SEM)"
      },
      {
        "question": "Who was the first to observe microorganisms with a microscope?",
        "options": [
          "Antonie van Leeuwenhoek",
          "Robert Hooke",
          "Louis Pasteur",
          "Robert Koch"
        ],
        "answer": "Antonie van Leeuwenhoek"
      },
      {
        "question": "Which of the following is not a type of vacuum pump commonly used in TEM (Transmission Electron Microscopy)?",
        "options": ["Drum pump", "Roughing pump", "Turbo pump", "Ion pump"],
        "answer": "Drum pump"
      },
      {
        "question": "The numerical aperture (NA) of an objective lens is 0.95. Using light with a wavelength of 550 nm, what is the approximate theoretical resolution of the lens?",
        "options": ["290 nm", "550 nm", "579 nm", "125 nm"],
        "answer": "290 nm"
      },
      {
        "question": "What is the shape of the bacterium shown in the image?",
        "options": ["Coccus", "Bacillus", "Spirillum", "Vibrio"],
        "image": "microbe-images/spirillium.jpg",
        "answer": "Spirillum"
      },
      {
        "question": "What is the total magnification of a specimen viewed with a 10x ocular lens and a 40x objective lens?",
        "options": ["4x", "40x", "400x", "4000x"],
        "answer": "400x"
      },
      {
        "question": "Which part of the light microscope is used to adjust the amount of light reaching the specimen?",
        "options": ["Condenser", "Iris diaphragm", "Objective lens", "Stage"],
        "answer": "Iris diaphragm"
      },
      {
        "question": "Immersion oil is used with high-power objective lenses primarily to:",
        "options": [
          "Increase magnification",
          "Increase resolution by reducing light refraction",
          "Prevent the slide from drying out",
          "Protect the lens from damage"
        ],
        "answer": "Increase resolution by reducing light refraction"
      },
      {
        "question": "Which microscope would be best to view internal structures of a virus at very high resolution?",
        "options": [
          "Brightfield light microscope",
          "Transmission Electron Microscope (TEM)",
          "Phase contrast microscope",
          "Dissecting stereoscope"
        ],
        "answer": "Transmission Electron Microscope (TEM)"
      },
      {
        "question": "Which microscope uses ultraviolet light and fluorescent dyes or antibodies to visualize specimens?",
        "options": [
          "Fluorescence microscope",
          "Phase contrast microscope",
          "Darkfield microscope",
          "Compound brightfield microscope"
        ],
        "answer": "Fluorescence microscope"
      },
      {
        "question": "What does it mean if a microscope is 'parfocal'?",
        "options": [
          "The image remains nearly in focus when switching between objectives",
          "It can focus on multiple focal planes simultaneously",
          "It has a fixed focus at all magnifications",
          "Both eyepieces can be focused independently"
        ],
        "answer": "The image remains nearly in focus when switching between objectives"
      },
      {
        "question": "In a compound light microscope, what is the function of the condenser?",
        "options": [
          "To focus light onto the specimen",
          "To magnify the image",
          "To hold the slide in place",
          "To adjust the focus"
        ],
        "answer": "To focus light onto the specimen"
      },
      {
        "question": "Which type of microscopy is especially useful for observing live, unstained cells by enhancing differences in refractive index?",
        "options": [
          "Brightfield microscopy",
          "Phase contrast microscopy",
          "Scanning electron microscopy",
          "Gram staining microscopy"
        ],
        "answer": "Phase contrast microscopy"
      },
      {
        "question": "Why is it recommended to start focusing with a low power objective (e.g., 4x or 10x) before moving to higher power?",
        "options": [
          "Low power objectives have a larger field of view, making it easier to locate the specimen",
          "Low power provides higher resolution",
          "High power objectives cannot focus without first using low power",
          "Low power objectives require no light adjustment"
        ],
        "answer": "Low power objectives have a larger field of view, making it easier to locate the specimen"
      },
      {
        "question": "A microscope's ability to distinguish two close points as separate is called its:",
        "options": ["Magnification", "Resolution", "Contrast", "Field of view"],
        "answer": "Resolution"
      },
      {
        "question": "Which of these instruments can typically achieve the highest magnification and finest resolution?",
        "options": [
          "Compound light microscope",
          "Transmission electron microscope",
          "Dissecting (stereo) microscope",
          "Phase contrast microscope"
        ],
        "answer": "Transmission electron microscope"
      },
      {
        "question": "What type of microscope would you use to visualize individual atoms or molecules on a surface?",
        "options": [
          "Light microscope with blue light",
          "Atomic force microscope (AFM)",
          "Darkfield microscope",
          "Scanning electron microscope (SEM)"
        ],
        "answer": "Atomic force microscope (AFM)"
      },
      {
        "question": "Robert Hooke is known for which contribution to microscopy?",
        "options": [
          "Coining the term 'cell' after viewing cork under a microscope",
          "First observing bacteria",
          "Inventing the electron microscope",
          "Developing the phase contrast microscope"
        ],
        "answer": "Coining the term 'cell' after viewing cork under a microscope"
      },
      {
        "question": "The coarse focus knob on a microscope should typically be used only with which objective lens?",
        "options": [
          "Low power objectives (e.g., 4x or 10x)",
          "High power objectives (40x and above)",
          "Oil immersion objectives",
          "Any objective lens"
        ],
        "answer": "Low power objectives (e.g., 4x or 10x)"
      },
      {
        "question": "What is the approximate limit of resolution for a traditional light microscope using visible light?",
        "options": ["0.2 micrometers", "2 micrometers", "20 micrometers", "0.02 micrometers"],
        "answer": "0.2 micrometers"
      },
      {
        "question": "Which microscopy technique involves freezing a specimen, fracturing it, and then imaging the exposed surfaces to study membrane structure (often with electron microscopy)?",
        "options": [
          "Freeze-fracture technique",
          "Phase contrast microscopy",
          "Darkfield microscopy",
          "Gram staining technique"
        ],
        "answer": "Freeze-fracture technique"
      },
      {
        "question": "In brightfield microscopy, what is commonly done to increase specimen contrast?",
        "options": [
          "Stain the specimen with dyes",
          "Use a blue light filter",
          "Use a phase plate",
          "Close the iris diaphragm completely"
        ],
        "answer": "Stain the specimen with dyes"
      },
      {
        "question": "Which objective lens provides the widest field of view?",
        "options": ["4x objective", "10x objective", "40x objective", "100x objective"],
        "answer": "4x objective"
      },
      {
        "question": "Why must specimens be placed in a vacuum for electron microscopy?",
        "options": [
          "To prevent electron scattering by air molecules",
          "To prevent the specimen from moving",
          "To protect the electron detector",
          "To maintain a constant temperature"
        ],
        "answer": "To prevent electron scattering by air molecules"
      },
      {
        "question": "A confocal laser scanning microscope improves image clarity by:",
        "options": [
          "Using a pinhole aperture to eliminate out-of-focus light",
          "Using higher magnification objectives",
          "Using ultraviolet light for illumination",
          "Cooling the specimen to cryogenic temperatures"
        ],
        "answer": "Using a pinhole aperture to eliminate out-of-focus light"
      },
      {
        "question": "Darkfield microscopy is especially useful for observing:",
        "options": [
          "Thin, hard-to-stain specimens like spirochetes that appear bright against a dark background",
          "Colored, stained tissue sections",
          "Fluorescently labeled cells",
          "Internal cell structures in detail"
        ],
        "answer": "Thin, hard-to-stain specimens like spirochetes that appear bright against a dark background"
      },
      {
        "question": "What is the function of the ocular lens (eyepiece) in a microscope?",
        "options": [
          "To further magnify the image formed by the objective lens",
          "To focus light onto the specimen",
          "To adjust the intensity of illumination",
          "To move the stage"
        ],
        "answer": "To further magnify the image formed by the objective lens"
      },
      {
        "question": "Which technique of aligning and focusing the illumination in a microscope ensures even lighting and high image quality?",
        "options": ["Köhler illumination", "Phase alignment", "Parfocal adjustment", "Brightness tuning"],
        "answer": "Köhler illumination"
      },
      {
        "question": "Zacharias Janssen is credited with which invention in the field of microscopy?",
        "options": [
          "The first compound microscope",
          "The electron microscope",
          "Phase contrast optics",
          "The microtome for slide preparation"
        ],
        "answer": "The first compound microscope"
      },
      {
        "question": "Numerical aperture (NA) of a microscope lens is directly related to its ability to:",
        "options": [
          "Gather light and resolve fine detail",
          "Magnify the image more than other lenses",
          "Remain in focus when switching objectives",
          "Zoom in and out without changing lenses"
        ],
        "answer": "Gather light and resolve fine detail"
      },
      {
        "question": "Which microscopic technique allows for imaging of samples at cryogenic temperatures, minimizing distortion of biological structures like proteins or viruses?",
        "options": [
          "Cryo-electron microscopy (cryo-EM)",
          "Darkfield microscopy",
          "Brightfield microscopy",
          "Time-lapse microscopy"
        ],
        "answer": "Cryo-electron microscopy (cryo-EM)"
      },
      {
        "question": "Electron microscopes achieve higher resolution than light microscopes because electrons have a ________ wavelength than visible light.",
        "options": ["shorter", "longer", "similar", "variable"],
        "answer": "shorter"
      },
      {
        "question": "What is the 'working distance' of a microscope objective?",
        "options": [
          "The distance between the objective lens and the specimen when in focus",
          "The diameter of the field of view at that objective",
          "The distance between the oculars (eyepieces)",
          "The thickness of the cover slip required"
        ],
        "answer": "The distance between the objective lens and the specimen when in focus"
      },
      {
        "question": "Why is a coverslip often used when preparing a slide for microscopy?",
        "options": [
          "To flatten the specimen and prevent it from drying out, and to protect the objective lens from contact with the sample",
          "To increase the magnification",
          "To calibrate the microscope scale",
          "To filter out excess light"
        ],
        "answer": "To flatten the specimen and prevent it from drying out, and to protect the objective lens from contact with the sample"
      },
      {
        "question": "In fluorescence microscopy, what is the function of the dichroic mirror?",
        "options": [
          "It reflects light of certain wavelengths (excitation) and transmits others (emission) to separate excitation and emission light paths",
          "It focuses the light onto the specimen",
          "It blocks all extraneous light from the environment",
          "It evenly illuminates the sample"
        ],
        "answer": "It reflects light of certain wavelengths (excitation) and transmits others (emission) to separate excitation and emission light paths"
      },
      {
        "question": "To observe a small three-dimensional object like an insect at low magnification (around 20x) with a sense of depth, which microscope is most suitable?",
        "options": [
          "Compound light microscope",
          "Stereomicroscope (dissecting microscope)",
          "Scanning electron microscope",
          "Phase contrast microscope"
        ],
        "answer": "Stereomicroscope (dissecting microscope)"
      },
      {
        "question": "As magnification increases on a microscope, what generally happens to the depth of field (the thickness of the specimen that is in focus)?",
        "options": ["It decreases", "It increases", "It remains the same", "It becomes infinite"],
        "answer": "It decreases"
      },
      {
        "question": "Differential Interference Contrast (DIC) microscopy is characterized by:",
        "options": [
          "Producing a pseudo 3D effect, enhancing contrast in unstained specimens",
          "Using ultraviolet light and fluorescent dyes",
          "Requiring samples to be frozen",
          "Being identical to darkfield microscopy"
        ],
        "answer": "Producing a pseudo 3D effect, enhancing contrast in unstained specimens"
      },
      {
        "question": "What is a primary difference between Scanning Electron Microscopy (SEM) and Transmission Electron Microscopy (TEM)?",
        "options": [
          "SEM provides 3D surface images, while TEM looks through thin sections to reveal internal structures",
          "SEM uses visible light and TEM uses electrons",
          "TEM has lower resolving power than SEM",
          "SEM can observe live specimens, TEM cannot"
        ],
        "answer": "SEM provides 3D surface images, while TEM looks through thin sections to reveal internal structures"
      },
      {
        "question": "Which part of a microscope holds the objective lenses and rotates to switch between different magnifications?",
        "options": ["Revolving nosepiece (turret)", "Stage", "Condenser", "Objective mount"],
        "answer": "Revolving nosepiece (turret)"
      },
      {
        "question": "In preparing a specimen for scanning electron microscopy (SEM), why is the specimen often sputter-coated with a thin layer of metal (like gold)?",
        "options": [
          "To make the specimen surface electrically conductive and improve image quality",
          "To prevent the specimen from drying out",
          "To stain the specimen for better visibility",
          "To neutralize all biological activity"
        ],
        "answer": "To make the specimen surface electrically conductive and improve image quality"
      },
      {
        "question": "If you move a slide to the left on a compound light microscope stage, in which direction does the image appear to move through the eyepieces?",
        "options": ["To the right", "To the left", "Upwards", "Downwards"],
        "answer": "To the right"
      },
      {
        "question": "If a 1 mm specimen appears to be 100 mm when viewed under a microscope, what magnification are you using?",
        "options": ["100x", "10x", "1000x", "50x"],
        "answer": "100x"
      },
      {
        "question": "Images captured by electron microscopes are typically:",
        "options": [
          "Black and white (grayscale)",
          "True color images",
          "In false color without any post-processing",
          "Holographic 3D images"
        ],
        "answer": "Black and white (grayscale)"
      },
      {
        "question": "A microscope with two eyepieces is called a ________ microscope.",
        "options": ["Binocular", "Bifocal", "Monocular", "Dual-lens"],
        "answer": "Binocular"
      },
      {
        "question": "On a microscope objective labeled '100x/1.25', the '1.25' refers to the lens's:",
        "options": [
          "Numerical aperture",
          "Field number",
          "Tube length (in cm)",
          "Working distance (in mm)"
        ],
        "answer": "Numerical aperture"
      },
      {
        "question": "What is a major disadvantage of electron microscopes compared to light microscopes?",
        "options": [
          "They cannot image living specimens due to the required vacuum and extensive sample preparation",
          "They have lower resolution than light microscopes",
          "They are limited to 1000x magnification",
          "They cannot visualize internal structures at all"
        ],
        "answer": "They cannot image living specimens due to the required vacuum and extensive sample preparation"
      },
      {
        "question": "In microscopy, 'empty magnification' refers to:",
        "options": [
          "Increasing magnification without gaining additional detail (beyond the resolving power)",
          "Using a microscope with no sample on the slide",
          "An image that has been overexposed",
          "Magnification that exceeds 1000x"
        ],
        "answer": "Increasing magnification without gaining additional detail (beyond the resolving power)"
      },
      {
        "question": "When switching from a low-power to a high-power objective, why is it often necessary to increase the light or open the diaphragm wider?",
        "options": [
          "High-power objectives have smaller apertures and let in less light",
          "High-power objectives are farther from the light source",
          "Low-power objectives filter out light",
          "High-power objectives create a darker image by design"
        ],
        "answer": "High-power objectives have smaller apertures and let in less light"
      }
    ],
    "Genetics": [
      {
        "question": "What is the primary function of the lac operon in E. coli?",
        "options": [
          "Regulation of lactose metabolism",
          "DNA replication",
          "Protein synthesis",
          "Cell division"
        ],
        "answer": "Regulation of lactose metabolism"
      },
      {
        "question": "Which structure in bacteria often contains genes for antibiotic resistance and can be transferred between cells?",
        "options": ["Plasmid", "Pilus", "Capsule", "Nucleoid"],
        "answer": "Plasmid"
      },
      {
        "question": "DNA methylation, in the context of epigenetics, typically leads to:",
        "options": [
          "Transcriptional repression",
          "Enhanced transcription",
          "Post-translational modification of proteins",
          "Activation of RNA interference"
        ],
        "answer": "Transcriptional repression"
      },
      {
        "question": "In genetic engineering, what is the role of a luciferase gene when included in a plasmid?",
        "options": [
          "To act as a reporter gene that produces bioluminescence for tracking gene expression",
          "To break down toxic substances",
          "To initiate DNA replication",
          "To confer antibiotic resistance"
        ],
        "answer": "To act as a reporter gene that produces bioluminescence for tracking gene expression"
      },
      {
        "question": "What is the eukaryotic equivalent of the Shine-Dalgarno sequence in mRNA translation initiation?",
        "options": ["Kozak sequence", "TATA box", "Pribnow box", "Poly-A tail"],
        "answer": "Kozak sequence"
      },
      {
        "question": "What is the role of single-stranded DNA-binding (SSB) proteins in DNA replication?",
        "options": [
          "They stabilize unwound DNA strands and prevent them from reannealing",
          "They unwind the DNA helix",
          "They synthesize RNA primers",
          "They join Okazaki fragments"
        ],
        "image": "microbe-images/DNApol.jpg",
        "answer": "They stabilize unwound DNA strands and prevent them from reannealing"
      },
      {
        "question": "Which enzyme is primarily responsible for adding nucleotides to the new DNA strand during DNA replication in E. coli?",
        "options": ["DNA polymerase III", "DNA polymerase I", "RNA polymerase", "DNA ligase"],
        "answer": "DNA polymerase III"
      },
      {
        "question": "Which enzyme unwinds the DNA double helix at the replication fork?",
        "options": ["Helicase", "Ligase", "Primase", "Topoisomerase"],
        "answer": "Helicase"
      },
      {
        "question": "Which enzyme synthesizes short RNA primers on the lagging strand during DNA replication?",
        "options": ["Primase", "Helicase", "DNA polymerase I", "DNA polymerase III"],
        "answer": "Primase"
      },
      {
        "question": "In E. coli DNA replication, which enzyme removes the RNA primers and fills in the gaps with DNA?",
        "options": ["DNA polymerase I", "DNA polymerase III", "RNase H", "DNA ligase"],
        "answer": "DNA polymerase I"
      },
      {
        "question": "Which enzyme helps relieve the supercoiling tension ahead of the replication fork in bacteria?",
        "options": [
          "DNA gyrase (a type of topoisomerase)",
          "Helicase",
          "DNA polymerase",
          "Single-strand binding protein"
        ],
        "answer": "DNA gyrase (a type of topoisomerase)"
      },
      {
        "question": "The lac operon is an inducible operon activated by lactose. The trp operon, active until tryptophan is abundant, is an example of a ______ operon.",
        "options": ["Repressible", "Inducible", "Constitutive", "Catabolic"],
        "answer": "Repressible"
      },
      {
        "question": "Attenuation is a regulatory mechanism that causes premature termination of transcription. It is famously used to regulate which operon in E. coli?",
        "options": ["trp operon", "lac operon", "ara operon", "gal operon"],
        "answer": "trp operon"
      },
      {
        "question": "In bacterial genetics, an operon is best described as:",
        "options": [
          "A group of genes in bacteria expressed from a single promoter and transcribed together as one mRNA",
          "A protein that initiates DNA replication",
          "A segment of DNA that signals termination of transcription",
          "A type of mutation in a gene"
        ],
        "answer": "A group of genes in bacteria expressed from a single promoter and transcribed together as one mRNA"
      },
      {
        "question": "In eukaryotic cells, coding regions of a gene are called exons. The non-coding regions that are removed from the RNA transcript are called ______.",
        "options": ["Introns", "Promoters", "Codons", "Anticodons"],
        "answer": "Introns"
      },
      {
        "question": "What is the process of synthesizing an RNA copy from a DNA template?",
        "options": ["Transcription", "Translation", "Replication", "Transposition"],
        "answer": "Transcription"
      },
      {
        "question": "What is the process of synthesizing a protein from an mRNA template?",
        "options": ["Translation", "Transcription", "Replication", "Transformation"],
        "answer": "Translation"
      },
      {
        "question": "Which molecules carry amino acids to the ribosome and match them with the codons on the mRNA during protein synthesis?",
        "options": ["tRNA molecules", "mRNA molecules", "rRNA molecules", "DNA molecules"],
        "answer": "tRNA molecules"
      },
      {
        "question": "On a tRNA molecule, the set of three bases that pairs with the complementary codon on mRNA is called the:",
        "options": ["Anticodon", "Codon", "Promoter", "Origin"],
        "answer": "Anticodon"
      },
      {
        "question": "How many nucleotides make up a codon in the genetic code?",
        "options": ["3", "1", "2", "4"],
        "answer": "3"
      },
      {
        "question": "How many different codons are possible in the genetic code?",
        "options": ["64", "20", "16", "32"],
        "answer": "64"
      },
      {
        "question": "Which of the following sequences is a stop codon (termination codon) in mRNA?",
        "options": ["UAA", "AUG", "UGG", "UAC"],
        "answer": "UAA"
      },
      {
        "question": "Bacterial mRNA often contains multiple genes in one transcript. Such an mRNA encoding several proteins is called:",
        "options": [
          "Polycistronic mRNA",
          "Monocistronic mRNA",
          "Polyadenylated mRNA",
          "Spliced mRNA"
        ],
        "answer": "Polycistronic mRNA"
      },
      {
        "question": "Why can translation begin in bacteria before transcription of the mRNA is finished?",
        "options": [
          "Because bacteria have no nucleus separating the processes",
          "Because bacterial ribosomes work faster than RNA polymerase",
          "Because bacterial mRNA has special ribosome-binding proteins",
          "Because transcription and translation use the same enzyme in bacteria"
        ],
        "answer": "Because bacteria have no nucleus separating the processes"
      },
      {
        "question": "Which feature is found in eukaryotic mRNA but not in prokaryotic mRNA?",
        "options": [
          "5' cap and 3' poly-A tail (post-transcriptional modifications)",
          "Start and stop codons",
          "Ribosome-binding site",
          "Exposed codons"
        ],
        "answer": "5' cap and 3' poly-A tail (post-transcriptional modifications)"
      },
      {
        "question": "Which ribosomal RNA of the bacterial ribosome is commonly used for species identification due to its conserved and variable regions?",
        "options": ["16S rRNA", "23S rRNA", "5S rRNA", "18S rRNA"],
        "answer": "16S rRNA"
      },
      {
        "question": "What is a bacteriophage?",
        "options": [
          "A virus that infects bacteria",
          "A type of bacterium that consumes viruses",
          "A plasmid that carries antibiotic resistance",
          "An enzyme that digests bacterial cell walls"
        ],
        "answer": "A virus that infects bacteria"
      },
      {
        "question": "What is a transposon (\"jumping gene\")?",
        "options": [
          "A DNA sequence that can change its position within the genome",
          "A virus that integrates into a bacterial chromosome",
          "An operon under constant expression",
          "A type of plasmid used for gene transfer"
        ],
        "answer": "A DNA sequence that can change its position within the genome"
      },
      {
        "question": "According to the central dogma of molecular biology, the flow of genetic information is:",
        "options": [
          "DNA → RNA → Protein",
          "RNA → DNA → Protein",
          "DNA → Protein → RNA",
          "Protein → RNA → DNA"
        ],
        "answer": "DNA → RNA → Protein"
      },
      {
        "question": "Which enzyme allows retroviruses to synthesize DNA from their RNA genome?",
        "options": [
          "Reverse transcriptase",
          "RNA polymerase",
          "DNA polymerase I",
          "Protease"
        ],
        "answer": "Reverse transcriptase"
      },
      {
        "question": "The bacterial chromosome is typically:",
        "options": [
          "A single circular double-stranded DNA molecule",
          "Multiple linear DNA molecules",
          "Single-stranded DNA",
          "RNA instead of DNA"
        ],
        "answer": "A single circular double-stranded DNA molecule"
      },
      {
        "question": "In bacterial transcription, the sigma factor is important for:",
        "options": [
          "Helping RNA polymerase recognize and bind to promoter regions to initiate transcription",
          "Termination of transcription",
          "Ribosome binding to mRNA",
          "DNA replication licensing"
        ],
        "answer": "Helping RNA polymerase recognize and bind to promoter regions to initiate transcription"
      },
      {
        "question": "Gene transfer in bacteria that involves direct contact and transfer of DNA through a pilus is called:",
        "options": ["Conjugation", "Transformation", "Transduction", "Translation"],
        "answer": "Conjugation"
      },
      {
        "question": "When a bacteriophage integrates its genome into a bacterial host's chromosome and becomes latent, the phage genome is called a:",
        "options": ["Prophage", "Plasmid", "Retrovirus", "Virion"],
        "answer": "Prophage"
      },
      {
        "question": "In which direction can DNA polymerase add new nucleotides during DNA synthesis?",
        "options": [
          "5' to 3' direction only",
          "3' to 5' direction only",
          "Both 5' to 3' and 3' to 5'",
          "It depends on leading vs lagging strand"
        ],
        "answer": "5' to 3' direction only"
      },
      {
        "question": "The consensus sequence TATAAT at the -10 region of a bacterial promoter is known as the:",
        "options": [
          "Pribnow box (−10 element)",
          "Shine-Dalgarno sequence",
          "TATA box",
          "Operator site"
        ],
        "answer": "Pribnow box (−10 element)"
      },
      {
        "question": "In bacteria, the Shine-Dalgarno sequence is:",
        "options": [
          "A ribosomal binding site on mRNA that helps initiate translation by aligning the ribosome with the start codon",
          "A sequence signaling the start of DNA replication",
          "The sequence signaling transcription termination",
          "The sequence of the start codon itself (AUG)"
        ],
        "answer": "A ribosomal binding site on mRNA that helps initiate translation by aligning the ribosome with the start codon"
      },
      {
        "question": "Each nucleotide in DNA is composed of which three components?",
        "options": [
          "A deoxyribose sugar, a phosphate group, and a nitrogenous base",
          "Ribose sugar, a phosphate, and a base",
          "A sugar and a base only",
          "An amino acid, a sugar, and a phosphate"
        ],
        "answer": "A deoxyribose sugar, a phosphate group, and a nitrogenous base"
      },
      {
        "question": "Bacteria primarily reproduce through a process of asexual cell division known as:",
        "options": ["Binary fission", "Mitosis", "Meiosis", "Conjugation"],
        "answer": "Binary fission"
      },
      {
        "question": "DNA replication in bacteria begins at a specific site on the chromosome called:",
        "options": [
          "The origin of replication (oriC)",
          "The promoter region",
          "The replication fork",
          "The telomere"
        ],
        "answer": "The origin of replication (oriC)"
      },
      {
        "question": "What was demonstrated by the Hershey-Chase blender experiment using bacteriophages labeled with radioactive phosphorus and sulfur?",
        "options": [
          "DNA, not protein, is the genetic material that viruses inject into bacteria",
          "Proteins are the genetic material of viruses",
          "Bacteriophages do not contain DNA",
          "RNA carries genetic information in all organisms"
        ],
        "answer": "DNA, not protein, is the genetic material that viruses inject into bacteria"
      }
    ],
    "Staining Techniques": [
      {
        "question": "What is the counterstain used in Gram staining?",
        "options": ["Ethanol", "Safranin", "Fe2O3", "HCl"],
        "answer": "Safranin"
      },
      {
        "question": "Which staining technique is used to identify Mycobacterium species?",
        "options": ["Gram stain", "Acid-fast stain", "Endospore stain", "Capsule stain"],
        "answer": "Acid-fast stain"
      },
      {
        "question": "What is the primary stain used in the Gram staining procedure?",
        "options": ["Crystal violet", "Safranin", "Methylene blue", "Carbol fuchsin"],
        "answer": "Crystal violet"
      },
      {
        "question": "In Gram staining, what reagent acts as the mordant?",
        "options": ["Gram's iodine", "Crystal violet", "Alcohol-acetone", "Safranin"],
        "answer": "Gram's iodine"
      },
      {
        "question": "During a Gram stain, which chemical is used to decolorize cells?",
        "options": ["Alcohol or acetone", "Water", "Gram's iodine", "Hydrochloric acid"],
        "answer": "Alcohol or acetone"
      },
      {
        "question": "After a correct Gram staining procedure, Gram-positive bacteria will appear _____, and Gram-negative bacteria will appear _____.",
        "options": ["purple; pink", "pink; purple", "blue; green", "red; colorless"],
        "answer": "purple; pink"
      },
      {
        "question": "What structural difference between Gram-positive and Gram-negative bacteria is responsible for their different Gram stain results?",
        "options": [
          "Gram-positive bacteria have a thick peptidoglycan layer and no outer membrane, whereas Gram-negatives have a thinner peptidoglycan layer and an outer membrane",
          "Gram-positive bacteria have no peptidoglycan",
          "Gram-negative bacteria lack a cell membrane",
          "Gram-negative bacteria have more teichoic acids"
        ],
        "answer": "Gram-positive bacteria have a thick peptidoglycan layer and no outer membrane, whereas Gram-negatives have a thinner peptidoglycan layer and an outer membrane"
      },
      {
        "question": "In Gram staining, what is the purpose of adding Gram's iodine after the crystal violet?",
        "options": [
          "It forms a complex with crystal violet, making it harder to wash out of Gram-positive cells",
          "It dehydrates the cell wall",
          "It serves as a counterstain",
          "It dissolves the outer membrane of Gram-negative cells"
        ],
        "answer": "It forms a complex with crystal violet, making it harder to wash out of Gram-positive cells"
      },
      {
        "question": "Which step of the Gram stain is the most critical for determining the outcome (Gram-positive vs Gram-negative)?",
        "options": [
          "The decolorization step with alcohol/acetone",
          "The primary stain (crystal violet) step",
          "The counterstain (safranin) step",
          "Heat fixing the slide"
        ],
        "answer": "The decolorization step with alcohol/acetone"
      },
      {
        "question": "If you over-decolorize a Gram stain, what might happen to Gram-positive cells?",
        "options": [
          "They may lose the primary stain and appear Gram-negative (pink)",
          "They will appear too purple",
          "They will form spores",
          "They will lyse on the slide"
        ],
        "answer": "They may lose the primary stain and appear Gram-negative (pink)"
      },
      {
        "question": "What is the primary dye used in the Ziehl-Neelsen acid-fast staining method?",
        "options": ["Carbol fuchsin", "Crystal violet", "Methylene blue", "Malachite green"],
        "answer": "Carbol fuchsin"
      },
      {
        "question": "In the acid-fast staining procedure, what is used to decolorize non-acid-fast cells?",
        "options": ["Acid-alcohol", "Ethanol only", "Water", "Acetone"],
        "answer": "Acid-alcohol"
      },
      {
        "question": "In the acid-fast stain, which counterstain is applied to visualize non-acid-fast cells?",
        "options": ["Methylene blue", "Safranin", "Crystal violet", "Carbol fuchsin"],
        "answer": "Methylene blue"
      },
      {
        "question": "Acid-fast bacteria will appear _____ after acid-fast staining, while non-acid-fast bacteria will appear _____.",
        "options": ["pink/red; blue", "purple; colorless", "blue; red", "green; pink"],
        "answer": "pink/red; blue"
      },
      {
        "question": "The cell walls of acid-fast bacteria have a high content of _____, which retains the primary stain even after acid-alcohol decolorization.",
        "options": ["mycolic acids", "peptidoglycan", "teichoic acids", "lipopolysaccharide"],
        "answer": "mycolic acids"
      },
      {
        "question": "Which stain would you use to visualize bacterial endospores?",
        "options": [
          "Schaeffer-Fulton endospore stain",
          "Gram stain",
          "Negative (capsule) stain",
          "Acid-fast stain"
        ],
        "answer": "Schaeffer-Fulton endospore stain"
      },
      {
        "question": "What is the primary stain used in the Schaeffer-Fulton endospore staining method?",
        "options": ["Malachite green", "Crystal violet", "Safranin", "Methylene blue"],
        "answer": "Malachite green"
      },
      {
        "question": "In the endospore stain, what counterstain is used to give color to the vegetative cells (non-spores)?",
        "options": ["Safranin", "Methylene blue", "Carbol fuchsin", "Crystal violet"],
        "answer": "Safranin"
      },
      {
        "question": "After an endospore stain, how do endospores and vegetative cells typically appear?",
        "options": [
          "Endospores appear green, and vegetative cells appear pink/red",
          "Endospores appear purple, and vegetative cells appear colorless",
          "Endospores appear pink, and vegetative cells appear blue",
          "Both endospores and vegetative cells appear green"
        ],
        "answer": "Endospores appear green, and vegetative cells appear pink/red"
      },
      {
        "question": "What step is often needed during endospore staining to allow the primary stain to penetrate the spores?",
        "options": [
          "Heating the slide (steam) while applying the primary stain",
          "Adding a detergent",
          "Prolonged incubation at cold temperature",
          "Using an acid decolorizer"
        ],
        "answer": "Heating the slide (steam) while applying the primary stain"
      },
      {
        "question": "Which two bacterial genera are known for forming endospores, often identified with an endospore stain?",
        "options": [
          "Bacillus and Clostridium",
          "Escherichia and Streptococcus",
          "Staphylococcus and Mycobacterium",
          "Salmonella and Vibrio"
        ],
        "answer": "Bacillus and Clostridium"
      },
      {
        "question": "What staining technique involves applying a dye to a bacterial smear without any other reagents, resulting in all cells being uniformly colored?",
        "options": [
          "Simple stain (using a single dye)",
          "Differential stain",
          "Gram stain",
          "Acid-fast stain"
        ],
        "answer": "Simple stain (using a single dye)"
      },
      {
        "question": "Which of the following is an example of a simple stain that could be used to observe bacteria?",
        "options": [
          "Methylene blue applied alone to a heat-fixed smear",
          "Gram staining of a sample",
          "Acid-fast staining of a culture",
          "Schaeffer-Fulton endospore staining"
        ],
        "answer": "Methylene blue applied alone to a heat-fixed smear"
      },
      {
        "question": "What is the main purpose of heat-fixing a bacterial smear before staining?",
        "options": [
          "To kill the bacteria and fix (attach) them to the slide",
          "To make the bacteria absorb stain more easily",
          "To decolorize Gram-negative bacteria",
          "To activate the dye"
        ],
        "answer": "To kill the bacteria and fix (attach) them to the slide"
      },
      {
        "question": "Which stain is typically used as a negative stain to visualize bacterial capsules?",
        "options": [
          "India ink or nigrosin (negative stain)",
          "Crystal violet",
          "Malachite green",
          "Methylene blue"
        ],
        "answer": "India ink or nigrosin (negative stain)"
      },
      {
        "question": "In a capsule staining procedure, how is the capsule usually visualized?",
        "options": [
          "As a clear halo around the cell against a dark background",
          "As a bright purple layer on the cell",
          "As a red-stained structure on the cell surface",
          "Capsules cannot be observed by light microscopy"
        ],
        "answer": "As a clear halo around the cell against a dark background"
      },
      {
        "question": "Which staining technique would be most appropriate to observe the presence and arrangement of flagella on bacteria?",
        "options": [
          "Flagella stain using a mordant (e.g., Ryu or silver stain)",
          "Gram stain",
          "Capsule stain",
          "Acid-fast stain"
        ],
        "answer": "Flagella stain using a mordant (e.g., Ryu or silver stain)"
      },
      {
        "question": "How does a flagella stain make bacterial flagella visible under a light microscope?",
        "options": [
          "It uses a mordant to coat and thicken the flagella before staining, making them visible",
          "It dyes the flagella fluorescent colors",
          "It dissolves everything but the flagella",
          "It uses an electron beam to highlight flagella"
        ],
        "answer": "It uses a mordant to coat and thicken the flagella before staining, making them visible"
      },
      {
        "question": "What distinguishes a differential stain from a simple stain in microbiology?",
        "options": [
          "A differential stain uses multiple steps and reagents to distinguish different types of organisms or structures, whereas a simple stain uses one dye to color all cells the same way",
          "A differential stain is easier to perform than a simple stain",
          "Simple stains require living cells, differential stains require fixed cells",
          "Differential stains are only used for eukaryotic cells"
        ],
        "answer": "A differential stain uses multiple steps and reagents to distinguish different types of organisms or structures, whereas a simple stain uses one dye to color all cells the same way"
      },
      {
        "question": "If the safranin counterstain is omitted in the Gram staining procedure, what would Gram-negative bacteria look like?",
        "options": ["Colorless (unstained)", "Purple", "Green", "Brown"],
        "answer": "Colorless (unstained)"
      },
      {
        "question": "If the decolorization step is skipped or done too briefly in a Gram stain, how might Gram-negative bacteria appear?",
        "options": [
          "They may incorrectly appear purple (Gram-positive)",
          "They would still appear pink",
          "They would be colorless",
          "They would appear green"
        ],
        "answer": "They may incorrectly appear purple (Gram-positive)"
      },
      {
        "question": "Which of the following genera include bacteria that are acid-fast?",
        "options": [
          "Mycobacterium and Nocardia",
          "Staphylococcus and Streptococcus",
          "Bacillus and Clostridium",
          "Escherichia and Proteus"
        ],
        "answer": "Mycobacterium and Nocardia"
      },
      {
        "question": "A negative staining technique (such as using India ink) is often employed to demonstrate the capsule of which pathogen?",
        "options": [
          "Klebsiella pneumoniae",
          "Mycobacterium tuberculosis",
          "Bacillus subtilis",
          "Escherichia coli (lab strain)"
        ],
        "answer": "Klebsiella pneumoniae"
      },
      {
        "question": "Which stain is commonly used to examine blood smears for parasites or intracellular microbes like Plasmodium or Chlamydia?",
        "options": ["Giemsa stain", "Gram stain", "Acid-fast stain", "Endospore stain"],
        "answer": "Giemsa stain"
      },
      {
        "question": "In a Gram-stained smear of Bacillus, you notice clear oval areas inside purple cells. These unstained regions are likely:",
        "options": [
          "Endospores, which do not take up the Gram stain",
          "Capsules, which cannot bind the dyes",
          "Flagella, which are too thin to see",
          "Artifacts from staining"
        ],
        "answer": "Endospores, which do not take up the Gram stain"
      },
      {
        "question": "Which bacteria will not stain well with the Gram stain due to lack of a cell wall?",
        "options": [
          "Mycoplasma (e.g., Mycoplasma pneumoniae)",
          "Staphylococcus",
          "Mycobacterium",
          "Pseudomonas"
        ],
        "answer": "Mycoplasma (e.g., Mycoplasma pneumoniae)"
      },
      {
        "question": "Which dye can be used to stain all cells by binding to DNA (often viewed under a fluorescence microscope)?",
        "options": [
          "DAPI (a fluorescent DNA-binding dye)",
          "Safranin",
          "Crystal violet",
          "Malachite green"
        ],
        "answer": "DAPI (a fluorescent DNA-binding dye)"
      },
      {
        "question": "To specifically identify a particular bacterial species in a sample, one can use a staining method that employs antibodies tagged with fluorescent dyes. This technique is known as:",
        "options": [
          "Immunofluorescence staining",
          "Negative staining",
          "Simple staining",
          "Gram-variable staining"
        ],
        "answer": "Immunofluorescence staining"
      },
      {
        "question": "Endospores are difficult to stain with routine methods due to their tough outer coating composed of ______, which is why heat is used to drive stain into them.",
        "options": [
          "keratin-like proteins",
          "mycolic acids",
          "peptidoglycan",
          "lipopolysaccharide"
        ],
        "answer": "keratin-like proteins"
      }
    ],
    "Metabolism": [
      {
        "question": "Which metabolic process allows cyanobacteria to produce biofuels?",
        "options": [
          "Anaerobic respiration",
          "Glycolysis",
          "Photosynthesis",
          "Tricarboxylic acid cycle"
        ],
        "answer": "Photosynthesis",
        "explanation": "Cyanobacteria produce biofuels through photosynthesis and metabolic engineering, converting carbon dioxide and sunlight into organic compounds like sugars, which can then be further processed into biofuels like ethanol or butanol."
      },
      {
        "question": "What is the main purpose of the Krebs cycle in metabolism?",
        "options": ["ATP production", "Oxygen storage", "Fat synthesis", "Water generation"],
        "answer": "ATP production"
      },
      {
        "question": "Catabolite repression in bacteria refers to the suppression of certain metabolic pathways in the presence of what preferred energy source?",
        "options": ["Glucose", "Lactose", "Fructose", "Sucrose"],
        "answer": "Glucose"
      },
      {
        "question": "Organisms like cyanobacteria that use light for energy and CO2 as a carbon source are called:",
        "options": [
          "Photoautotrophs",
          "Photoheterotrophs",
          "Chemoautotrophs",
          "Chemoheterotrophs"
        ],
        "answer": "Photoautotrophs"
      },
      {
        "question": "Most bacteria that cause disease in humans use organic compounds for both energy and carbon. They are classified as:",
        "options": [
          "Chemoheterotrophs",
          "Photoautotrophs",
          "Photoheterotrophs",
          "Chemoautotrophs"
        ],
        "answer": "Chemoheterotrophs"
      },
      {
        "question": "Nitrifying bacteria obtain energy by oxidizing ammonia to nitrate and use CO2 as carbon source. These bacteria are:",
        "options": [
          "Chemoautotrophs (chemolithoautotrophs)",
          "Photoheterotrophs",
          "Photoautotrophs",
          "Chemoheterotrophs"
        ],
        "answer": "Chemoautotrophs (chemolithoautotrophs)"
      },
      {
        "question": "In aerobic respiration, the final electron acceptor in the electron transport chain is:",
        "options": ["Oxygen (O2)", "Nitrate (NO3-)", "Carbon dioxide (CO2)", "ADP"],
        "answer": "Oxygen (O2)"
      },
      {
        "question": "Which molecule can be used as a final electron acceptor in anaerobic respiration by some bacteria?",
        "options": ["Nitrate (NO3-)", "Oxygen (O2)", "Glucose", "ATP"],
        "answer": "Nitrate (NO3-)"
      },
      {
        "question": "In lactic acid fermentation, what is pyruvate reduced to?",
        "options": ["Lactate (lactic acid)", "Ethanol", "Acetyl-CoA", "Carbon dioxide and water"],
        "answer": "Lactate (lactic acid)"
      },
      {
        "question": "Which process yields the most ATP per glucose molecule consumed?",
        "options": [
          "Aerobic respiration",
          "Anaerobic respiration",
          "Fermentation",
          "All yield the same"
        ],
        "answer": "Aerobic respiration"
      },
      {
        "question": "Where in a bacterial cell do the reactions of glycolysis and the Krebs cycle occur?",
        "options": [
          "In the cytoplasm (for both glycolysis and Krebs cycle)",
          "In mitochondria",
          "On the inner side of the cell wall",
          "In the periplasmic space"
        ],
        "answer": "In the cytoplasm (for both glycolysis and Krebs cycle)"
      },
      {
        "question": "In bacteria, the electron transport chain (ETC) is located in the:",
        "options": ["Cell membrane", "Cytoplasm", "Nucleus", "Cell wall"],
        "answer": "Cell membrane"
      },
      {
        "question": "The electron transport chain creates a proton gradient across the bacterial cell membrane. The flow of protons back into the cell drives ATP synthesis by the enzyme:",
        "options": ["ATP synthase", "DNA polymerase", "Protease", "Ribosome"],
        "answer": "ATP synthase"
      },
      {
        "question": "Why do cells carry out fermentation in the absence of oxygen?",
        "options": [
          "To regenerate NAD+ from NADH so glycolysis can continue producing ATP",
          "To produce more ATP than aerobic respiration",
          "To consume excess oxygen",
          "To produce additional electrons for the ETC"
        ],
        "answer": "To regenerate NAD+ from NADH so glycolysis can continue producing ATP"
      },
      {
        "question": "Methanogenic archaea use CO2 as an electron acceptor and produce ___ as a metabolic end product.",
        "options": ["methane (CH4)", "oxygen (O2)", "nitrate (NO3-)", "hydrogen sulfide (H2S)"],
        "answer": "methane (CH4)"
      },
      {
        "question": "What is nitrogen fixation and which organisms typically perform it?",
        "options": [
          "Conversion of atmospheric N2 into ammonia by certain bacteria (like Rhizobium and cyanobacteria)",
          "Reduction of nitrate to nitrogen gas by soil fungi",
          "Incorporation of nitrogen from amino acids into proteins by all organisms",
          "Conversion of ammonia to nitrate by nitrifying bacteria"
        ],
        "answer": "Conversion of atmospheric N2 into ammonia by certain bacteria (like Rhizobium and cyanobacteria)"
      },
      {
        "question": "The process by which bacteria convert nitrate (NO3-) into nitrogen gas (N2) under anaerobic conditions is called:",
        "options": ["Denitrification", "Nitrogen fixation", "Nitrification", "Ammonification"],
        "answer": "Denitrification"
      },
      {
        "question": "Nitrification is a metabolic process carried out by chemoautotrophic bacteria. What does nitrification involve?",
        "options": [
          "Oxidation of ammonia (NH3) to nitrite (NO2-) and then to nitrate (NO3-)",
          "Reduction of nitrate to nitrogen gas",
          "Conversion of atmospheric N2 to ammonia",
          "Assimilation of nitrate into amino acids"
        ],
        "answer": "Oxidation of ammonia (NH3) to nitrite (NO2-) and then to nitrate (NO3-)"
      },
      {
        "question": "Which enzyme is responsible for the direct formation of ATP during glycolysis and the Krebs cycle via substrate-level phosphorylation?",
        "options": [
          "A kinase enzyme (e.g., phosphoglycerate kinase in glycolysis)",
          "ATP synthase",
          "DNA polymerase",
          "Pyruvate dehydrogenase"
        ],
        "answer": "A kinase enzyme (e.g., phosphoglycerate kinase in glycolysis)"
      },
      {
        "question": "Some photosynthetic bacteria do not produce oxygen as a byproduct of photosynthesis. Such bacteria (e.g., purple sulfur bacteria) perform ______ photosynthesis.",
        "options": ["anoxygenic", "oxygenic", "aerobic", "chemosynthetic"],
        "answer": "anoxygenic"
      },
      {
        "question": "An obligate aerobe is an organism that:",
        "options": [
          "requires oxygen for growth and cannot survive without it",
          "is killed by the presence of oxygen",
          "grows only in the absence of oxygen",
          "can grow with or without oxygen"
        ],
        "answer": "requires oxygen for growth and cannot survive without it"
      },
      {
        "question": "An organism that does not use oxygen but can tolerate its presence (oxygen is not toxic to it) is called an:",
        "options": [
          "Aerotolerant anaerobe",
          "Obligate anaerobe",
          "Facultative aerobe",
          "Microaerophile"
        ],
        "answer": "Aerotolerant anaerobe"
      },
      {
        "question": "Which product of yeast fermentation causes bread dough to rise by forming gas bubbles?",
        "options": ["Carbon dioxide", "Lactic acid", "Ethanol", "Oxygen"],
        "answer": "Carbon dioxide"
      },
      {
        "question": "The yeast Saccharomyces cerevisiae is widely used in industry because it ferments sugars to produce:",
        "options": ["Ethanol and CO2", "Lactic acid", "Methane", "Acetic acid"],
        "answer": "Ethanol and CO2"
      },
      {
        "question": "Bacteria like Lactobacillus are used in yogurt production. They ferment lactose to primarily produce:",
        "options": ["Lactic acid", "Ethanol", "Butyric acid", "Carbon dioxide"],
        "answer": "Lactic acid"
      },
      {
        "question": "About how many ATP molecules can a bacterium gain from completely oxidizing one glucose via aerobic respiration?",
        "options": ["~38 ATP", "~2 ATP", "~8 ATP", "~4 ATP"],
        "answer": "~38 ATP"
      },
      {
        "question": "How many net ATP are produced per glucose molecule during fermentation (glycolysis only)?",
        "options": ["2", "4", "8", "36"],
        "answer": "2"
      },
      {
        "question": "Facultative anaerobes such as E. coli will generate energy by ______ when oxygen is available, but switch to ______ in its absence.",
        "options": [
          "aerobic respiration; fermentation",
          "fermentation; aerobic respiration",
          "photosynthesis; respiration",
          "anaerobic respiration; photosynthesis"
        ],
        "answer": "aerobic respiration; fermentation"
      },
      {
        "question": "Catalase is an enzyme produced by many aerobes. It helps them by converting hydrogen peroxide (H2O2) into:",
        "options": [
          "Water and oxygen (bubbles)",
          "Hydroxyl radicals",
          "Carbon dioxide and water",
          "Glucose and oxygen"
        ],
        "answer": "Water and oxygen (bubbles)"
      },
      {
        "question": "Obligate anaerobes are often killed by oxygen because they lack enzymes like superoxide dismutase. What does superoxide dismutase do?",
        "options": [
          "Converts superoxide radicals (O2-) into hydrogen peroxide (H2O2), reducing oxidative stress",
          "Binds oxygen for use in metabolism",
          "Generates superoxide radicals to kill other microbes",
          "Helps in fixing oxygen into organic compounds"
        ],
        "answer": "Converts superoxide radicals (O2-) into hydrogen peroxide (H2O2), reducing oxidative stress"
      },
      {
        "question": "Respiration (aerobic or anaerobic) differs from fermentation in that respiration:",
        "options": [
          "Uses an electron transport chain and external electron acceptors to generate ATP, whereas fermentation relies only on substrate-level phosphorylation",
          "Does not involve an electron transport chain",
          "Produces lactic acid as an end product",
          "Occurs only in the absence of oxygen"
        ],
        "answer": "Uses an electron transport chain and external electron acceptors to generate ATP, whereas fermentation relies only on substrate-level phosphorylation"
      },
      {
        "question": "Substrate-level phosphorylation refers to:",
        "options": [
          "Direct synthesis of ATP by transferring a phosphate to ADP during a specific reaction (like in glycolysis or Krebs cycle)",
          "ATP production using a proton gradient and ATP synthase",
          "ATP production using light energy",
          "Phosphate removal from ATP to release energy"
        ],
        "answer": "Direct synthesis of ATP by transferring a phosphate to ADP during a specific reaction (like in glycolysis or Krebs cycle)"
      },
      {
        "question": "Thermophilic bacteria have enzymes that function optimally at high temperatures. What adaptation helps their enzymes not denature at such temperatures?",
        "options": [
          "More stable protein structures (e.g., more ionic bonds and hydrophobic cores)",
          "Higher GC content in DNA",
          "Use of colder metabolic pathways",
          "They lack proteins entirely"
        ],
        "answer": "More stable protein structures (e.g., more ionic bonds and hydrophobic cores)"
      },
      {
        "question": "Enzymes like amylase, secreted by bacteria to break down starch into sugars, are examples of:",
        "options": [
          "exoenzymes involved in catabolism",
          "endotoxins",
          "antibodies",
          "anabolic hormones"
        ],
        "answer": "exoenzymes involved in catabolism"
      },
      {
        "question": "What enzyme would a bacterium secrete to break down starch (a polysaccharide) into simpler sugars?",
        "options": ["Amylase", "Protease", "Lipase", "Cellulase"],
        "answer": "Amylase"
      },
      {
        "question": "Bacteria that decompose proteins release enzymes to break them into amino acids. These enzymes are known as:",
        "options": ["Proteases", "Amylases", "Ligases", "Isomerases"],
        "answer": "Proteases"
      },
      {
        "question": "Which enzyme allows certain bacteria to digest lipids (fats) by hydrolyzing triglycerides into fatty acids and glycerol?",
        "options": ["Lipase", "Protease", "Amylase", "Polymerase"],
        "answer": "Lipase"
      },
      {
        "question": "Some soil bacteria and gut microbes can break down cellulose (from plant fiber) into glucose. The enzyme that catalyzes this reaction is:",
        "options": ["Cellulase", "Amylase", "Protease", "Lipase"],
        "answer": "Cellulase"
      },
      {
        "question": "In metabolic terms, catabolism is the process of _______, while anabolism is the process of _______.",
        "options": [
          "breaking down molecules to release energy; building molecules which requires energy",
          "building molecules which requires energy; breaking down molecules to release energy",
          "synthesizing ATP; breaking down ATP",
          "photosynthesis; respiration"
        ],
        "answer": "breaking down molecules to release energy; building molecules which requires energy"
      },
      {
        "question": "ATP (adenosine triphosphate) is critical in metabolism because it:",
        "options": [
          "acts as the main energy currency, transferring energy from catabolic to anabolic reactions",
          "stores genetic information",
          "forms the plasma membrane",
          "serves as a building block for proteins"
        ],
        "answer": "acts as the main energy currency, transferring energy from catabolic to anabolic reactions"
      },
      {
        "question": "During metabolism, NAD+ and FAD are converted to NADH and FADH2. What is the significance of NADH and FADH2?",
        "options": [
          "They carry high-energy electrons to the electron transport chain for ATP generation",
          "They directly supply oxygen to the cell",
          "They are waste products to be excreted",
          "They act as enzymes in glycolysis"
        ],
        "answer": "They carry high-energy electrons to the electron transport chain for ATP generation"
      },
      {
        "question": "Most enzymes have an optimal temperature. What happens to most bacterial enzymes at significantly higher temperatures (e.g., above their optimal range)?",
        "options": [
          "They denature (lose structure), causing a sharp decrease in metabolic activity",
          "They work even faster indefinitely",
          "They become Gram-variable",
          "They start producing oxygen"
        ],
        "answer": "They denature (lose structure), causing a sharp decrease in metabolic activity"
      },
      {
        "question": "Cyanide is a deadly poison that binds to cytochrome c oxidase in the electron transport chain. How does cyanide affect cellular respiration?",
        "options": [
          "It stops the electron transport chain, preventing ATP production by oxidative phosphorylation",
          "It speeds up the Krebs cycle",
          "It causes glycolysis to produce more ATP",
          "It makes cells switch to using carbon dioxide as an electron acceptor"
        ],
        "answer": "It stops the electron transport chain, preventing ATP production by oxidative phosphorylation"
      }
    ],
    "Pathogenesis": [
      {
        "question": "Which class of antibiotics targets bacterial cell wall synthesis and includes penicillin?",
        "options": ["Tetracyclines", "Beta-lactams", "Fluoroquinolones", "Macrolides"],
        "answer": "Beta-lactams"
      },
      {
        "question": "Which pathogen causes tuberculosis?",
        "options": [
          "Streptococcus pneumoniae",
          "Mycobacterium tuberculosis",
          "Escherichia coli",
          "Salmonella enterica"
        ],
        "answer": "Mycobacterium tuberculosis"
      },
      {
        "question": "Which bacterial structure is a major virulence factor for Neisseria meningitidis and helps evade host immune responses?",
        "options": ["Capsule", "Pilus", "Endospore", "Flagellum"],
        "answer": "Capsule"
      },
      {
        "question": "Endotoxins are primarily composed of which macromolecule?",
        "options": [
          "Proteins",
          "Lipopolysaccharides",
          "Peptidoglycans",
          "Nucleic acids"
        ],
        "answer": "Lipopolysaccharides"
      },
      {
        "question": "Which toxin inhibits acetylcholine release, leading to flaccid paralysis?",
        "options": [
          "Tetanospasmin",
          "Botulinum toxin",
          "Shiga toxin",
          "Diphtheria toxin"
        ],
        "answer": "Botulinum toxin"
      },
      {
        "question": "What is the primary function of hemolysins in bacterial pathogenesis?",
        "options": [
          "Inhibiting protein synthesis",
          "Breaking down red blood cells",
          "Preventing phagocytosis",
          "Neutralizing host antibodies"
        ],
        "answer": "Breaking down red blood cells"
      },
      {
        "question": "Which bacterium is known for causing necrotizing fasciitis (\"flesh-eating disease\")?",
        "options": [
          "Pseudomonas aeruginosa",
          "Clostridium botulinum",
          "Streptococcus pyogenes",
          "Staphylococcus epidermidis"
        ],
        "answer": "Streptococcus pyogenes"
      },
      {
        "question": "What is the main reason why Gram-negative bacteria are often more resistant to certain antibiotics compared to Gram-positive bacteria?",
        "options": [
          "Presence of teichoic acids in their cell wall",
          "Thicker peptidoglycan layer",
          "An outer membrane with selective porins that restrict entry",
          "Lack of a cell wall"
        ],
        "answer": "An outer membrane with selective porins that restrict entry"
      },
      {
        "question": "Which stage of a viral infection involves the virus integrating its genetic material into the host genome?",
        "options": ["Lytic phase", "Lysogenic phase", "Endocytosis", "Assembly"],
        "answer": "Lysogenic phase"
      },
      {
        "question": "Which toxin causes the muscle spasms and \"lockjaw\" characteristic of tetanus by blocking inhibitory neurotransmitters?",
        "options": [
          "Tetanospasmin (tetanus toxin)",
          "Botulinum toxin",
          "Cholera toxin",
          "Shiga toxin"
        ],
        "answer": "Tetanospasmin (tetanus toxin)"
      },
      {
        "question": "Cholera, marked by severe watery diarrhea, is caused by the bacterium:",
        "options": [
          "Vibrio cholerae",
          "Salmonella Typhi",
          "Escherichia coli",
          "Staphylococcus aureus"
        ],
        "answer": "Vibrio cholerae"
      },
      {
        "question": "The bubonic plague (Black Death) is caused by which bacterium?",
        "options": [
          "Yersinia pestis",
          "Bacillus anthracis",
          "Clostridium perfringens",
          "Yersinia pseudotuberculosis"
        ],
        "answer": "Yersinia pestis"
      },
      {
        "question": "Lyme disease, transmitted by ticks, is caused by which spiral-shaped bacterium?",
        "options": [
          "Borrelia burgdorferi",
          "Treponema pallidum",
          "Rickettsia rickettsii",
          "Borrelia recurrentis"
        ],
        "answer": "Borrelia burgdorferi"
      },
      {
        "question": "Syphilis is a sexually transmitted infection caused by the spirochete:",
        "options": [
          "Treponema pallidum",
          "Neisseria gonorrhoeae",
          "Chlamydia trachomatis",
          "Human papillomavirus"
        ],
        "answer": "Treponema pallidum"
      },
      {
        "question": "The abbreviation MRSA refers to a strain of bacteria known as Methicillin-resistant _____.",
        "options": [
          "Staphylococcus aureus",
          "Streptococcus pyogenes",
          "Salmonella enterica",
          "Mycobacterium smegmatis"
        ],
        "answer": "Staphylococcus aureus"
      },
      {
        "question": "Streptococcus pyogenes is the primary cause of which common infection?",
        "options": [
          "Strep throat (streptococcal pharyngitis)",
          "Tuberculosis",
          "Lyme disease",
          "Diphtheria"
        ],
        "answer": "Strep throat (streptococcal pharyngitis)"
      },
      {
        "question": "Which bacterium produces a potent exotoxin that causes diphtheria, characterized by a thick gray pseudomembrane in the throat?",
        "options": [
          "Corynebacterium diphtheriae",
          "Bordetella pertussis",
          "Haemophilus influenzae",
          "Streptococcus pneumoniae"
        ],
        "answer": "Corynebacterium diphtheriae"
      },
      {
        "question": "Whooping cough (pertussis) is caused by the bacterium:",
        "options": [
          "Bordetella pertussis",
          "Mycoplasma pneumoniae",
          "Klebsiella pneumoniae",
          "Bordetella bronchiseptica"
        ],
        "answer": "Bordetella pertussis"
      },
      {
        "question": "Typhoid fever is caused by which specific bacterium?",
        "options": [
          "Salmonella enterica serovar Typhi",
          "Salmonella enterica serovar Typhimurium",
          "Shigella sonnei",
          "Vibrio parahaemolyticus"
        ],
        "answer": "Salmonella enterica serovar Typhi"
      },
      {
        "question": "Rocky Mountain spotted fever is transmitted by ticks and caused by:",
        "options": [
          "Rickettsia rickettsii",
          "Borrelia burgdorferi",
          "Rickettsia typhi",
          "Francisella tularensis"
        ],
        "answer": "Rickettsia rickettsii"
      },
      {
        "question": "Malaria is caused by a protozoan of the genus _____.",
        "options": ["Plasmodium", "Trypanosoma", "Giardia", "Babesia"],
        "answer": "Plasmodium"
      },
      {
        "question": "Toxoplasmosis, often contracted from cat feces or undercooked meat, is caused by a _____ known as Toxoplasma gondii.",
        "options": [
          "protozoan parasite",
          "bacterium",
          "fungus",
          "virus"
        ],
        "answer": "protozoan parasite"
      },
      {
        "question": "AIDS (Acquired Immune Deficiency Syndrome) is caused by a virus called:",
        "options": [
          "Human Immunodeficiency Virus (HIV)",
          "Human Papillomavirus (HPV)",
          "Hepatitis B Virus (HBV)",
          "Epstein-Barr Virus (EBV)"
        ],
        "answer": "Human Immunodeficiency Virus (HIV)"
      },
      {
        "question": "The disease COVID-19 is caused by:",
        "options": [
          "the coronavirus SARS-CoV-2",
          "the influenza virus",
          "a type of bacteria",
          "the HIV virus"
        ],
        "answer": "the coronavirus SARS-CoV-2"
      },
      {
        "question": "Influenza (the flu) is caused by:",
        "options": [
          "Influenza virus",
          "Streptococcus pneumoniae",
          "Adenovirus",
          "Coronavirus OC43"
        ],
        "answer": "Influenza virus"
      },
      {
        "question": "Polio (poliomyelitis) is caused by:",
        "options": [
          "Poliovirus",
          "Polyomavirus",
          "Pollination bacteria",
          "Paramyxovirus"
        ],
        "answer": "Poliovirus"
      },
      {
        "question": "Rabies, a fatal encephalitis if untreated, is caused by a:",
        "options": [
          "virus (rabies virus, a lyssavirus)",
          "bacterium in dog saliva",
          "protozoan parasite",
          "prion"
        ],
        "answer": "virus (rabies virus, a lyssavirus)"
      },
      {
        "question": "Oral thrush (candidiasis) and vaginal yeast infections are commonly caused by overgrowth of:",
        "options": [
          "Candida albicans (yeast)",
          "Staphylococcus aureus",
          "Gardnerella vaginalis",
          "Microsporum canis"
        ],
        "answer": "Candida albicans (yeast)"
      },
      {
        "question": "Ringworm (a fungal skin infection) is caused by:",
        "options": [
          "Dermatophyte fungi (such as Trichophyton species)",
          "Parasitic worms",
          "Candida yeast",
          "Staphylococci on the skin"
        ],
        "answer": "Dermatophyte fungi (such as Trichophyton species)"
      },
      {
        "question": "Prions are unusual infectious agents because they are:",
        "options": [
          "proteins that lack any genetic material, yet can propagate by inducing misfolding of normal proteins",
          "viruses with RNA genomes",
          "slow-growing bacteria",
          "protozoans in cyst form"
        ],
        "answer": "proteins that lack any genetic material, yet can propagate by inducing misfolding of normal proteins"
      },
      {
        "question": "Histoplasmosis is a lung infection you can get from inhaling spores found in bird and bat droppings. It is caused by:",
        "options": [
          "Histoplasma capsulatum (a dimorphic fungus)",
          "Mycobacterium avium",
          "Coccidioides immitis",
          "Influenza virus"
        ],
        "answer": "Histoplasma capsulatum (a dimorphic fungus)"
      },
      {
        "question": "\"Valley Fever\" (coccidioidomycosis) in the desert Southwest US is caused by inhalation of spores of:",
        "options": [
          "Coccidioides immitis (a soil fungus)",
          "Blastomyces dermatitidis",
          "Histoplasma capsulatum",
          "Candida tropicalis"
        ],
        "answer": "Coccidioides immitis (a soil fungus)"
      },
      {
        "question": "An epidemic refers to:",
        "options": [
          "a sudden increase in cases of a disease above normal expectancy in a region",
          "a disease constantly present at a baseline level in a region (endemic)",
          "a worldwide outbreak of a disease (pandemic)",
          "a disease spread by animal contact (zoonotic)"
        ],
        "answer": "a sudden increase in cases of a disease above normal expectancy in a region"
      },
      {
        "question": "A pandemic is best described as:",
        "options": [
          "an outbreak of a disease that spreads across multiple countries or continents, affecting a large number of people",
          "a disease occurring at a constant baseline level in one region",
          "a disease that only affects animals",
          "a small, localized outbreak of disease"
        ],
        "answer": "an outbreak of a disease that spreads across multiple countries or continents, affecting a large number of people"
      }
    ]
  };
  
