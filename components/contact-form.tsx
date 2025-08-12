// "use client"

// import { useState, type FormEvent, type ChangeEvent } from "react"

// type FormData = {
//   name: string
//   email: string
//   message: string
// }

// type FormErrors = {
//   name?: string
//   email?: string
//   message?: string
// }

// export default function ContactForm() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState<FormErrors>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}

//     if (!formData.name || formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters"
//     }

//     if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address"
//     }

//     if (!formData.message || formData.message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setIsSubmitting(true)

//     try {
//       // Code to run after submitting form

//       setSubmitStatus("success")
//       setFormData({ name: "", email: "", message: "" })

//     } catch (error) {
//       setSubmitStatus("error")
//       // Code to run after encountering erro
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {submitStatus === "success" && (
//         <div className="p-4 bg-green-900/50 border border-green-700 rounded-md text-green-300 mb-6">
//           Message sent successfully! We'll get back to you soon.
//         </div>
//       )}

//       {submitStatus === "error" && (
//         <div className="p-4 bg-red-900/50 border border-red-700 rounded-md text-red-300 mb-6">
//           Something went wrong. Please try again later.
//         </div>
//       )}

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium mb-2">
//           Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your name"
//           className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//         {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium mb-2">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="your.email@example.com"
//           className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//         {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-sm font-medium mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="How can we help you?"
//           rows={5}
//           className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//         {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
//       >
//         {isSubmitting ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   )
// }
"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

// Define the type for form data, including the new mobile field
type FormData = {
  name: string;
  email: string;
  mobile: string; // Mobile field is now part of the form data
  message: string;
};

// Define the type for form errors, including mobile error
type FormErrors = {
  name?: string;
  email?: string;
  mobile?: string; // Error for mobile field
  message?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "", // Initialize mobile number in state
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validation for mobile number: compulsory and basic pattern check
    // This regex allows digits, spaces, hyphens, and parentheses, and requires at least 7 digits
    if (!formData.mobile || !/^[\d\s\-()]{7,}$/.test(formData.mobile)) {
      newErrors.mobile =
        "Please enter a valid mobile number (at least 7 digits)";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle"); // Reset status on new submission

    try {
      // Re-integrating the fetch call to your API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Clear form after successful submission, including mobile
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        console.error("API Error:", result.message || "Unknown error");
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div className="p-4 bg-green-900/50 border border-green-700 rounded-md text-green-300 mb-6">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-900/50 border border-red-700 rounded-md text-red-300 mb-6">
          Something went wrong. Please try again later.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          // Applied the new input styling provided
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900/50 text-white"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          // Applied the new input styling provided
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900/50 text-white"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Mobile Number Input - Now compulsory */}
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium mb-2">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel" // Use type="tel" for phone numbers
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Your mobile number"
          // Applied the new input styling provided
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900/50 text-white"
        />
        {errors.mobile && (
          <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          // Applied the new textarea styling provided
          className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900/50 text-white"
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
