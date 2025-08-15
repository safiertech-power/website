import { z } from "zod"

export const quoteFormSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
    phone: z
      .string()
      .regex(/^(\+91|91)?[6-9]\d{9}$/, "Please enter a valid Indian phone number")
      .transform((val) => val.replace(/^(91|\+91)/, "+91")),
    email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
    city: z.string().min(2, "City is required").max(100, "City name is too long"),
    propertyType: z.enum(["Residential", "Commercial", "Industrial", "Farm"], {
      required_error: "Please select a property type",
    }),
    loadKw: z
      .string()
      .optional()
      .transform((val) => (val && val !== "" ? Number.parseFloat(val) : null)),
    monthlyBill: z
      .string()
      .optional()
      .transform((val) => (val && val !== "" ? Number.parseFloat(val) : null)),
    roofArea: z
      .string()
      .optional()
      .transform((val) => (val && val !== "" ? Number.parseFloat(val) : null)),
    preferredTime: z.enum(["9 AM–12 PM", "12 PM–3 PM", "3 PM–6 PM", "6 PM–9 PM", "Anytime"], {
      required_error: "Please select a preferred contact time",
    }),
    message: z.string().max(500, "Message is too long").optional(),
    consent: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
    recaptchaToken: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.loadKw !== null || data.monthlyBill !== null
    },
    {
      message: "Please provide either Connected Load (kW) or Monthly Bill amount",
      path: ["loadKw"],
    },
  )

export type QuoteFormData = z.infer<typeof quoteFormSchema>

export const transformFormData = (data: QuoteFormData) => ({
  name: data.name,
  phone: data.phone,
  email: data.email || null,
  city: data.city,
  type: data.propertyType,
  loadKw: data.loadKw,
  monthlyBill: data.monthlyBill,
  roofArea: data.roofArea,
  preferredTime: data.preferredTime,
  message: data.message || "",
  recaptchaToken: data.recaptchaToken || null,
})
