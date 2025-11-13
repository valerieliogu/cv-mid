export const profileData = {
  name: "Valerie Liogu",
  title: "Graphic Designer",
  about: "Saya adalah seorang Graphic Designer yang passionate dalam menciptakan desain visual yang menarik dan fungsional. Dengan pengalaman lebih dari 3 tahun di industri kreatif, saya fokus pada branding, UI/UX design, dan digital illustration. Saya percaya bahwa desain yang baik tidak hanya indah dipandang, tetapi juga mampu mengkomunikasikan pesan dengan efektif.",
  email: "valerie.liogu@example.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia"
};

export const educationData = [
  {
    id: 1,
    school: "Universitas Indonesia",
    year: "2018 - 2022",
    degree: "S1 Desain Komunikasi Visual",
    description: "Fokus pada desain grafis, branding, dan media digital"
  },
  {
    id: 2,
    school: "SMK Negeri 1 Jakarta",
    year: "2015 - 2018",
    degree: "Multimedia",
    description: "Jurusan Multimedia dengan fokus pada desain grafis dan animasi"
  }
];

export const skillsData = [
  { id: 1, name: "Adobe Photoshop", level: "Expert", percentage: 95 },
  { id: 2, name: "Adobe Illustrator", level: "Expert", percentage: 90 },
  { id: 3, name: "Figma", level: "Advanced", percentage: 88 },
  { id: 4, name: "Adobe InDesign", level: "Advanced", percentage: 85 },
  { id: 5, name: "UI/UX Design", level: "Advanced", percentage: 82 },
  { id: 6, name: "Brand Identity", level: "Advanced", percentage: 90 },
  { id: 7, name: "Typography", level: "Expert", percentage: 92 },
  { id: 8, name: "Color Theory", level: "Expert", percentage: 94 }
];

export const experienceData = [
  {
    id: 1,
    company: "Creative Studio Indonesia",
    role: "Senior Graphic Designer",
    year: "2022 - Sekarang",
    description: "Memimpin tim desain untuk proyek branding klien besar, menciptakan identitas visual yang memorable, dan mengelola proyek dari konsep hingga eksekusi."
  },
  {
    id: 2,
    company: "Digital Agency Jakarta",
    role: "Graphic Designer",
    year: "2021 - 2022",
    description: "Membuat desain untuk media sosial, website, dan campaign digital untuk berbagai klien dari industri F&B, fashion, dan teknologi."
  },
  {
    id: 3,
    company: "Freelance",
    role: "Freelance Designer",
    year: "2020 - 2021",
    description: "Melayani berbagai klien untuk kebutuhan branding, logo design, packaging, dan social media content."
  }
];

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
