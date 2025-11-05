// src/config/site.ts
export type Socials = {
  facebook?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
  twitter?: string
}

export type SiteConfig = {
  companyName: string
  phone: string            // display phone number
  phoneHref?: string       // tel: formatted (optional; will be derived if missing)
  email?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  hours?: string
  socials?: Socials
  primaryColor?: string    // for quick theming later
  accentColor?: string
  logo?: string
  site?: string
}

const raw: SiteConfig = {
  companyName: "Your Company Name",
  logo: "/images/logo.png",
  site: "yourwebsite.com",
  phone: "(555) 123-4567",
  email: "info@yourcompany.com",
  address: "123 Main Street",
  city: "Your City",
  state: "ST",
  zip: "12345",
  hours: "Mon–Fri 8am–6pm, Sat 9am–2pm",
  socials: {
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany"
  },
  primaryColor: "#3b82f6",
  accentColor: "#10b981"
}

// helper to normalize phone for tel: links
function toTelHref(display: string): string {
  return "tel:" + display.replace(/[^\d+]/g, "")
}

export const site: SiteConfig = {
  ...raw,
  phoneHref: raw.phoneHref ?? toTelHref(raw.phone)
}