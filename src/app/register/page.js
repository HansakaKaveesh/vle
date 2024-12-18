"use client";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    country: "",
    email: "",
    phone: "",
    registering_as: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // For field-level errors
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable the button during submission

  // Handles form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validates form data before submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name) newErrors.full_name = "Full name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.country) newErrors.country = "Please select your country.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.registering_as) newErrors.registering_as = "Please select a role.";
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true); // Disable the button
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }
      alert("Registration successful!"); // Display success message
    } catch (error) {
      alert(error.message); // Display error message
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {[
            { label: "Full Name", name: "full_name", type: "text", placeholder: "Enter your full name" },
            { label: "Username", name: "username", type: "text", placeholder: "Enter your username" },
            { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
            { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter your phone number" },
            { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-600 text-sm mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="registering_as">
              Registering As
            </label>
            <select
              id="registering_as"
              name="registering_as"
              value={formData.registering_as}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
            {errors.registering_as && <p className="text-red-500 text-sm">{errors.registering_as}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
