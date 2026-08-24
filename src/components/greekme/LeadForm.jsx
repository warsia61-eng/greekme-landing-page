import React, { useState } from "react";

const inputCls =
  "w-full bg-white text-[#111] border border-[#111]/15 rounded-sm px-[14px] py-3 min-h-[48px] placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#29ABE2]";

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    kitchen_location: "",
    current_setup: "Cloud Kitchen",
    operates_kitchen: "Yes",
    launch_timeline: "",
    preferred_plan: "Discuss the royalty model",
  });

  const set = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const next = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("access_key", "139474be-ec06-43ab-bfc1-a957d45a4989");
    formData.append("subject", `GreekME Partnership Enquiry - ${form.full_name}`);
    formData.append("from_name", "GreekME Web Lead");

    // Append all form fields
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setDone(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white text-[#111] rounded-md p-10 md:p-12 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)]">
        <h3 className="font-display uppercase font-black text-4xl text-[#111] leading-[1.05]">
          Enquiry Received.
        </h3>

        <p className="mt-4 text-[#5A5A5A] text-[16px] leading-[1.6]">
          Thank you for reaching out! Your partnership details have been sent successfully to{" "}
          <strong className="text-[#111]">hello@food-verse.co.uk</strong>. Our team will review your enquiry and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#111] rounded-md p-8 md:p-12 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)]">

      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        {[1, 2].map((s) => (
          <span
            key={s}
            className={`h-1 flex-1 rounded-full ${
              step >= s ? "bg-[#29ABE2]" : "bg-[#111]/15"
            }`}
          />
        ))}

        <span className="text-[#5A5A5A] text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">
          Step {step}/2
        </span>
      </div>

      {/* STEP 1 */}
      {step === 1 ? (
        <form onSubmit={next} className="space-y-4">

          <input
            required
            className={inputCls}
            placeholder="Full name"
            value={form.full_name}
            onChange={set("full_name")}
            aria-label="Full name"
          />

          <input
            required
            type="email"
            className={inputCls}
            placeholder="Email"
            value={form.email}
            onChange={set("email")}
            aria-label="Email"
          />

          <input
            required
            className={inputCls}
            placeholder="Phone"
            value={form.phone}
            onChange={set("phone")}
            aria-label="Phone"
          />

          <input
            required
            className={inputCls}
            placeholder="Kitchen location (city / postcode)"
            value={form.kitchen_location}
            onChange={set("kitchen_location")}
            aria-label="Kitchen location"
          />

          <select
            className={inputCls}
            value={form.current_setup}
            onChange={set("current_setup")}
            aria-label="Current setup"
          >
            {[
              "Cloud Kitchen",
              "Restaurant Owner",
              "First-Time Entrepreneur",
              "Multi-Brand Operator",
            ].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full btn-greek min-h-[40px] py-2 font-bold uppercase tracking-[0.12em] text-[11px] rounded-full transition"
          >
            Continue <span className="arrow-x">→</span>
          </button>
        </form>
      ) : (

        /* STEP 2 */
        <form onSubmit={submit} className="space-y-4">

          <fieldset>
            <legend className="text-[#5A5A5A] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
              Do you operate a kitchen?
            </legend>

            <div className="flex gap-3">
              {["Yes", "No"].map((value) => (
                <button
                  type="button"
                  key={value}
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      operates_kitchen: value,
                    }))
                  }
                  className={`flex-1 min-h-[48px] rounded-full font-bold uppercase tracking-[0.12em] text-[11px] ${
                    form.operates_kitchen === value
                      ? "btn-greek"
                      : "border border-[#111]/15 text-[#111]"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </fieldset>

          <input
            required
            className={inputCls}
            placeholder="Desired launch timeline (e.g. 4 weeks)"
            value={form.launch_timeline}
            onChange={set("launch_timeline")}
            aria-label="Desired launch timeline"
          />

          <label className="block text-[#5A5A5A] text-[11px] uppercase tracking-[0.2em] font-bold mb-2">
            What would you like to discuss?
          </label>

          <select
            className={inputCls}
            value={form.preferred_plan}
            onChange={set("preferred_plan")}
            aria-label="What would you like to discuss"
          >
            {[
              "Discuss the royalty model",
              "Full partner system",
              "Just exploring",
              "Need advice",
            ].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          {errorMessage && (
            <p className="text-red-500 text-xs font-bold text-center mt-2">
              {errorMessage}
            </p>
          )}

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 min-h-[40px] border border-[#111]/15 text-[#111] font-bold uppercase tracking-[0.12em] text-[11px] rounded-full"
            >
              Back
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-greek min-h-[40px] py-2 font-bold uppercase tracking-[0.12em] text-[11px] rounded-full transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Partnership Enquiry"}{" "}
              <span className="arrow-x">→</span>
            </button>

          </div>
        </form>
      )}
    </div>
  );
}