// anpquizdata.js
// Anatomy & Physiology Quiz Questions (10 Categories, ~20 Questions Each)
// Each category array contains question objects with:
// question: string
// options: string[]
// answer: string
// explanation: string (brief explanation)
// image: (optional) a download link or URL for the image
// imageName: (optional) a suggested filename for local integration
//
// NOTE: The "image" and "imageName" fields are included in a handful of questions
// in each category. You can download and store those images using the provided links,
// then reference them in your quiz logic if you wish.

const categories = {
  "General Anatomy & Terminology": [
    {
      question: "Which plane of the body divides it into left and right parts?",
      options: ["Coronal (frontal)", "Transverse", "Sagittal", "Oblique"],
      answer: "Sagittal",
      explanation: "A sagittal plane divides the body into left and right sections."
    },
    {
      question: "What term refers to the body's ability to maintain stable internal conditions?",
      options: ["Metabolism", "Homeostasis", "Catabolism", "Adaptation"],
      answer: "Homeostasis",
      explanation: "Homeostasis is maintaining relatively constant internal conditions despite external changes."
    },
    {
      question: "Which term means 'closer to the point of limb attachment'?",
      options: ["Distal", "Proximal", "Lateral", "Medial"],
      answer: "Proximal",
      explanation: "Proximal is nearer to the trunk, distal is farther away."
    },
    {
      question: "Which cavity encloses the brain?",
      options: ["Thoracic cavity", "Cranial cavity", "Abdominopelvic cavity", "Vertebral cavity"],
      answer: "Cranial cavity",
      explanation: "The cranial cavity within the skull houses the brain."
    },
    {
      question: "Which directional term means 'toward the front' of the body in humans?",
      options: ["Posterior", "Inferior", "Dorsal", "Anterior (ventral)"],
      answer: "Anterior (ventral)",
      explanation: "In humans, anterior is toward the front (ventral) side."
    },
    {
      question: "Which organ system protects the body from environmental hazards and helps regulate temperature?",
      options: ["Integumentary system", "Respiratory system", "Lymphatic system", "Digestive system"],
      answer: "Integumentary system",
      explanation: "Skin, hair, nails, and exocrine glands form the integumentary system."
    },
    {
      question: "Which term refers to the study of structures visible to the naked eye?",
      options: ["Microscopic anatomy", "Gross (macroscopic) anatomy", "Histology", "Physiology"],
      answer: "Gross (macroscopic) anatomy",
      explanation: "Gross anatomy deals with larger body structures seen without a microscope."
    },
    {
      question: "What does the term 'axillary' refer to?",
      options: ["Armpit region", "Neck region", "Groin region", "Foot region"],
      answer: "Armpit region",
      explanation: "Axillary refers to the armpit area."
    },
    {
      question: "Which membrane lines the abdominopelvic cavity and covers its organs?",
      options: ["Meninges", "Pericardium", "Pleura", "Peritoneum"],
      answer: "Peritoneum",
      explanation: "The peritoneum lines the abdominal cavity and covers abdominal organs."
    },
    {
      question: "Which organ system includes glands that secrete hormones?",
      options: ["Muscular system", "Nervous system", "Endocrine system", "Lymphatic system"],
      answer: "Endocrine system",
      explanation: "The endocrine system’s glands release hormones into the bloodstream."
    },
    {
      question: "The term 'popliteal' refers to which region of the body?",
      options: ["Back of the knee", "Lower back", "Under the arm", "Front of the elbow"],
      answer: "Back of the knee",
      explanation: "Popliteal describes the posterior knee region."
    },
    {
      question: "What two main cavities make up the ventral body cavity?",
      options: [
        "Cranial and spinal",
        "Thoracic and abdominopelvic",
        "Pleural and mediastinum",
        "Pelvic and dorsal"
      ],
      answer: "Thoracic and abdominopelvic",
      explanation: "The diaphragm separates the thoracic from the abdominopelvic cavity."
    },
    {
      question: "If a body is lying face down, it is in which position?",
      options: ["Supine", "Prone", "Fowler's", "Trendelenburg"],
      answer: "Prone",
      explanation: "Prone is lying on the abdomen, face downward; supine is face up."
    },
    {
      question: "Which is the smallest structural unit of life?",
      options: ["Tissue", "Cell", "Organ", "Molecule"],
      answer: "Cell",
      explanation: "Cells are the basic functional units of all living organisms."
    },
    {
      question: "What term means 'away from the midline' of the body?",
      options: ["Lateral", "Medial", "Superficial", "Deep"],
      answer: "Lateral",
      explanation: "Lateral means away from the midline, medial is toward the midline."
    },
    {
      question: "What is the function of the 'diaphragm' in terms of body cavities?",
      options: [
        "Separates the cranial and spinal cavities",
        "Separates the thoracic and abdominopelvic cavities",
        "Houses reproductive organs",
        "Anchors the heart in place"
      ],
      answer: "Separates the thoracic and abdominopelvic cavities",
      explanation: "The muscular diaphragm divides the ventral cavity into thoracic and abdominopelvic."
    },
    {
      question: "Which body system provides support, protection, and red blood cell formation?",
      options: ["Muscular system", "Skeletal system", "Lymphatic system", "Integumentary system"],
      answer: "Skeletal system",
      explanation: "Bones support, protect organs, and house marrow for blood cell production."
    },
    {
      question: "This plane divides the body into anterior and posterior portions:",
      options: ["Sagittal plane", "Frontal (coronal) plane", "Transverse plane", "Median plane"],
      answer: "Frontal (coronal) plane",
      explanation: "A frontal (coronal) plane divides the body into front (anterior) and back (posterior)."
    },
    {
      // Image-based question #1 (General Anatomy)
      question: "Refer to this labeled diagram of body regions. Which label indicates the 'brachial' region?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label B",
      explanation: "The brachial region refers to the upper arm area between the shoulder and elbow.",
      image: "https://example.com/images/BodyRegionsDiagram.png",
      imageName: "BodyRegionsDiagram.png"
    }
  ],

  "Skeletal System": [
    {
      question: "Which of the following is NOT a function of the skeletal system?",
      options: [
        "Protection of internal organs",
        "Production of blood cells",
        "Storage of minerals",
        "Generation of body heat as its primary role"
      ],
      answer: "Generation of body heat as its primary role",
      explanation: "Most heat is generated by muscular system; the skeleton’s major roles are support, protection, RBC production, and mineral storage."
    },
    {
      question: "How many cervical vertebrae are in the human spine?",
      options: ["5", "7", "12", "8"],
      answer: "7",
      explanation: "There are 7 cervical, 12 thoracic, and 5 lumbar vertebrae in the spine."
    },
    {
      question: "Which bone is the only movable bone of the skull (excluding the middle ear bones)?",
      options: ["Maxilla", "Mandible", "Frontal bone", "Occipital bone"],
      answer: "Mandible",
      explanation: "The mandible (lower jaw) is the only freely movable skull bone, forming the jaw joint."
    },
    {
      question: "What type of bone is the femur classified as?",
      options: ["Long bone", "Short bone", "Flat bone", "Irregular bone"],
      answer: "Long bone",
      explanation: "The femur, humerus, tibia, etc. are long bones; short bones are carpals/tarsals, etc."
    },
    {
      question: "What is the shaft of a long bone called?",
      options: ["Epiphysis", "Diaphysis", "Metaphysis", "Periosteum"],
      answer: "Diaphysis",
      explanation: "The diaphysis is the shaft; the epiphyses are the ends, metaphyses are between shaft and ends."
    },
    {
      question: "Where in a long bone does hematopoiesis (blood cell formation) occur?",
      options: [
        "Compact bone in the diaphysis",
        "Yellow marrow cavity",
        "Red bone marrow within spongy bone",
        "Articular cartilage"
      ],
      answer: "Red bone marrow within spongy bone",
      explanation: "Red marrow in spongy bone (e.g. proximal epiphyses) is the main site of hematopoiesis."
    },
    {
      question: "Which cells break down bone matrix, helping in bone remodeling?",
      options: ["Osteoblasts", "Chondrocytes", "Osteoclasts", "Osteocytes"],
      answer: "Osteoclasts",
      explanation: "Osteoclasts resorb/destroy bone; osteoblasts build bone; osteocytes are mature bone cells."
    },
    {
      question: "What is the membrane covering the outer surface of bones (except at joints)?",
      options: ["Endosteum", "Periosteum", "Synovium", "Meniscus"],
      answer: "Periosteum",
      explanation: "The periosteum is a connective tissue membrane covering bones externally."
    },
    {
      question: "Which type of joint is found at the shoulder and hip, allowing a wide range of motion?",
      options: ["Hinge joint", "Ball-and-socket joint", "Pivot joint", "Suture"],
      answer: "Ball-and-socket joint",
      explanation: "Ball-and-socket joints (shoulder, hip) permit movement in multiple axes (rotation, etc.)."
    },
    {
      question: "How many pairs of ribs does the human thoracic cage typically have?",
      options: ["10 pairs", "12 pairs", "14 pairs", "7 pairs"],
      answer: "12 pairs",
      explanation: "Most humans have 12 pairs of ribs (true ribs 1–7, false ribs 8–10, floating ribs 11–12)."
    },
    {
      question: "Which structure encloses and protects the spinal cord?",
      options: ["Vertebral column", "Cranium", "Sternum", "Clavicle"],
      answer: "Vertebral column",
      explanation: "The vertebral column (spine) surrounds and protects the spinal cord in the vertebral canal."
    },
    {
      question: "What type of cartilage is found in the intervertebral discs?",
      options: ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Articular cartilage"],
      answer: "Fibrocartilage",
      explanation: "Intervertebral discs are made of fibrocartilage, which resists compression and torsion."
    },
    {
      question: "Which two bones form the pectoral (shoulder) girdle?",
      options: [
        "Clavicle and scapula",
        "Sternum and scapula",
        "Clavicle and humerus",
        "Scapula and humerus"
      ],
      answer: "Clavicle and scapula",
      explanation: "The pectoral girdle is formed by the collarbone (clavicle) and shoulder blade (scapula)."
    },
    {
      question: "Which bone is also known as the 'collarbone'?",
      options: ["Scapula", "Sternum", "Clavicle", "Humerus"],
      answer: "Clavicle",
      explanation: "The clavicle is the collarbone. The scapula is the shoulder blade."
    },
    {
      question: "The wrist bones (carpals) and ankle bones (tarsals) are classified as:",
      options: ["Long bones", "Short bones", "Flat bones", "Irregular bones"],
      answer: "Short bones",
      explanation: "Carpals and tarsals are short bones, roughly cube-shaped. The patella is also short/sesamoid."
    },
    {
      question: "Which of these is part of the axial skeleton?",
      options: ["Femur", "Humerus", "Radius", "Sternum"],
      answer: "Sternum",
      explanation: "The axial skeleton includes the skull, vertebral column, and bony thorax (sternum, ribs)."
    },
    {
      question: "What is the functional unit of compact bone, consisting of a central canal and concentric lamellae?",
      options: ["Trabecula", "Osteon (Haversian system)", "Canaliculi", "Spicule"],
      answer: "Osteon (Haversian system)",
      explanation: "Compact bone is organized into osteons (Haversian systems). Each has a central canal with blood vessels."
    },
    {
      question: "Which bone articulates with the distal end of the femur to form the knee joint?",
      options: ["Tibia", "Fibula", "Ulna", "Radius"],
      answer: "Tibia",
      explanation: "The femur’s distal condyles articulate mainly with the tibia (and patella) at the knee."
    },
    {
      question: "What is the name of the first cervical vertebra (C1), which supports the skull?",
      options: ["Axis", "Atlas", "Odontoid", "Sacrum"],
      answer: "Atlas",
      explanation: "C1 is called the Atlas, C2 is the Axis with the dens (odontoid) process for pivoting the head."
    },
    {
      // Image-based question #1 (Skeletal System)
      question: "Refer to the labeled skeletal diagram. Which labeled bone is the 'scapula'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label C",
      explanation: "The scapula (shoulder blade) is a flat triangular bone in the upper back.",
      image: "https://example.com/images/SkeletonDiagram.png",
      imageName: "SkeletonDiagram.png"
    }
  ],

  "Muscular System": [
    {
      question: "Which of the following is NOT a function of the muscular system?",
      options: [
        "Movement and locomotion",
        "Posture maintenance",
        "Heat production",
        "Blood cell production"
      ],
      answer: "Blood cell production",
      explanation: "Blood cell production occurs in the red bone marrow (skeletal system)."
    },
    {
      question: "Which type of muscle is under voluntary control?",
      options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "None are voluntary"],
      answer: "Skeletal muscle",
      explanation: "Skeletal muscle is generally under voluntary control, while cardiac and smooth are involuntary."
    },
    {
      question: "What is the functional contractile unit of skeletal muscle called?",
      options: ["Sarcomere", "Myofilament", "Sarcolemma", "Sarcoplasm"],
      answer: "Sarcomere",
      explanation: "A sarcomere is the segment of a myofibril between two Z lines, the basic contractile unit."
    },
    {
      question: "Which protein primarily composes the thin filaments in muscle fibers?",
      options: ["Myosin", "Actin", "Troponin", "Tropomyosin"],
      answer: "Actin",
      explanation: "Thin filaments are mainly actin; thick filaments are myosin. Troponin/tropomyosin regulate actin binding."
    },
    {
      question: "In the sliding filament theory, calcium ions bind to which regulatory protein on the thin filament?",
      options: ["Myosin head", "Troponin", "Actin", "Tropomyosin directly"],
      answer: "Troponin",
      explanation: "Ca2+ binds troponin, causing tropomyosin to move, exposing actin's myosin-binding sites."
    },
    {
      question: "Which neurotransmitter is released at the neuromuscular junction to stimulate muscle contraction?",
      options: ["Acetylcholine", "Dopamine", "Serotonin", "Epinephrine"],
      answer: "Acetylcholine",
      explanation: "Motor neurons release ACh across the synapse, triggering depolarization of the muscle fiber."
    },
    {
      question: "During muscle contraction, the A band of the sarcomere:",
      options: [
        "Shortens significantly",
        "Remains the same length",
        "Disappears entirely",
        "Becomes the Z disc"
      ],
      answer: "Remains the same length",
      explanation: "The A band is the length of thick filaments; it does not change, though the I band shortens."
    },
    {
      question: "Which muscle is the main extensor of the elbow?",
      options: ["Biceps brachii", "Triceps brachii", "Brachialis", "Deltoid"],
      answer: "Triceps brachii",
      explanation: "The triceps brachii is the prime mover for elbow extension."
    },
    {
      question: "What is the role of acetylcholinesterase (AChE) at the neuromuscular junction?",
      options: [
        "To release calcium from the SR",
        "To break down ACh and end muscle excitation",
        "To bind actin and myosin",
        "To open sodium channels on the sarcolemma"
      ],
      answer: "To break down ACh and end muscle excitation",
      explanation: "AChE in the synaptic cleft degrades ACh, stopping continuous stimulation of the muscle."
    },
    {
      question: "What is an isometric contraction?",
      options: [
        "Muscle shortens as it contracts",
        "Muscle lengthens as it contracts",
        "Muscle develops tension without changing length",
        "Muscle has zero tension"
      ],
      answer: "Muscle develops tension without changing length",
      explanation: "In isometric contractions, the muscle tension increases, but the joint angle remains constant."
    },
    {
      question: "Which muscle cells are striated and typically have one nucleus and intercalated discs?",
      options: ["Skeletal muscle fibers", "Cardiac muscle cells", "Smooth muscle cells", "None are correct"],
      answer: "Cardiac muscle cells",
      explanation: "Cardiac muscle is striated, usually with a single nucleus, and has intercalated discs for cell-to-cell conduction."
    },
    {
      question: "Which ion is stored in the sarcoplasmic reticulum and released to trigger muscle contraction?",
      options: ["Na+", "K+", "Ca2+", "Mg2+"],
      answer: "Ca2+",
      explanation: "Calcium is released from the SR and binds troponin, starting the contraction cycle."
    },
    {
      question: "A motor unit consists of:",
      options: [
        "A single muscle fiber and multiple neurons",
        "All muscle fibers in a muscle",
        "One motor neuron and all muscle fibers it innervates",
        "One sarcomere"
      ],
      answer: "One motor neuron and all muscle fibers it innervates",
      explanation: "When that neuron fires, all fibers in its motor unit contract simultaneously."
    },
    {
      question: "What is the primary role of creatine phosphate in muscle cells?",
      options: [
        "Directly trigger calcium release",
        "Directly form actin-myosin cross-bridges",
        "Replenish ATP quickly by donating a phosphate to ADP",
        "Break down lactic acid"
      ],
      answer: "Replenish ATP quickly by donating a phosphate to ADP",
      explanation: "Creatine phosphate serves as a rapid reserve of phosphate to regenerate ATP from ADP during short bursts."
    },
    {
      question: "What is the name of the muscle primarily responsible for a specific movement?",
      options: ["Antagonist", "Fixator", "Agonist (prime mover)", "Synergist"],
      answer: "Agonist (prime mover)",
      explanation: "The agonist is the main muscle causing the desired action."
    },
    {
      question: "The biceps brachii and triceps brachii have opposite actions at the elbow joint. They are called:",
      options: ["Agonists", "Antagonists", "Synergists", "Fixators"],
      answer: "Antagonists",
      explanation: "Antagonistic muscles produce opposite movements, e.g., flexion vs. extension at a joint."
    },
    {
      // Image-based question #1 (Muscular System)
      question: "Refer to this anterior muscle diagram. Which label indicates the 'rectus abdominis'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label B",
      explanation: "The rectus abdominis is the vertical muscle running along the abdomen's front.",
      image: "https://example.com/images/AnteriorMuscleDiagram.png",
      imageName: "AnteriorMuscleDiagram.png"
    },
    {
      question: "Which muscle is the primary flexor of the forearm at the elbow (in anatomical position)?",
      options: ["Triceps brachii", "Biceps brachii", "Deltoid", "Latissimus dorsi"],
      answer: "Biceps brachii",
      explanation: "Biceps brachii flexes the elbow and also supinates the forearm."
    },
    {
      question: "Which muscle group forms the calf and plantarflexes the foot at the ankle?",
      options: [
        "Quadriceps femoris",
        "Hamstrings",
        "Gastrocnemius and soleus",
        "Tibialis anterior group"
      ],
      answer: "Gastrocnemius and soleus",
      explanation: "These muscles insert via the Achilles tendon to the calcaneus, enabling plantarflexion."
    },
    {
      question: "Which connective tissue layer surrounds an entire muscle?",
      options: ["Endomysium", "Perimysium", "Epimysium", "Fascia only"],
      answer: "Epimysium",
      explanation: "Epimysium is the outermost layer wrapping the entire muscle; perimysium wraps fascicles, endomysium each fiber."
    }
  ],

  "Nervous System": [
    {
      question: "Which cells in the CNS form the myelin sheath?",
      options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
      answer: "Oligodendrocytes",
      explanation: "Oligodendrocytes myelinate CNS axons; Schwann cells myelinate PNS axons."
    },
    {
      question: "Which part of the neuron conducts impulses away from the cell body?",
      options: ["Dendrite", "Axon", "Soma", "Nissl bodies"],
      answer: "Axon",
      explanation: "Axons transmit the action potential away from the neuron’s cell body to other cells."
    },
    {
      question: "Where do most action potentials typically initiate in a neuron?",
      options: [
        "Dendrites",
        "Axon terminal",
        "Axon hillock (trigger zone)",
        "Nucleus of the neuron"
      ],
      answer: "Axon hillock (trigger zone)",
      explanation: "Summation of excitatory/inhibitory inputs occurs at the axon hillock, triggering an AP if threshold is reached."
    },
    {
      question: "Which part of the brain is responsible for higher functions like thinking, voluntary movement, and sensation?",
      options: ["Cerebellum", "Cerebrum", "Brainstem", "Hypothalamus"],
      answer: "Cerebrum",
      explanation: "The cerebrum (cerebral hemispheres) handles consciousness, cognition, voluntary motor control, and sensory interpretation."
    },
    {
      question: "What is the 'blood-brain barrier' primarily formed by?",
      options: [
        "Astrocytes and tight junctions in capillary endothelium",
        "Microglia phagocytosing pathogens",
        "Cerebrospinal fluid in ventricles",
        "Schwann cells around brain blood vessels"
      ],
      answer: "Astrocytes and tight junctions in capillary endothelium",
      explanation: "Astrocyte foot processes and tight endothelial junctions form the BBB, controlling CNS substance entry."
    },
    {
      question: "Which lobe of the cerebrum contains the primary visual cortex?",
      options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
      answer: "Occipital lobe",
      explanation: "The occipital lobe at the back of the brain is the visual processing center."
    },
    {
      question: "Which cranial nerve (CN II) carries visual information from the retina to the brain?",
      options: ["Olfactory nerve", "Optic nerve", "Oculomotor nerve", "Trigeminal nerve"],
      answer: "Optic nerve",
      explanation: "The optic nerve (CN II) transmits visual signals from the retina to the brain."
    },
    {
      question: "The fight-or-flight response is primarily controlled by which division of the autonomic nervous system?",
      options: ["Sympathetic", "Parasympathetic", "Somatic motor", "Enteric"],
      answer: "Sympathetic",
      explanation: "The sympathetic division prepares the body for emergency responses (increasing HR, BP, etc.)."
    },
    {
      question: "Which region of the brain regulates vital autonomic functions like heart rate and breathing?",
      options: ["Cerebellum", "Medulla oblongata", "Midbrain", "Hippocampus"],
      answer: "Medulla oblongata",
      explanation: "The medulla oblongata in the brainstem controls essential autonomic functions."
    },
    {
      // Image-based question #1 (Nervous System)
      question: "Refer to this neuron diagram. Which labeled region is the 'axon hillock'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label C",
      explanation: "The axon hillock is the cone-shaped area connecting the soma to the axon.",
      image: "https://example.com/images/NeuronDiagram.png",
      imageName: "NeuronDiagram.png"
    },
    {
      question: "A neuron that carries impulses from receptors (skin) to the CNS is classified as:",
      options: ["Motor neuron", "Interneuron", "Sensory (afferent) neuron", "Satellite cell"],
      answer: "Sensory (afferent) neuron",
      explanation: "Afferent (sensory) neurons transmit signals from receptors to the CNS."
    },
    {
      question: "Saltatory conduction (fast impulse transmission) occurs in:",
      options: [
        "Unmyelinated axons only",
        "Myelinated axons, jumping node to node",
        "Gray matter of the spinal cord",
        "Dendrites with many synaptic terminals"
      ],
      answer: "Myelinated axons, jumping node to node",
      explanation: "Saltatory conduction involves APs jumping between nodes of Ranvier on myelinated axons."
    },
    {
      question: "The 'all-or-none principle' of an action potential means:",
      options: [
        "If threshold is reached, the neuron fires a full AP; if not, no AP occurs",
        "Neurons can fire partial APs depending on stimulus",
        "Amplitude of AP depends on stimulus strength",
        "Voltage-gated channels remain partially open"
      ],
      answer: "If threshold is reached, the neuron fires a full AP; if not, no AP occurs",
      explanation: "Action potentials either occur maximally or not at all once threshold potential is surpassed."
    },
    {
      question: "Which structure in the diencephalon is the major relay station for sensory impulses to the cerebral cortex?",
      options: ["Thalamus", "Hypothalamus", "Epithalamus", "Pons"],
      answer: "Thalamus",
      explanation: "The thalamus directs most sensory signals (except smell) to appropriate cortical areas."
    },
    {
      question: "What is the function of the meninges (dura, arachnoid, pia) around the brain and spinal cord?",
      options: [
        "They produce cerebrospinal fluid",
        "They protect and cushion the CNS",
        "They generate nerve impulses",
        "They store neurotransmitters"
      ],
      answer: "They protect and cushion the CNS",
      explanation: "The meninges are protective membranes around the brain/spinal cord, containing CSF in subarachnoid space."
    },
    {
      question: "Which glial cells are the immune defense cells of the CNS (phagocytes)?",
      options: ["Oligodendrocytes", "Microglia", "Ependymal cells", "Astrocytes"],
      answer: "Microglia",
      explanation: "Microglia act like macrophages in the CNS, cleaning up debris and pathogens."
    },
    {
      question: "Which neurotransmitter is crucial at neuromuscular junctions and also used in the autonomic nervous system?",
      options: ["Acetylcholine (ACh)", "Norepinephrine", "Dopamine", "GABA"],
      answer: "Acetylcholine (ACh)",
      explanation: "ACh is released by motor neurons at NMJs and is also used by parasympathetic pre/postganglionic fibers."
    },
    {
      question: "What is the function of the corpus callosum?",
      options: [
        "To relay sensory information to the thalamus",
        "To produce CSF",
        "To connect and allow communication between the left and right cerebral hemispheres",
        "To coordinate balance and posture"
      ],
      answer: "To connect and allow communication between the left and right cerebral hemispheres",
      explanation: "The corpus callosum is a large fiber tract enabling cross-hemispheric communication."
    },
    {
      question: "Which part of the brain is crucial for muscle coordination and balance?",
      options: ["Frontal lobe", "Cerebellum", "Medulla oblongata", "Temporal lobe"],
      answer: "Cerebellum",
      explanation: "The cerebellum fine-tunes motor activity, posture, and balance."
    }
  ],

  "Endocrine System": [
    {
      question: "Which gland is often called the 'master gland' because it controls many other endocrine glands?",
      options: ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pineal gland"],
      answer: "Pituitary gland",
      explanation: "The anterior pituitary secretes TSH, ACTH, FSH, LH, etc., regulating multiple endocrine organs."
    },
    {
      question: "Which hormone lowers blood glucose by facilitating its uptake into cells?",
      options: ["Glucagon", "Insulin", "Cortisol", "Epinephrine"],
      answer: "Insulin",
      explanation: "Insulin (from pancreatic beta cells) reduces blood sugar, while glucagon (alpha cells) raises it."
    },
    {
      question: "Which endocrine gland secretes melatonin and helps regulate circadian rhythms?",
      options: ["Pituitary gland", "Pineal gland", "Thymus", "Pancreas"],
      answer: "Pineal gland",
      explanation: "The pineal gland in the brain secretes melatonin, controlling sleep/wake cycles."
    },
    {
      question: "Which hormone is primarily responsible for raising blood calcium levels by stimulating osteoclasts?",
      options: ["Calcitonin", "Parathyroid hormone (PTH)", "Aldosterone", "Thyroxine"],
      answer: "Parathyroid hormone (PTH)",
      explanation: "PTH from parathyroid glands increases blood Ca2+ by bone resorption, kidney reabsorption, etc."
    },
    {
      question: "Which hormone triggers ovulation in the female menstrual cycle?",
      options: [
        "Follicle-stimulating hormone (FSH)",
        "Luteinizing hormone (LH)",
        "Estrogen",
        "Progesterone"
      ],
      answer: "Luteinizing hormone (LH)",
      explanation: "An LH surge mid-cycle induces ovulation and formation of the corpus luteum."
    },
    {
      question: "Which steroid hormone is produced by the adrenal cortex and helps regulate sodium/potassium balance?",
      options: ["Cortisol", "Aldosterone", "Glucagon", "Androgens"],
      answer: "Aldosterone",
      explanation: "Aldosterone (a mineralocorticoid) promotes Na+ reabsorption and K+ excretion in the kidneys."
    },
    {
      question: "Which hormone is secreted by beta cells of the pancreas?",
      options: ["Glucagon", "Insulin", "Somatostatin", "Pancreatic polypeptide"],
      answer: "Insulin",
      explanation: "Beta cells secrete insulin; alpha cells secrete glucagon; delta cells secrete somatostatin."
    },
    {
      question: "What is the primary function of thyroid hormones (T3 and T4)?",
      options: [
        "Decrease blood calcium levels",
        "Lower heart rate",
        "Increase metabolic rate and energy usage",
        "Break down glycogen in the liver"
      ],
      answer: "Increase metabolic rate and energy usage",
      explanation: "Thyroid hormones raise the basal metabolic rate, influencing growth and development."
    },
    {
      question: "Which hormone is produced in the hypothalamus and stored in the posterior pituitary, regulating water balance?",
      options: ["Growth hormone", "Antidiuretic hormone (ADH)", "ACTH", "Thyroid-stimulating hormone"],
      answer: "Antidiuretic hormone (ADH)",
      explanation: "ADH (vasopressin) is made by hypothalamic neurons, then released from the posterior pituitary."
    },
    {
      // Image-based question #1 (Endocrine System)
      question: "Refer to the endocrine gland diagram. Which labeled gland is the 'thyroid gland'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label B",
      explanation: "The thyroid gland is a butterfly-shaped gland in the anterior neck region.",
      image: "https://example.com/images/EndocrineGlands.png",
      imageName: "EndocrineGlands.png"
    },
    {
      question: "Which hormone secreted by the adrenal medulla enhances the fight-or-flight response?",
      options: ["Epinephrine (adrenaline)", "Cortisol", "Insulin", "Calcitonin"],
      answer: "Epinephrine (adrenaline)",
      explanation: "The adrenal medulla secretes epinephrine and norepinephrine under sympathetic stimulation."
    },
    {
      question: "What is the effect of calcitonin, secreted by the thyroid’s parafollicular cells?",
      options: [
        "Increases blood calcium",
        "Decreases blood calcium",
        "Increases blood glucose",
        "Raises metabolic rate"
      ],
      answer: "Decreases blood calcium",
      explanation: "Calcitonin counters PTH by inhibiting osteoclasts, lowering blood Ca2+."
    },
    {
      question: "Which hormone is known for stimulating uterine contractions during childbirth?",
      options: ["Prolactin", "Oxytocin", "Estrogen", "LH"],
      answer: "Oxytocin",
      explanation: "Oxytocin from the posterior pituitary stimulates uterine contractions and milk ejection."
    },
    {
      question: "Which hormone stimulates milk production in mammary glands?",
      options: ["Oxytocin", "Prolactin", "Progesterone", "Testosterone"],
      answer: "Prolactin",
      explanation: "Prolactin (from anterior pituitary) promotes lactation; oxytocin triggers milk letdown."
    },
    {
      question: "Aldosterone primarily acts on which organ?",
      options: ["Liver", "Heart", "Kidney", "Pancreas"],
      answer: "Kidney",
      explanation: "Aldosterone targets renal tubules to reabsorb Na+ and excrete K+, thus affecting blood pressure."
    },
    {
      question: "In Type 1 Diabetes Mellitus, there is a deficiency of which hormone due to autoimmune destruction of its producing cells?",
      options: ["Insulin", "Cortisol", "Glucagon", "Thyroxine"],
      answer: "Insulin",
      explanation: "Type 1 diabetes arises from autoimmune destruction of pancreatic beta cells, leading to low insulin."
    },
    {
      question: "Which hormone helps the body cope with long-term stress by increasing blood glucose and reducing inflammation?",
      options: ["Epinephrine", "Insulin", "Cortisol", "Parathyroid hormone"],
      answer: "Cortisol",
      explanation: "Cortisol (a glucocorticoid from the adrenal cortex) elevates blood glucose and suppresses immunity."
    },
    {
      question: "Which pituitary hormone stimulates the thyroid gland to release its hormones?",
      options: ["Thyroid-stimulating hormone (TSH)", "ACTH", "GH", "ADH"],
      answer: "Thyroid-stimulating hormone (TSH)",
      explanation: "TSH (thyrotropin) from the anterior pituitary prompts the thyroid to secrete T3/T4."
    },
    {
      question: "Which disorder is associated with hyperthyroidism and can feature exophthalmos (protruding eyes)?",
      options: ["Cushing's syndrome", "Addison's disease", "Graves' disease", "Diabetes insipidus"],
      answer: "Graves' disease",
      explanation: "Graves' disease is an autoimmune hyperthyroidism often presenting with bulging eyes (exophthalmos)."
    },
    {
      question: "Which hormone, released by the heart, lowers blood pressure by promoting salt and water excretion?",
      options: ["ANP (Atrial Natriuretic Peptide)", "Renin", "Aldosterone", "ADH"],
      answer: "ANP (Atrial Natriuretic Peptide)",
      explanation: "ANP from atria counters the renin-angiotensin-aldosterone system, reducing blood volume/pressure."
    }
  ],

  "Circulatory & Respiratory Systems": [
    {
      question: "Which side of the heart handles oxygenated blood to pump it into systemic circulation?",
      options: ["Right side", "Left side", "Both sides equally", "Coronary side"],
      answer: "Left side",
      explanation: "The left atrium/ventricle receive oxygen-rich blood from lungs and send it systemically via the aorta."
    },
    {
      question: "Which vessels carry blood away from the heart?",
      options: ["Arteries", "Veins", "Capillaries", "Lymphatics"],
      answer: "Arteries",
      explanation: "Arteries transport blood away from the heart; veins return blood to the heart."
    },
    {
      question: "What is the main pacemaker of the heart?",
      options: ["AV node", "Purkinje fibers", "Sinoatrial (SA) node", "Bundle of His"],
      answer: "Sinoatrial (SA) node",
      explanation: "The SA node in the right atrium sets the normal heart rate, initiating each heartbeat."
    },
    {
      question: "Which formed element in blood is crucial for clotting?",
      options: ["Erythrocytes", "Leukocytes", "Platelets (thrombocytes)", "Plasma proteins"],
      answer: "Platelets (thrombocytes)",
      explanation: "Platelets form plugs and help trigger the clotting cascade, sealing vessel injuries."
    },
    {
      question: "Which component of hemoglobin binds oxygen?",
      options: ["Protein chain only", "Heme with iron (Fe2+)", "Globin with calcium", "All of these equally"],
      answer: "Heme with iron (Fe2+)",
      explanation: "Each heme group contains iron which binds O2, allowing RBCs to transport oxygen."
    },
    {
      question: "Pulmonary veins transport ___ blood to the ___ atrium.",
      options: [
        "Deoxygenated; right",
        "Oxygenated; left",
        "Oxygenated; right",
        "Deoxygenated; left"
      ],
      answer: "Oxygenated; left",
      explanation: "Pulmonary veins return oxygen-rich blood from the lungs to the left atrium."
    },
    {
      question: "Most gas exchange with tissues occurs in:",
      options: ["Capillaries", "Arterioles", "Venules", "Arteries"],
      answer: "Capillaries",
      explanation: "Capillaries have thin walls for nutrient/gas exchange between blood and tissue fluid."
    },
    {
      question: "Which valve prevents backflow of blood from the left ventricle to the left atrium?",
      options: [
        "Tricuspid valve",
        "Mitral (bicuspid) valve",
        "Pulmonary semilunar valve",
        "Aortic semilunar valve"
      ],
      answer: "Mitral (bicuspid) valve",
      explanation: "The mitral valve is the left AV valve; the tricuspid is the right AV valve."
    },
    {
      question: "Which structures in the respiratory system are the sites of gas exchange?",
      options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
      answer: "Alveoli",
      explanation: "Alveoli are tiny sacs in lungs where O2/CO2 diffuse between air and blood."
    },
    {
      question: "When the diaphragm contracts, the thoracic cavity volume ___, causing air to flow ___ the lungs.",
      options: [
        "Decreases; out of",
        "Increases; into",
        "Remains constant; out of",
        "Decreases; into"
      ],
      answer: "Increases; into",
      explanation: "Contraction flattens the diaphragm, expanding thoracic volume and lowering pressure so air flows in."
    },
    {
      // Image-based question #1 (Circulatory & Respiratory)
      question: "Refer to this heart diagram. Which labeled valve is the 'aortic semilunar valve'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label D",
      explanation: "The aortic semilunar valve is between the left ventricle and the aorta.",
      image: "https://example.com/images/HeartDiagram.png",
      imageName: "HeartDiagram.png"
    },
    {
      question: "Which respiratory structure prevents food from entering the trachea during swallowing?",
      options: ["Epiglottis", "Uvula", "Soft palate", "Pharynx"],
      answer: "Epiglottis",
      explanation: "The epiglottis folds over the glottis to block food from the airway."
    },
    {
      question: "What is the primary muscle responsible for quiet breathing inspiration?",
      options: ["External intercostals", "Diaphragm", "Internal intercostals", "Rectus abdominis"],
      answer: "Diaphragm",
      explanation: "The diaphragm contracts and flattens, increasing thoracic volume for inhalation."
    },
    {
      question: "Most of the oxygen in blood is transported:",
      options: [
        "Dissolved in plasma",
        "Bound to hemoglobin in RBCs",
        "As bicarbonate ions",
        "By white blood cells"
      ],
      answer: "Bound to hemoglobin in RBCs",
      explanation: "~98% of O2 is carried by hemoglobin; only ~2% dissolved in plasma."
    },
    {
      question: "Which of these ECG waves represents ventricular depolarization?",
      options: ["P wave", "QRS complex", "T wave", "PR segment"],
      answer: "QRS complex",
      explanation: "QRS is ventricular depolarization (and hidden atrial repolarization). P wave = atrial depolarization, T = ventricle repolarization."
    },
    {
      question: "What is systolic blood pressure?",
      options: [
        "Arterial pressure when ventricles relax",
        "Pressure in veins",
        "Arterial pressure during ventricular contraction",
        "None of the above"
      ],
      answer: "Arterial pressure during ventricular contraction",
      explanation: "Systolic BP is the peak pressure in arteries when ventricles contract."
    },
    {
      question: "The exchange of gases between alveolar air and pulmonary capillary blood is driven by:",
      options: [
        "Active transport",
        "Diffusion along partial pressure gradients",
        "Endocytosis",
        "Exocytosis"
      ],
      answer: "Diffusion along partial pressure gradients",
      explanation: "O2 and CO2 diffuse from higher to lower partial pressures in alveoli/blood."
    },
    {
      question: "What is the primary chemical stimulus for increasing respiratory rate under normal conditions?",
      options: [
        "High oxygen levels",
        "Low carbon dioxide levels",
        "High carbon dioxide (and thus low pH)",
        "Hormones from the kidney"
      ],
      answer: "High carbon dioxide (and thus low pH)",
      explanation: "Elevated CO2 (hypercapnia) and decreased pH strongly stimulate respiratory centers to increase ventilation."
    },
    {
      question: "During heavy exercise, arterioles in skeletal muscles dilate to increase blood flow. This results from:",
      options: [
        "Increased sympathetic tone only",
        "Local metabolic factors (low O2, high CO2) overriding sympathetic",
        "Reduced temperature in muscle",
        "None of the above"
      ],
      answer: "Local metabolic factors (low O2, high CO2) overriding sympathetic",
      explanation: "Active hyperemia: local metabolic changes cause vasodilation to deliver more blood to working muscles."
    }
  ],

  "Digestive & Excretory Systems": [
    {
      question: "Where does most nutrient absorption occur in the digestive tract?",
      options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
      answer: "Small intestine",
      explanation: "The small intestine (especially jejunum) is the primary site for nutrient absorption."
    },
    {
      question: "Which accessory organ produces bile for fat emulsification?",
      options: ["Stomach", "Liver", "Pancreas", "Gallbladder"],
      answer: "Liver",
      explanation: "The liver makes bile; the gallbladder only stores and concentrates it."
    },
    {
      question: "What enzyme initiates carbohydrate digestion in the mouth?",
      options: ["Pepsin", "Salivary amylase", "Lipase", "Trypsin"],
      answer: "Salivary amylase",
      explanation: "Salivary (ptyalin) amylase starts breaking down starches into smaller sugars."
    },
    {
      question: "Which sphincter prevents reflux of stomach contents into the esophagus?",
      options: [
        "Pyloric sphincter",
        "Lower esophageal (cardiac) sphincter",
        "Ileocecal valve",
        "Upper esophageal sphincter"
      ],
      answer: "Lower esophageal (cardiac) sphincter",
      explanation: "This sphincter at the stomach-esophagus junction stops acid reflux."
    },
    {
      question: "Which portion of the small intestine receives chyme from the stomach and secretions from the liver/pancreas?",
      options: ["Duodenum", "Jejunum", "Ileum", "Colon"],
      answer: "Duodenum",
      explanation: "The duodenum is the first part of the small intestine receiving chyme, bile, and pancreatic enzymes."
    },
    {
      question: "Which cells secrete hydrochloric acid (HCl) in the stomach?",
      options: ["Chief cells", "Parietal cells", "Mucous cells", "Enteroendocrine cells"],
      answer: "Parietal cells",
      explanation: "Parietal (oxyntic) cells produce HCl and intrinsic factor; chief cells produce pepsinogen."
    },
    {
      question: "Which organ's exocrine portion secretes digestive enzymes (amylase, lipase, proteases) and bicarbonate?",
      options: ["Liver", "Pancreas", "Gallbladder", "Spleen"],
      answer: "Pancreas",
      explanation: "The pancreas secretes enzymes and bicarbonate into the duodenum for digestion."
    },
    {
      question: "The large intestine primarily absorbs:",
      options: ["Proteins", "Lipids", "Water and electrolytes", "All major nutrients"],
      answer: "Water and electrolytes",
      explanation: "The colon reabsorbs water, vitamins, and electrolytes; not the major site for nutrient absorption."
    },
    {
      question: "Where does filtration of blood occur in the nephron?",
      options: [
        "Proximal tubule",
        "Glomerulus in Bowman's capsule",
        "Loop of Henle",
        "Collecting duct"
      ],
      answer: "Glomerulus in Bowman's capsule",
      explanation: "Filtration happens when blood plasma is forced from glomerulus into the capsule."
    },
    {
      question: "Which hormone increases water reabsorption in the kidney's collecting ducts?",
      options: ["Aldosterone", "Antidiuretic hormone (ADH)", "ANP", "Angiotensin II"],
      answer: "Antidiuretic hormone (ADH)",
      explanation: "ADH makes the collecting duct more permeable to water, reducing urine volume."
    },
    {
      question: "Which nitrogenous waste is the primary component of urine (besides water)?",
      options: ["Urea", "Glucose", "Uric acid", "Amino acids"],
      answer: "Urea",
      explanation: "Urea is formed in the liver from ammonia/amino acid breakdown and excreted by the kidneys."
    },
    {
      question: "The loop of Henle creates a concentration gradient in the medulla that allows:",
      options: [
        "Isometric contractions",
        "Production of concentrated urine",
        "Production of RBCs",
        "Direct filtration of glucose"
      ],
      answer: "Production of concentrated urine",
      explanation: "Countercurrent multiplication in the loop of Henle permits water reabsorption for concentrated urine."
    },
    {
      question: "Which muscular tube carries urine from the kidney to the bladder?",
      options: ["Urethra", "Loop of Henle", "Ureter", "Renal pelvis"],
      answer: "Ureter",
      explanation: "The ureter transports urine from each kidney’s renal pelvis to the urinary bladder."
    },
    {
      // Image-based question #1 (Digestive & Excretory)
      question: "Refer to the diagram of the kidney nephron. Which labeled segment is the 'descending limb' of the loop of Henle?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label B",
      explanation: "The descending limb is permeable to water but not solutes, enabling water reabsorption.",
      image: "https://example.com/images/KidneyNephronDiagram.png",
      imageName: "KidneyNephronDiagram.png"
    },
    {
      question: "Which valve separates the small intestine from the large intestine?",
      options: [
        "Pyloric sphincter",
        "Lower esophageal sphincter",
        "Ileocecal valve",
        "Internal anal sphincter"
      ],
      answer: "Ileocecal valve",
      explanation: "The ileocecal valve controls the flow from the ileum to the cecum of the large intestine."
    },
    {
      question: "Bile salts aid in the digestion of:",
      options: ["Proteins", "Carbohydrates", "Fats", "Nucleic acids"],
      answer: "Fats",
      explanation: "Bile salts emulsify fats, increasing their surface area for lipase action."
    },
    {
      question: "Which hormone is released by the small intestine in response to acidic chyme and stimulates the pancreas to release bicarbonate?",
      options: ["Gastrin", "CCK", "Secretin", "Motilin"],
      answer: "Secretin",
      explanation: "Secretin signals the pancreas to secrete bicarbonate, neutralizing acidic chyme."
    },
    {
      question: "Which structure stores and concentrates bile before releasing it into the duodenum?",
      options: ["Pancreas", "Liver", "Gallbladder", "Appendix"],
      answer: "Gallbladder",
      explanation: "Bile produced by the liver is stored in the gallbladder until needed for fat digestion."
    },
    {
      question: "Which organ produces enzymes that can digest all three major macronutrients: carbs, proteins, and fats?",
      options: ["Stomach", "Pancreas", "Liver", "Colon"],
      answer: "Pancreas",
      explanation: "Pancreatic amylase (carbs), trypsin/chymotrypsin (proteins), and pancreatic lipase (fats)."
    }
  ],

  "Immune & Lymphatic Systems": [
    {
      question: "Which cells are the main phagocytes that engulf and digest bacteria in acute infections?",
      options: ["Neutrophils", "B lymphocytes", "Eosinophils", "Basophils"],
      answer: "Neutrophils",
      explanation: "Neutrophils are first responders in bacterial infection, performing phagocytosis."
    },
    {
      question: "Where do T lymphocytes mature?",
      options: ["Bone marrow", "Thymus", "Spleen", "Lymph nodes"],
      answer: "Thymus",
      explanation: "T cells originate in bone marrow but mature and become immunocompetent in the thymus."
    },
    {
      question: "Which type of immunity involves B cells producing antibodies against a specific antigen?",
      options: [
        "Cell-mediated immunity",
        "Humoral (antibody-mediated) immunity",
        "Innate immunity",
        "Passive immunity only"
      ],
      answer: "Humoral (antibody-mediated) immunity",
      explanation: "B cells differentiate into plasma cells that secrete antibodies, conferring humoral immunity."
    },
    {
      question: "Which immunoglobulin is most abundant in blood and can cross the placenta?",
      options: ["IgA", "IgD", "IgE", "IgG"],
      answer: "IgG",
      explanation: "IgG is ~75% of serum antibodies and crosses the placenta, providing fetal/newborn immunity."
    },
    {
      question: "What is the role of the spleen in the immune system?",
      options: [
        "Maturing T cells",
        "Filtering blood and providing a site for immune responses to blood-borne pathogens",
        "Collecting interstitial fluid",
        "Producing RBCs in adults"
      ],
      answer: "Filtering blood and providing a site for immune responses to blood-borne pathogens",
      explanation: "The spleen’s white pulp contains lymphocytes that monitor for pathogens in the blood."
    },
    {
      question: "Which cells directly kill virus-infected or cancerous cells by releasing perforin and granzymes?",
      options: [
        "Helper T cells (CD4+)",
        "Cytotoxic T cells (CD8+)",
        "B cells",
        "Neutrophils"
      ],
      answer: "Cytotoxic T cells (CD8+)",
      explanation: "Cytotoxic T cells recognize antigens on MHC I and induce apoptosis in infected/abnormal cells."
    },
    {
      question: "Which lymphatic organ filters lymph, removing pathogens and housing lymphocytes that respond to antigens?",
      options: ["Spleen", "Lymph node", "Thymus", "Tonsils only"],
      answer: "Lymph node",
      explanation: "Lymph nodes filter lymph; the spleen filters blood; the thymus matures T cells."
    },
    {
      question: "Inflammation is characterized by redness, heat, swelling, and pain primarily due to:",
      options: [
        "Vasodilation and increased vascular permeability",
        "Reduced blood flow",
        "Neutralizing toxins only",
        "Neurotransmitters in the brain"
      ],
      answer: "Vasodilation and increased vascular permeability",
      explanation: "Local vasodilation causes redness and heat; leaky capillaries cause swelling (edema)."
    },
    {
      // Image-based question #1 (Immune & Lymphatic)
      question: "Refer to the labeled lymph node diagram. Which region (label B) typically contains germinal centers for B-cell proliferation?",
      options: ["Cortex", "Medulla", "Hilum", "Capsule"],
      answer: "Cortex",
      explanation: "The lymph node cortex houses follicles (germinal centers) where B cells can proliferate.",
      image: "https://example.com/images/LymphNodeDiagram.png",
      imageName: "LymphNodeDiagram.png"
    },
    {
      question: "What is an antigen?",
      options: [
        "A Y-shaped protein that binds pathogens",
        "Any molecule recognized as foreign, triggering an immune response",
        "An immune cell that engulfs bacteria",
        "A hormone secreted by lymphocytes"
      ],
      answer: "Any molecule recognized as foreign, triggering an immune response",
      explanation: "Antigens elicit specific immune responses from B and T cells."
    },
    {
      question: "Which cells produce antibodies?",
      options: ["Plasma cells (activated B cells)", "Helper T cells", "Cytotoxic T cells", "NK cells"],
      answer: "Plasma cells (activated B cells)",
      explanation: "B cells differentiate into plasma cells, which secrete large amounts of antibodies."
    },
    {
      question: "What type of immunity results from receiving pre-made antibodies, as in antiserum or maternal IgG?",
      options: ["Active immunity", "Passive immunity", "Cell-mediated immunity", "Autoimmunity"],
      answer: "Passive immunity",
      explanation: "Passive immunity is conferred by receiving exogenous antibodies; it’s temporary."
    },
    {
      question: "Which immunoglobulin class is mainly found in secretions (saliva, tears, breast milk) and helps guard mucosal surfaces?",
      options: ["IgG", "IgA", "IgM", "IgE"],
      answer: "IgA",
      explanation: "IgA is present in mucosal areas and secretions, providing local immunity."
    },
    {
      question: "Which cell type is the main cell targeted and destroyed by HIV, leading to AIDS?",
      options: [
        "Cytotoxic T cells (CD8+)",
        "Helper T cells (CD4+)",
        "B cells",
        "Neutrophils"
      ],
      answer: "Helper T cells (CD4+)",
      explanation: "HIV infects CD4+ T-helper cells, crippling the adaptive immune response."
    },
    {
      question: "Which chemicals, released by virus-infected cells, help protect neighboring cells from viral infection?",
      options: ["Antibodies", "Interferons", "Defensins", "Perforins"],
      answer: "Interferons",
      explanation: "Interferons are signaling proteins that help adjacent cells resist viral replication."
    },
    {
      question: "Which complement activation outcome can directly lyse pathogens by forming a membrane attack complex (MAC)?",
      options: [
        "Opsonization of RBCs",
        "Neutralizing toxins",
        "Cytolysis (punching holes) in bacterial membranes",
        "T-cell receptor upregulation"
      ],
      answer: "Cytolysis (punching holes) in bacterial membranes",
      explanation: "Complement’s MAC creates pores in pathogen membranes, causing lysis."
    },
    {
      question: "Which is NOT a function of the lymphatic system?",
      options: [
        "Drain excess interstitial fluid",
        "Transport dietary lipids",
        "Immune responses via lymphocytes",
        "Secrete digestive enzymes"
      ],
      answer: "Secrete digestive enzymes",
      explanation: "Digestive enzymes come from the GI tract. The lymphatic system does fluid return, fat transport, immunity."
    },
    {
      question: "Which immune response provides a faster and more intense reaction upon second exposure to the same antigen?",
      options: [
        "Primary response",
        "Secondary (memory) response",
        "Innate inflammation",
        "Complement only"
      ],
      answer: "Secondary (memory) response",
      explanation: "Memory B and T cells generated in the primary response enable a rapid, stronger secondary response."
    },
    {
      question: "Which cells orchestrate the immune response by releasing cytokines to activate B cells, T cells, and macrophages?",
      options: [
        "Helper T cells (CD4+)",
        "Cytotoxic T cells (CD8+)",
        "Plasma cells",
        "Neutrophils"
      ],
      answer: "Helper T cells (CD4+)",
      explanation: "Helper T cells secrete interleukins that regulate multiple immune cell types."
    }
  ],

  "Reproductive System": [
    {
      question: "Where does fertilization of the egg by sperm usually occur?",
      options: [
        "Ovary",
        "Uterine (fallopian) tube",
        "Uterus",
        "Vagina"
      ],
      answer: "Uterine (fallopian) tube",
      explanation: "Fertilization typically happens in the ampulla of the fallopian tube."
    },
    {
      question: "Which hormone surge triggers ovulation in a typical 28-day female cycle?",
      options: [
        "FSH surge",
        "LH surge",
        "Progesterone peak",
        "Prolactin surge"
      ],
      answer: "LH surge",
      explanation: "A mid-cycle LH surge stimulates the mature follicle to release its oocyte."
    },
    {
      question: "Which organ produces sperm and testosterone in males?",
      options: [
        "Prostate gland",
        "Testes",
        "Epididymis",
        "Seminal vesicles"
      ],
      answer: "Testes",
      explanation: "Testes house seminiferous tubules for sperm production and Leydig cells for testosterone secretion."
    },
    {
      question: "Which structure stores and matures sperm cells in males?",
      options: [
        "Vas deferens",
        "Epididymis",
        "Seminiferous tubules",
        "Prostate gland"
      ],
      answer: "Epididymis",
      explanation: "Sperm from the testis move into the epididymis to mature and be stored."
    },
    {
      question: "Which hormone is primarily responsible for the development of female secondary sexual characteristics?",
      options: [
        "Testosterone",
        "Estrogen",
        "Progesterone",
        "LH"
      ],
      answer: "Estrogen",
      explanation: "Estrogen from the ovaries promotes breast development, wider hips, etc."
    },
    {
      question: "Which part of the uterus projects downward into the vagina?",
      options: ["Fundus", "Body", "Cervix", "Endometrium"],
      answer: "Cervix",
      explanation: "The cervix is the lower, narrow portion of the uterus opening into the vagina."
    },
    {
      question: "Which structure in females is analogous (homologous) to the male penis in terms of erectile tissue?",
      options: [
        "Labia majora",
        "Clitoris",
        "Urethra",
        "Ovary"
      ],
      answer: "Clitoris",
      explanation: "The clitoris and penis share embryological origin and contain erectile tissue."
    },
    {
      question: "The corpus luteum in the ovary secretes high levels of ___ after ovulation to maintain the uterine lining.",
      options: [
        "FSH",
        "Estrogen only",
        "Progesterone (and some estrogen)",
        "LH"
      ],
      answer: "Progesterone (and some estrogen)",
      explanation: "The corpus luteum secretes progesterone to support endometrium for potential implantation."
    },
    {
      question: "Which duct in males carries sperm from the epididymis to the ejaculatory ducts?",
      options: ["Urethra", "Vas deferens", "Seminal vesicle duct", "Ejaculatory duct itself"],
      answer: "Vas deferens",
      explanation: "The ductus (vas) deferens transports sperm during ejaculation from epididymis to ejaculatory duct."
    },
    {
      // Image-based question #1 (Reproductive System)
      question: "Refer to the female reproductive diagram. Which labeled region indicates the 'uterine (fallopian) tube'?",
      options: ["Label A", "Label B", "Label C", "Label D"],
      answer: "Label B",
      explanation: "The fallopian tubes extend laterally from the upper uterus toward the ovaries.",
      image: "https://example.com/images/FemaleReproDiagram.png",
      imageName: "FemaleReproDiagram.png"
    },
    {
      question: "Which structure in males produces a fructose-rich fluid contributing to semen?",
      options: [
        "Prostate gland",
        "Seminal vesicles",
        "Bulbourethral glands",
        "Epididymis"
      ],
      answer: "Seminal vesicles",
      explanation: "Seminal vesicles secrete fructose to nourish sperm and contribute ~60% of semen volume."
    },
    {
      question: "In which layer of the uterus does implantation of a fertilized egg typically occur?",
      options: ["Myometrium", "Perimetrium", "Endometrium", "Serosa"],
      answer: "Endometrium",
      explanation: "The endometrium is the uterine lining where the blastocyst implants."
    },
    {
      question: "Which hormone is tested for in pregnancy tests (secreted by embryonic tissues)?",
      options: ["FSH", "hCG (human chorionic gonadotropin)", "Estrogen", "Oxytocin"],
      answer: "hCG (human chorionic gonadotropin)",
      explanation: "The embryo/placenta produce hCG, which maintains the corpus luteum in early pregnancy."
    },
    {
      question: "Which stage marks the permanent cessation of menstrual cycles in females?",
      options: ["Menarche", "Ovulation", "Menopause", "Luteal phase"],
      answer: "Menopause",
      explanation: "Menopause is when the ovaries cease function and menstrual cycles end permanently."
    },
    {
      question: "Sperm production (spermatogenesis) occurs in which specific region of the testis?",
      options: ["Epididymis", "Seminiferous tubules", "Leydig cells area", "Prostate stroma"],
      answer: "Seminiferous tubules",
      explanation: "Spermatogenesis takes place along the seminiferous tubules’ germinal epithelium."
    },
    {
      question: "Which muscle in the scrotum helps regulate testicular temperature by wrinkling the skin?",
      options: ["Cremaster muscle", "Dartos muscle", "Scrotalis major", "Levator scroti"],
      answer: "Dartos muscle",
      explanation: "The dartos muscle wrinkles scrotal skin; the cremaster elevates/lowers the testes for temperature control."
    },
    {
      question: "Which hormone primarily stimulates the Leydig (interstitial) cells in the testes to produce testosterone?",
      options: ["FSH", "LH", "Inhibin", "Prolactin"],
      answer: "LH",
      explanation: "In males, LH signals Leydig cells to synthesize and secrete testosterone. FSH aids spermatogenesis (Sertoli cells)."
    },
    {
      question: "What is the main function of the acrosome in a sperm cell?",
      options: [
        "Energy production via mitochondria",
        "Cap containing enzymes to penetrate the egg",
        "Flagellar movement",
        "Storage of nutrients"
      ],
      answer: "Cap containing enzymes to penetrate the egg",
      explanation: "The acrosome in the sperm head has enzymes that help digest the egg’s zona pellucida for fertilization."
    },
    {
      question: "Which structure in males carries both urine and semen (at different times) out of the body?",
      options: ["Ureter", "Urethra", "Vas deferens", "Seminal vesicle duct"],
      answer: "Urethra",
      explanation: "The male urethra serves the urinary system and, during ejaculation, the reproductive system."
    }
  ],

  "Integration & Homeostasis": [
    {
      question: "Homeostasis refers to:",
      options: [
        "Static unchanging internal conditions",
        "Maintenance of a stable internal environment within physiological limits",
        "Conscious control of bodily functions",
        "Matching internal conditions to outside environment"
      ],
      answer: "Maintenance of a stable internal environment within physiological limits",
      explanation: "Homeostasis keeps variables (temp, pH, etc.) near set points despite external changes."
    },
    {
      question: "Which two organ systems are primarily responsible for regulating and maintaining homeostasis?",
      options: [
        "Skeletal and muscular",
        "Respiratory and digestive",
        "Nervous and endocrine",
        "Urinary and reproductive"
      ],
      answer: "Nervous and endocrine",
      explanation: "The nervous system provides rapid control, and the endocrine system offers longer-term regulation."
    },
    {
      question: "Which feedback mechanism amplifies a change rather than reversing it (e.g., oxytocin in labor)?",
      options: ["Negative feedback", "Positive feedback", "Feedforward control", "No mechanism does that"],
      answer: "Positive feedback",
      explanation: "Positive feedback intensifies the initial stimulus until a climactic event (e.g., childbirth) resolves it."
    },
    {
      question: "How does the body respond to hyperglycemia (high blood glucose) to maintain homeostasis?",
      options: [
        "Secrete glucagon to raise blood sugar",
        "Secrete insulin to lower blood sugar",
        "Decrease insulin release",
        "Stop kidney filtration"
      ],
      answer: "Secrete insulin to lower blood sugar",
      explanation: "Insulin from the pancreas prompts cells to uptake glucose, reducing blood glucose levels."
    },
    {
      question: "Which organ system helps regulate body temperature via sweating and shivering (with muscle involvement)?",
      options: [
        "Integumentary system (with muscular system)",
        "Digestive system",
        "Reproductive system",
        "Skeletal system"
      ],
      answer: "Integumentary system (with muscular system)",
      explanation: "Sweat glands (skin) and skeletal muscles (shivering) both help maintain temperature homeostasis."
    },
    {
      question: "If blood calcium is low, which hormone is secreted to restore calcium levels?",
      options: ["Calcitonin", "Parathyroid hormone (PTH)", "Insulin", "Epinephrine"],
      answer: "Parathyroid hormone (PTH)",
      explanation: "PTH raises blood Ca2+ by bone resorption, kidney reabsorption, and vitamin D activation."
    },
    {
      question: "In a negative feedback loop controlling blood pressure, baroreceptors in arteries detect decreased pressure and:",
      options: [
        "Stimulate the vagus nerve to lower HR",
        "Inhibit sympathetic signals to increase vessel diameter",
        "Cause the medulla to increase sympathetic output, raising HR and vasoconstriction",
        "Do nothing"
      ],
      answer: "Cause the medulla to increase sympathetic output, raising HR and vasoconstriction",
      explanation: "Decreased BP triggers reflex sympathetic activation to raise HR and vasoconstrict, restoring BP."
    },
    {
      question: "Which hormone from the adrenal cortex is involved in long-term stress responses, increasing blood glucose levels?",
      options: ["Aldosterone", "Cortisol", "ADH", "Glucagon"],
      answer: "Cortisol",
      explanation: "Cortisol (a glucocorticoid) helps manage chronic stress by raising blood glucose and modulating immune function."
    },
    {
      question: "How do the lungs help maintain acid-base balance (pH)?",
      options: [
        "By secreting bicarbonate into alveoli",
        "By adjusting CO2 exhalation via respiratory rate",
        "By reabsorbing hydrogen ions",
        "They have no role in pH regulation"
      ],
      answer: "By adjusting CO2 exhalation via respiratory rate",
      explanation: "Changing ventilation modifies CO2 levels, shifting carbonic acid equilibrium and thereby pH."
    },
    {
      // Image-based question #1 (Integration & Homeostasis)
      question: "See the feedback loop diagram. Which step indicates the 'effector' responding to low body temperature?",
      options: ["Step 2", "Step 4", "Step 5", "Step 6"],
      answer: "Step 5",
      explanation: "The effector is the organ/tissue that performs the response (e.g., muscles shivering).",
      image: "https://example.com/images/FeedbackLoopDiagram.png",
      imageName: "FeedbackLoopDiagram.png"
    },
    {
      question: "Which hormone and organ combination helps regulate RBC production in response to low blood oxygen (hypoxia)?",
      options: [
        "Erythropoietin from kidneys",
        "Aldosterone from adrenal cortex",
        "Calcitonin from thyroid",
        "ANP from the heart"
      ],
      answer: "Erythropoietin from kidneys",
      explanation: "Low O2 triggers kidneys to release EPO, stimulating RBC synthesis in bone marrow."
    },
    {
      question: "The renin-angiotensin-aldosterone system (RAAS) helps regulate blood pressure by:",
      options: [
        "Lowering heart rate",
        "Causing vasodilation and fluid loss",
        "Promoting vasoconstriction and Na+/water retention",
        "Inhibiting ADH release"
      ],
      answer: "Promoting vasoconstriction and Na+/water retention",
      explanation: "Angiotensin II constricts vessels and aldosterone reabsorbs Na+, raising BP and volume."
    },
    {
      question: "During exercise, local muscle metabolism leads to ___, increasing blood flow to meet oxygen demands.",
      options: [
        "Vasoconstriction in skeletal muscle",
        "Vasodilation in skeletal muscle",
        "No change in local blood flow",
        "Immediate drop in heart rate"
      ],
      answer: "Vasodilation in skeletal muscle",
      explanation: "Local metabolic changes (low O2, high CO2) cause arterioles to dilate in active muscles."
    },
    {
      question: "Which two hormones act antagonistically to maintain stable blood glucose levels?",
      options: [
        "Insulin and glucagon",
        "Calcitonin and PTH",
        "GH and cortisol",
        "ADH and aldosterone"
      ],
      answer: "Insulin and glucagon",
      explanation: "Insulin lowers blood glucose, glucagon raises it — a negative feedback interplay."
    },
    {
      question: "What is the role of the hypothalamus in thermoregulation?",
      options: [
        "No role, it only controls thirst",
        "It acts as the body's thermostat, triggering shivering or sweating",
        "It secretes cortisol directly for heat",
        "It lowers blood pressure when it's hot"
      ],
      answer: "It acts as the body's thermostat, triggering shivering or sweating",
      explanation: "The hypothalamus detects body temperature deviations and initiates appropriate responses."
    },
    {
      question: "In dehydration, the body conserves water by releasing ___.",
      options: ["ANP", "ADH (vasopressin)", "Calcitonin", "TSH"],
      answer: "ADH (vasopressin)",
      explanation: "ADH increases water reabsorption in kidneys to reduce fluid loss."
    },
    {
      question: "A negative feedback loop ceases when:",
      options: [
        "The stimulus is amplified to a peak",
        "The variable is returned to its set point",
        "The effector fails",
        "The environment changes again"
      ],
      answer: "The variable is returned to its set point",
      explanation: "Negative feedback stops once normal conditions are restored, halting further responses."
    },
    {
      question: "Why is blood pH tightly regulated around 7.35–7.45?",
      options: [
        "It prevents RBC from clotting",
        "Enzymes and biochemical processes function optimally in this narrow range",
        "It's unrelated to enzyme function",
        "Acidosis helps oxygen bind hemoglobin"
      ],
      answer: "Enzymes and biochemical processes function optimally in this narrow range",
      explanation: "Cells and enzymes are pH-sensitive; large deviations impair metabolism and function."
    },
    {
      question: "During short-term stress (e.g., immediate danger), which hormone from the adrenal medulla rapidly increases heart rate?",
      options: ["Cortisol", "Epinephrine (adrenaline)", "Insulin", "Aldosterone"],
      answer: "Epinephrine (adrenaline)",
      explanation: "Epinephrine is quickly released in 'fight-or-flight' to elevate heart rate and blood pressure."
    }
  ]
};

// Export if using in a module environment (optional)
// module.exports = { categories };
