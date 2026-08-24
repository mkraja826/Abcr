export const company = {
  legalName: "ABCR Infra Projects Pvt. Ltd.",
  shortName: "ABCR",
  tagline: "Your Vision. Our Foundation.",
  description:
    "ABCR Infra Projects Pvt. Ltd. is an infrastructure development company delivering projects across railways, roads, irrigation, water supply and urban development in India.",
  mission:
    "To deliver quality, transparent and innovative infrastructure solutions through disciplined engineering and execution.",
  vision:
    "To contribute to modern, sustainable infrastructure across India while creating long-term value for clients and communities.",
  incorporated: "16 January 2024",
  cin: "U46632AP2024PTC113576",
  registeredAddress:
    "24-101-20-37, Saibaba Temple area, Near Renuka Yellamma Temple, Proddatur, Cuddapah, Andhra Pradesh 516360, India",
};

export const services = [
  {
    slug: "railway-infrastructure",
    number: "01",
    title: "Railway Infrastructure",
    shortTitle: "Railways",
    description:
      "Civil, electrical and railway infrastructure execution, including TRD-related works and railway electrification support.",
    capabilities: ["Railway civil works", "Electrical works", "TRD / OHE works", "Execution & commissioning support"],
  },
  {
    slug: "scada-automation",
    number: "02",
    title: "SCADA & Automation",
    shortTitle: "SCADA & Automation",
    description:
      "Electrical infrastructure and automation solutions covering substations, power distribution and SCADA integration.",
    capabilities: ["SCADA integration", "Substation systems", "Power distribution", "Automation & controls"],
  },
  {
    slug: "epc-projects",
    number: "03",
    title: "EPC Projects",
    shortTitle: "EPC",
    description:
      "Turnkey engineering, procurement and construction delivery with coordinated execution through commissioning.",
    capabilities: ["Engineering", "Procurement", "Construction", "Testing & commissioning"],
  },
  {
    slug: "water-irrigation",
    number: "04",
    title: "Water, Irrigation & Pipelines",
    shortTitle: "Water & Irrigation",
    description:
      "Water-supply, irrigation and pipeline infrastructure supporting reliable distribution and public infrastructure development.",
    capabilities: ["Water supply systems", "Irrigation works", "MS pipelines", "DI pipeline laying"],
  },
  {
    slug: "building-construction",
    number: "05",
    title: "Building Construction",
    shortTitle: "Buildings",
    description:
      "Civil construction capabilities for institutional, infrastructure and allied building requirements.",
    capabilities: ["Civil works", "Structural execution", "Project coordination", "Quality-led construction"],
  },
  {
    slug: "planning-consultancy",
    number: "06",
    title: "Infrastructure Planning & Consultancy",
    shortTitle: "Consultancy",
    description:
      "Infrastructure planning support including DPR preparation, feasibility studies and technical consultancy.",
    capabilities: ["DPR preparation", "Feasibility studies", "Technical consultancy", "Infrastructure planning"],
  },
];

const clientPhotos = {
  electricalField: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_1800/v1787567539/abcr/projects/site-electrical-field.jpg",
  scadaRoom: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_1800/v1787567551/abcr/projects/scada-switchgear-room.jpg",
  pipelineTrench: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_1800/v1787567564/abcr/projects/pipeline-trench.jpg",
  pipelineLowering: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_1800/v1787567583/abcr/projects/pipeline-lowering.jpg",
  pipelineCrane: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_1800/v1787567595/abcr/projects/pipeline-crane-installation.jpg",
};

export const projects = [
  {
    slug: "wcr-tughlakabad-railway-project",
    title: "WCR – Tughlakabad Railway Project",
    sector: "Railway Infrastructure",
    region: "India",
    image: clientPhotos.electricalField,
    summary: "A railway infrastructure assignment presented in ABCR's public project portfolio under its railway delivery capabilities.",
  },
  {
    slug: "wcr-tkd",
    title: "WCR – TKD",
    sector: "Railway Infrastructure",
    region: "India",
    image: clientPhotos.electricalField,
    summary: "A WCR railway assignment publicly listed by ABCR as part of its railway infrastructure project portfolio.",
  },
  {
    slug: "ms-pipeline-project",
    title: "MS Pipeline Project",
    sector: "Water & Pipelines",
    region: "India",
    image: clientPhotos.pipelineCrane,
    summary: "An MS pipeline infrastructure project presented in ABCR's public portfolio within its water and pipeline capabilities.",
  },
  {
    slug: "scr-tmx-dpw3",
    title: "SCR TMX DPW3",
    sector: "Railway Infrastructure",
    region: "India",
    image: clientPhotos.electricalField,
    summary: "An SCR-related project publicly listed by ABCR within its railway infrastructure portfolio.",
  },
  {
    slug: "scada-projects",
    title: "SCADA Projects",
    sector: "SCADA & Automation",
    region: "India",
    image: clientPhotos.scadaRoom,
    summary: "SCADA and automation work presented by ABCR as part of its electrical infrastructure and control-system capabilities.",
  },
  {
    slug: "nwr-jodhpur",
    title: "NWR – Jodhpur",
    sector: "Railway Infrastructure",
    region: "Rajasthan",
    image: clientPhotos.electricalField,
    summary: "An NWR-related assignment in Jodhpur publicly listed in ABCR's railway infrastructure portfolio.",
  },
  {
    slug: "di-laying-project",
    title: "DI Laying Project",
    sector: "Water & Pipelines",
    region: "India",
    image: clientPhotos.pipelineTrench,
    summary: "A DI laying project presented in ABCR's public water and pipeline infrastructure portfolio.",
  },
];

export const leadership = [
  {
    name: "Nagarjuna Reddy M",
    role: "Founder & Managing Director",
    image: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_900/v1787567614/abcr/leadership/nagarjuna-reddy-m.jpg",
  },
  {
    name: "Bharathi M",
    role: "Director",
    image: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_900/v1787567627/abcr/leadership/bharathi-m.jpg",
  },
  {
    name: "Raghunath Reddy",
    role: "Chief Executive Officer",
    image: "https://res.cloudinary.com/dkt1vl8gy/image/upload/f_auto,q_auto,w_900/v1787567640/abcr/leadership/raghunath-reddy.jpg",
  },
];

export const contact = {
  phones: ["+91 63966 02455", "+91 73823 02455", "+91 96403 39650"],
  emails: [
    "abcrinfraprojects@gmail.com",
    "abcrinfraprojects@yahoo.com",
    "abcrinfraprojects@outlook.com",
  ],
  offices: [
    { label: "Registered Head Office", location: company.registeredAddress },
    { label: "Branch Office", location: "Rajasthan, India" },
  ],
};
