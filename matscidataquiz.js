// materialData.js
// Example categories and questions for a Material Science quiz

const categories = {
  "Bonding & Structure": [
    {
      question: "Which of the following describes ionic bonding?",
      options: [
        "Sharing of electrons between atoms of similar electronegativity",
        "Transfer of electrons from a metal to a non-metal, creating charged ions",
        "Delocalized electrons forming a 'sea' of electrons",
        "Weak electric forces among neutral molecules"
      ],
      answer: "Transfer of electrons from a metal to a non-metal, creating charged ions",
      explanation: "Ionic bonding involves the transfer of valence electrons between atoms with very different electronegativities."
    },
    {
      question: "In a face-centered cubic (FCC) crystal structure, what is the atomic packing factor (APF)?",
      options: [
        "0.52",
        "0.68",
        "0.74",
        "0.82"
      ],
      answer: "0.74",
      explanation: "FCC and HCP are the most closely packed crystal structures with an APF of 0.74."
    },
    {
      question: "Which atomic arrangement has atoms located at each corner and at the center of each face of the cell?",
      options: [
        "Simple Cubic (SC)",
        "Body-Centered Cubic (BCC)",
        "Face-Centered Cubic (FCC)",
        "Hexagonal Close-Packed (HCP)"
      ],
      answer: "Face-Centered Cubic (FCC)",
      explanation: "FCC places atoms at all corners and the centers of each face."
    }
  ],

  "Phases & Crystallinity": [
    {
      question: "Which term describes a solid that lacks a long-range, repeating atomic order?",
      options: [
        "Crystalline",
        "Amorphous",
        "Polycrystalline",
        "Semi-crystalline"
      ],
      answer: "Amorphous",
      explanation: "Amorphous solids have no significant long-range order in atomic positions."
    },
    {
      question: "In a binary phase diagram, the line separating the liquid region from the two-phase (liquid + solid) region is known as the:",
      options: [
        "Solidus line",
        "Liquidus line",
        "Eutectic line",
        "Solvus line"
      ],
      answer: "Liquidus line",
      explanation: "The liquidus line indicates the temperatures above which the material is fully liquid."
    },
    {
      question: "What is the primary difference between crystalline and polycrystalline materials?",
      options: [
        "Polycrystalline materials contain multiple small crystals (grains) with different orientations",
        "Only crystalline materials have a well-defined unit cell",
        "Polycrystalline materials are always amorphous",
        "Crystalline materials are never used in structural applications"
      ],
      answer: "Polycrystalline materials contain multiple small crystals (grains) with different orientations",
      explanation: "In a polycrystalline solid, each grain is a small crystal with its own orientation, separated by grain boundaries."
    }
  ],

  "Defects & Imperfections": [
    {
      question: "A Frenkel defect in an ionic crystal involves:",
      options: [
        "A cation-vacancy and an anion-vacancy pair",
        "A cation leaving its normal site and occupying an interstitial site",
        "A missing electron in the valence band",
        "An impurity atom in a grain boundary"
      ],
      answer: "A cation leaving its normal site and occupying an interstitial site",
      explanation: "A Frenkel defect is the combination of a vacancy and interstitial defect in the same crystal."
    },
    {
      question: "Which of these is a linear defect?",
      options: [
        "Edge dislocation",
        "Vacancy",
        "Interstitial atom",
        "Grain boundary"
      ],
      answer: "Edge dislocation",
      explanation: "Edge (and screw) dislocations are 1D (linear) defects in crystals."
    },
    {
      question: "What effect does porosity generally have on a ceramic’s mechanical strength?",
      options: [
        "Increases ductility",
        "Decreases mechanical strength",
        "Has no measurable effect",
        "Makes the ceramic perfectly elastic"
      ],
      answer: "Decreases mechanical strength",
      explanation: "Pores act as stress concentrators, lowering strength and modulus."
    }
  ],

  "Mechanical, Thermal & Electrical Properties": [
    {
      question: "Which material property indicates the ability to resist crack propagation?",
      options: [
        "Hardness",
        "Elastic modulus",
        "Fracture toughness",
        "Thermal conductivity"
      ],
      answer: "Fracture toughness",
      explanation: "Fracture toughness measures a material’s resistance to brittle fracture."
    },
    {
      question: "Why are most ceramics poor conductors of electricity?",
      options: [
        "They have free electrons in their structure",
        "Their ionic/covalent bonds localize electrons, preventing electron flow",
        "They have very high densities",
        "They have no atomic bonding"
      ],
      answer: "Their ionic/covalent bonds localize electrons, preventing electron flow",
      explanation: "Ceramics typically have electrons bound in ionic or covalent bonds, limiting conductivity."
    },
    {
      question: "A material with a high coefficient of thermal expansion will:",
      options: [
        "Show little dimensional change with temperature",
        "Expand or contract significantly with temperature changes",
        "Always conduct heat very well",
        "Be entirely resistant to thermal shock"
      ],
      answer: "Expand or contract significantly with temperature changes",
      explanation: "Thermal expansion refers to the degree a material changes size when heated."
    }
  ],

  "Characterization Techniques": [
    {
      question: "Bragg’s Law is used in which characterization method?",
      options: [
        "X-ray diffraction (XRD)",
        "Scanning electron microscopy (SEM)",
        "Light microscopy",
        "Ultrasonic testing"
      ],
      answer: "X-ray diffraction (XRD)",
      explanation: "Bragg’s Law relates the diffraction angles to the atomic planes in a crystal."
    },
    {
      question: "Which microscope would be most suitable for high-resolution imaging of a ceramic’s surface topography?",
      options: [
        "Scanning Electron Microscope (SEM)",
        "Transmission Electron Microscope (TEM)",
        "Optical microscope",
        "Atomic Absorption spectrometer"
      ],
      answer: "Scanning Electron Microscope (SEM)",
      explanation: "SEM is ideal for detailed 3D-like surface imagery at high magnifications."
    },
    {
      question: "Which technique would you use to measure the density of a ceramic sample using fluid displacement?",
      options: [
        "Archimedes’ method",
        "X-ray diffraction",
        "Spectroscopy",
        "Mercury porosimetry"
      ],
      answer: "Archimedes’ method",
      explanation: "Archimedes’ principle is often used to measure solid density by comparing to fluid displacement."
    }
  ],

  "Processing & Applications": [
    {
      question: "Which forming method involves pouring a slip (liquid clay) into a porous mold to shape ceramics?",
      options: [
        "Slip casting",
        "Extrusion",
        "Injection molding",
        "Hand throwing"
      ],
      answer: "Slip casting",
      explanation: "In slip casting, water is absorbed by the mold, leaving a layer of solid clay behind."
    },
    {
      question: "What is the primary advantage of sintering ceramic powders at high temperature?",
      options: [
        "It lowers the melting point",
        "It increases porosity",
        "It reduces porosity and increases the material’s density and strength",
        "It forms a polymer matrix"
      ],
      answer: "It reduces porosity and increases the material’s density and strength",
      explanation: "Sintering fuses powder particles, reducing porosity and improving mechanical properties."
    },
    {
      question: "Which material (commonly used in cutting tools) is known for its hardness and wear resistance, falling into the class of advanced ceramics?",
      options: [
        "Silicon carbide (SiC)",
        "HDPE (high-density polyethylene)",
        "Brass",
        "Polycarbonate"
      ],
      answer: "Silicon carbide (SiC)",
      explanation: "SiC is a well-known ceramic with exceptional hardness and thermal stability."
    }
  ]
};
