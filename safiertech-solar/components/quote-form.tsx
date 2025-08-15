"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Phone, Instagram, CheckCircle } from "lucide-react"
import Link from "next/link"
import { quoteFormSchema, transformFormData, type QuoteFormData } from "@/lib/schema"
import { siteConfig } from "@/lib/config"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      consent: false,
    },
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)

    try {
      const transformedData = transformFormData(data)

      const response = await fetch(siteConfig.api.quoteEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        reset()
        toast({
          title: "Quote Request Submitted!",
          description: "We'll contact you within 24 hours with your personalized quotation.",
        })
      } else {
        throw new Error(result.message || "Failed to submit quote request")
      }
    } catch (error) {
      console.error("Quote submission error:", error)
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at 8745078808.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-brand-600 mb-4">Thank You!</h2>
          <p className="text-neutral-600 mb-6">
            Your quote request has been submitted successfully. Our solar experts will contact you within 24 hours with
            a personalized quotation and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Request
            </Button>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-brand-600">Get Your Free Solar Quotation</CardTitle>
        <CardDescription>
          Fill out the form below and our solar experts will provide you with a personalized quotation within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-600">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" {...register("name")} placeholder="Enter your full name" />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" {...register("phone")} placeholder="+91 9876543210" />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">
                  City / District <span className="text-red-500">*</span>
                </Label>
                <Input id="city" {...register("city")} placeholder="e.g., Ghaziabad, Modinagar" />
                {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
              </div>
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-600">Property Information</h3>

            <div className="space-y-2">
              <Label>
                Property Type <span className="text-red-500">*</span>
              </Label>
              <Select onValueChange={(value) => setValue("propertyType", value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Industrial">Industrial</SelectItem>
                  <SelectItem value="Farm">Farm</SelectItem>
                </SelectContent>
              </Select>
              {errors.propertyType && <p className="text-sm text-red-500">{errors.propertyType.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="loadKw">Connected Load (kW)</Label>
                <Input id="loadKw" type="number" step="0.1" {...register("loadKw")} placeholder="e.g., 5.5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyBill">Monthly Electricity Bill (₹)</Label>
                <Input id="monthlyBill" type="number" {...register("monthlyBill")} placeholder="e.g., 3000" />
              </div>
            </div>
            {errors.loadKw && <p className="text-sm text-red-500">{errors.loadKw.message}</p>}
            <p className="text-sm text-neutral-500">
              Please provide either your connected load or monthly bill amount (at least one is required).
            </p>

            <div className="space-y-2">
              <Label htmlFor="roofArea">Available Rooftop Area (sq ft)</Label>
              <Input id="roofArea" type="number" {...register("roofArea")} placeholder="e.g., 600" />
              <p className="text-sm text-neutral-500">Optional: Helps us estimate system size more accurately.</p>
            </div>
          </div>

          {/* Contact Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-600">Contact Preferences</h3>

            <div className="space-y-2">
              <Label>
                Preferred Contact Time <span className="text-red-500">*</span>
              </Label>
              <Select onValueChange={(value) => setValue("preferredTime", value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9 AM–12 PM">9 AM–12 PM</SelectItem>
                  <SelectItem value="12 PM–3 PM">12 PM–3 PM</SelectItem>
                  <SelectItem value="3 PM–6 PM">3 PM–6 PM</SelectItem>
                  <SelectItem value="6 PM–9 PM">6 PM–9 PM</SelectItem>
                  <SelectItem value="Anytime">Anytime</SelectItem>
                </SelectContent>
              </Select>
              {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Any specific requirements or questions?"
                rows={4}
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
            </div>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={watch("consent")}
                onCheckedChange={(checked) => setValue("consent", checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed">
                I agree to be contacted by Safiertech Solar regarding my solar quotation request. I understand that my
                information will be used to provide personalized solar solutions and may be shared with authorized
                partners for installation purposes.
              </Label>
            </div>
            {errors.consent && <p className="text-sm text-red-500">{errors.consent.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="space-y-4">
            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Get Free Quotation"
              )}
            </Button>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call: {siteConfig.contact.phone}
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow on Instagram
                </Link>
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
