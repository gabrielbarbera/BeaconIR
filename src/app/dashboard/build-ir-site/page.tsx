"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BuildIRSitePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Form data
  const [formData, setFormData] = useState({
    companyName: "",
    tickerSymbol: "",
    website: "",
    description: "",
    logo: null as File | null,
    primaryColor: "#FAA52E",
    secondaryColor: "#0A1428",
  });

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/companies/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          tickerSymbol: formData.tickerSymbol,
          website: formData.website,
          description: formData.description,
          primaryColor: formData.primaryColor,
          secondaryColor: formData.secondaryColor,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Failed to create IR site");
        setLoading(false);
        return;
      }

      setMessage("IR site created successfully!");

      // Redirect to dashboard after success
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      setMessage("Failed to create IR site");
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.companyName && formData.tickerSymbol;
    }
    if (step === 2) {
      return formData.description;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27] pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-gold hover:text-gold/80 mb-4 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">
            Build Your IR Site
          </h1>
          <p className="text-gray-400">
            Create your investor relations website in a few simple steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    s === step
                      ? "bg-gold text-deep-navy"
                      : s < step
                      ? "bg-gold/20 text-gold"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {s < step ? "✓" : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      s < step ? "bg-gold" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>Company Info</span>
            <span>Branding</span>
            <span>Review</span>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes("successfully")
                ? "bg-green-500/10 border border-green-500/30 text-green-300"
                : "bg-red-500/10 border border-red-500/30 text-red-300"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
          {/* Step 1: Company Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Company Information
                </h2>
                <p className="text-gray-400">Tell us about your company</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Acme Corporation"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="tickerSymbol"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Ticker Symbol <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="tickerSymbol"
                    value={formData.tickerSymbol}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tickerSymbol: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="ACME"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="https://www.example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                    placeholder="Brief description of your company..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Branding */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Branding
                </h2>
                <p className="text-gray-400">Customize your site appearance</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="logo"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company Logo
                  </label>
                  <input
                    type="file"
                    id="logo"
                    accept="image/*"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        logo: e.target.files?.[0] || null,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="primaryColor"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Primary Color
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="color"
                      id="primaryColor"
                      value={formData.primaryColor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryColor: e.target.value,
                        })
                      }
                      className="w-20 h-12 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.primaryColor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryColor: e.target.value,
                        })
                      }
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="#FAA52E"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="secondaryColor"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Secondary Color
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="color"
                      id="secondaryColor"
                      value={formData.secondaryColor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondaryColor: e.target.value,
                        })
                      }
                      className="w-20 h-12 rounded cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.secondaryColor}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondaryColor: e.target.value,
                        })
                      }
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="#0A1428"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Review & Submit
                </h2>
                <p className="text-gray-400">
                  Review your information before creating your IR site
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Company Information
                  </h3>
                  <div className="space-y-2 text-gray-400">
                    <p>
                      <span className="text-white">Company:</span>{" "}
                      {formData.companyName}
                    </p>
                    <p>
                      <span className="text-white">Ticker:</span>{" "}
                      {formData.tickerSymbol}
                    </p>
                    {formData.website && (
                      <p>
                        <span className="text-white">Website:</span>{" "}
                        {formData.website}
                      </p>
                    )}
                    {formData.description && (
                      <p>
                        <span className="text-white">Description:</span>{" "}
                        {formData.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Branding
                  </h3>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Primary Color
                      </p>
                      <div
                        className="w-16 h-16 rounded"
                        style={{ backgroundColor: formData.primaryColor }}
                      ></div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-2">
                        Secondary Color
                      </p>
                      <div
                        className="w-16 h-16 rounded border border-white/20"
                        style={{ backgroundColor: formData.secondaryColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-8">
            {step > 1 && (
              <button onClick={prevStep} className="btn-secondary flex-1">
                Previous
              </button>
            )}
            <div className={`flex gap-4 ${step === 1 ? "ml-auto" : "flex-1"}`}>
              {step < 3 ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating..." : "Create IR Site"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
