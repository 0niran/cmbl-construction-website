// Contact Information
export const CONTACT_INFO = {
  phone: '+234-706-840-9411',
  email: 'info@cmbl.cc',
  company: 'CMBL Construction',
  location: 'Nigeria'
} as const;

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
] as const;

// Company Stats
export const COMPANY_STATS = [
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "20+", label: "Years Experience" }
] as const;

// Services Data
export const SERVICES = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, warehouses, and commercial complexes built to the highest standards with professional project management.",
    features: ["Project Management", "Quality Assurance", "Timely Delivery", "Budget Control"]
  },
  {
    title: "Residential Construction",
    description: "Custom homes, renovations, and residential developments designed for modern living with attention to detail and quality craftsmanship.",
    features: ["Custom Design", "Quality Materials", "Professional Finish", "Client Collaboration"]
  },
  {
    title: "Civil Engineering",
    description: "Infrastructure development, road construction, and comprehensive civil engineering solutions for long-lasting structural integrity.",
    features: ["Site Planning", "Infrastructure Design", "Engineering Analysis", "Regulatory Compliance"]
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our comprehensive renovation and remodeling services that breathe new life into your property.",
    features: ["Interior Design", "Structural Updates", "Modern Upgrades", "Space Optimization"]
  },
  {
    title: "Landscaping",
    description: "Beautiful outdoor spaces and professional landscaping solutions for both residential and commercial properties.",
    features: ["Garden Design", "Hardscaping", "Maintenance Plans", "Sustainable Solutions"]
  },
  {
    title: "Project Consultation",
    description: "Expert consultation services for construction planning, budgeting, and comprehensive project management from start to finish.",
    features: ["Cost Estimation", "Planning Services", "Risk Assessment", "Technical Guidance"]
  }
] as const;

// Company Values
export const COMPANY_VALUES = [
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in every project, ensuring superior craftsmanship and attention to detail in all our construction work."
  },
  {
    title: "Professional Service",
    description: "Our experienced team provides professional construction services with transparent communication and dedicated project management throughout."
  },
  {
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on time without compromising on quality, safety standards, or client expectations."
  },
  {
    title: "Customer Focus",
    description: "Client satisfaction is our top priority. We work closely with you to understand your vision and bring it to life with excellence."
  }
] as const;