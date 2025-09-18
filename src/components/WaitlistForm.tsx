"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { cn, validateEmail, validateRequired } from "@/lib/utils";
import { addWaitlistSignup } from "@/lib/supabase";
import { analytics } from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  location: string;
  childAge: string;
  primaryAllergy: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  location?: string;
  childAge?: string;
  primaryAllergy?: string;
  consent?: string;
}

const ageOptions = [
  { value: "0-12m", label: "0-12 months" },
  { value: "12-24m", label: "12-24 months" },
  { value: "36m", label: "36 months" },
  { value: "4-5y", label: "4-5 years old" },
  { value: "6-8y", label: "6-8 years old" },
  { value: "9-12y", label: "9-12 years old" },
  { value: "13-16y", label: "13-16 years old" },
  { value: "17+", label: "17+" },
];

const allergyOptions = [
  { value: "peanuts", label: "peanuts" },
  { value: "treenuts", label: "treenuts" },
  { value: "dairy", label: "dairy" },
  { value: "eggs", label: "eggs" },
  { value: "seafood", label: "seafood" },
  { value: "sesame", label: "sesame" },
  { value: "multiple", label: "multiple allergies" },
  { value: "other", label: "other" },
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    location: "",
    childAge: "",
    primaryAllergy: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Track when form is focused
  useEffect(() => {
    const handleFocus = () => {
      analytics.waitlistOpen();
    };

    const form = document.getElementById("waitlist-form");
    if (form) {
      form.addEventListener("focusin", handleFocus);
      return () => form.removeEventListener("focusin", handleFocus);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name =
        "Please add your name so we can personalize your experience";
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = "Please add your email so we can send early access";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateRequired(formData.location)) {
      newErrors.location =
        "Please add your location to help us plan regional support";
    }

    if (!validateRequired(formData.childAge)) {
      newErrors.childAge = "Please select your child&apos;s age range";
    }

    if (!validateRequired(formData.primaryAllergy)) {
      newErrors.primaryAllergy = "Please select the primary allergy concern";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to our Privacy Policy to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    analytics.waitlistSubmitAttempt(!isValid);

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Parse location into city and state
      const [city, state] = formData.location.split(",").map((s) => s.trim());

      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");

      // Submit to Supabase
      await addWaitlistSignup({
        name: formData.name,
        email: formData.email,
        city: city || formData.location,
        state: state || "",
        age_bracket: formData.childAge,
        primary_allergy: formData.primaryAllergy,
        consent: formData.consent,
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        referrer: document.referrer || undefined,
      });

      // Track successful submission
      analytics.waitlistSubmitSuccess({
        age_bracket: formData.childAge,
        primary_allergy: formData.primaryAllergy,
        location_state: state || "",
      });

      setIsSubmitted(true);

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = "/thanks";
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // You could add error handling here, like showing a toast notification
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/30 rounded-2xl p-8 shadow-soft border border-primary-sage/20">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-primary-sage mx-auto mb-4" />
          <h3 className="text-2xl font-display font-semibold text-accent-forest mb-2">
            You&apos;re on the list 🎉
          </h3>
          <p className="text-body-md text-supporting-gray mb-6">
            We&apos;ll email early access details soon. In the meantime,
            we&apos;ll send simple tips to help your family take small,
            confident steps.
          </p>
          <div className="bg-primary-cream rounded-xl p-4">
            <p className="text-sm text-supporting-gray">
              <strong>What&apos;s next?</strong> Check your email for a
              confirmation and look out for our gentle tips to help your family
              start building confidence around food.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="bg-white/80 rounded-2xl p-8 shadow-soft border border-primary-sage/20"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-display font-semibold text-accent-forest mb-2">
          Join the priority waitlist
        </h3>
        <p className="text-body-md text-supporting-gray">
          Be the first to access Australia&apos;s breakthrough exposure therapy
          platform for children and their families living with allergies,
          confidently from home
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-accent-forest mb-2"
          >
            Parent/Guardian name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
              errors.name
                ? "border-primary-coral bg-primary-coral/5"
                : "border-primary-sage/20 hover:border-primary-sage/40"
            )}
            placeholder="Your full name"
          />
          {errors.name && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-accent-forest mb-2"
          >
            Email address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
              errors.email
                ? "border-primary-coral bg-primary-coral/5"
                : "border-primary-sage/20 hover:border-primary-sage/40"
            )}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </div>
          )}
        </div>

        {/* Location Field */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-accent-forest mb-2"
          >
            Location (city/state) *
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
              errors.location
                ? "border-primary-coral bg-primary-coral/5"
                : "border-primary-sage/20 hover:border-primary-sage/40"
            )}
            placeholder="e.g. Melbourne, VIC"
          />
          {errors.location && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.location}
            </div>
          )}
        </div>

        {/* Child Age Dropdown */}
        <div>
          <label
            htmlFor="childAge"
            className="block text-sm font-medium text-accent-forest mb-2"
          >
            Child&apos;s age *
          </label>
          <select
            id="childAge"
            value={formData.childAge}
            onChange={(e) => handleInputChange("childAge", e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
              errors.childAge
                ? "border-primary-coral bg-primary-coral/5"
                : "border-primary-sage/20 hover:border-primary-sage/40"
            )}
          >
            <option value="">Select age range</option>
            {ageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.childAge && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.childAge}
            </div>
          )}
        </div>

        {/* Primary Allergy Dropdown */}
        <div>
          <label
            htmlFor="primaryAllergy"
            className="block text-sm font-medium text-accent-forest mb-2"
          >
            Primary food allergy concern *
          </label>
          <select
            id="primaryAllergy"
            value={formData.primaryAllergy}
            onChange={(e) =>
              handleInputChange("primaryAllergy", e.target.value)
            }
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
              errors.primaryAllergy
                ? "border-primary-coral bg-primary-coral/5"
                : "border-primary-sage/20 hover:border-primary-sage/40"
            )}
          >
            <option value="">Select primary concern</option>
            {allergyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.primaryAllergy && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.primaryAllergy}
            </div>
          )}
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleInputChange("consent", e.target.checked)}
              className={cn(
                "mt-1 w-5 h-5 rounded border-2 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-primary-sage/20",
                errors.consent
                  ? "border-primary-coral"
                  : "border-primary-sage/40 text-primary-sage"
              )}
            />
            <span className="text-sm text-supporting-gray">
              I agree to Lighthause&apos;s{" "}
              <a
                href="/privacy"
                className="text-primary-sage hover:text-accent-forest underline"
              >
                Privacy Policy
              </a>{" "}
              and to be contacted about early access.
            </span>
          </label>
          {errors.consent && (
            <div className="flex items-center gap-2 mt-2 text-primary-coral text-sm">
              <AlertCircle className="w-4 h-4" />
              {errors.consent}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-4 px-6 rounded-xl font-medium text-white transition-all",
            "focus:outline-none focus:ring-2 focus:ring-accent-terracotta/20",
            isSubmitting
              ? "bg-supporting-gray cursor-not-allowed"
              : "bg-accent-terracotta hover:bg-accent-terracotta/90 active:scale-95"
          )}
        >
          {isSubmitting ? "Saving your spot..." : "Get priority access"}
        </button>
      </div>
    </form>
  );
}
