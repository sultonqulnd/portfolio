// EmailJS Configuration
// Get these values from your EmailJS dashboard at https://dashboard.emailjs.com/

export const emailjsConfig = {
  // Your EmailJS Service ID (found in Email Services section)
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_sn1706dr",

  // Your EmailJS Template ID (found in Email Templates section)
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_sn1706dr",

  // Your EmailJS Public Key (found in Account > API Keys section)
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "wXY9hW4K9nl_EVtxd",
};

// Template parameters that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  name: string;
  email: string;
  subject: string;
  message: string;
  time: string;
  to_email: string;
}
