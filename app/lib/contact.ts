import { apiRequest } from './api'

// object_type: 0->Appointment, 1->Request info, 2->Doc assistance, 3->Status, 4->General, 5->Others
export const SUBJECT_ENUM: Record<string, number> = {
  'Book an Appointment':     0,
  'Prenota un appuntamento': 0,
  'Request Information':     1,
  'Richiedi informazioni':   1,
  'Document Assistance':     2,
  'Assistenza documenti':    2,
  'Application Status':      3,
  'Stato della pratica':     3,
  'General Inquiry':         4,
  'Richiesta generica':      4,
  'Other':                   5,
  'Altro':                   5,
}

// service_of_interest: 0->Immigration, 1->CAF, 2->Training, 3->Business, 4->Insurance, 5->Indian Consulate, 6->Visas, 7->Other
export const SERVICE_ENUM: Record<string, number> = {
  'Immigration Services': 0,
  'Servizi Immigrazione': 0,
  'CAF & Patronato':      1,
  'Training & Courses':   2,
  'Formazione & Corsi':   2,
  'Business Consultancy': 3,
  'Consulenza Aziendale': 3,
  'Insurance':            4,
  'Assicurazioni':        4,
  'Indian Consulate':     5,
  'Consolato Indiano':    5,
  'International Visas':  6,
  'Visti Internazionali': 6,
  'Other Services':       7,
  'Altri Servizi':        7,
}

// preferred_contact_method: 0->Email, 1->Phone, 2->WhatsApp, 3->Visit in person
export const CONTACT_METHOD_ENUM: Record<string, number> = {
  email:    0,
  phone:    1,
  whatsapp: 2,
  inperson: 3,
}

export const LANGUAGE_LABELS: Record<string, string> = {
  it: 'Italian',
  en: 'English',
  ur: 'Urdu',
  bn: 'Bengali',
  pa: 'Punjabi',
  si: 'Sinhala',
  ar: 'Arabic',
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  subject: string
  subjectIndex?: number
  services: string[]
  serviceIndices?: number[]
  message: string
  preferredContact: string
  language?: string
  consentContact: boolean
  consentAdvertising: boolean
  consentThirdParty: boolean
}

export interface ContactSubmissionResponse {
  success: boolean
  message: string
  id: string
}

export async function submitContactForm(form: ContactFormData) {
  const objectType =
    typeof form.subjectIndex === 'number' && form.subjectIndex >= 0
      ? form.subjectIndex
      : (SUBJECT_ENUM[form.subject] ?? 5)

  const resolvedServices =
    form.serviceIndices && form.serviceIndices.length > 0
      ? form.serviceIndices.filter((idx) => idx >= 0)
      : form.services
          .map((service) => SERVICE_ENUM[service])
          .filter((idx): idx is number => typeof idx === 'number')

  const primaryService = resolvedServices.length > 0 ? resolvedServices[0] : 0

  return apiRequest<ContactSubmissionResponse>('/api/user/contact-us', {
    method: 'POST',
    body: {
      name:                               form.firstName,
      surname:                            form.lastName,
      email:                              form.email,
      telephone_number:                   form.phone,
      country:                            form.country,
      object_type:                        objectType,
      service_of_interest:                primaryService,
      services_of_interest:               resolvedServices,
      preferred_contact_method:           CONTACT_METHOD_ENUM[form.preferredContact] ?? 0,
      preferred_language:                 LANGUAGE_LABELS[form.language ?? 'it'] || 'Italian',
      message:                            form.message,
      consent_for_contact:                form.consentContact ? 1 : 0,
      consent_share_data_for_advertising: form.consentAdvertising ? 1 : 0,
      consent_third_party_promotional:    form.consentThirdParty ? 1 : 0,
    },
  })
}
