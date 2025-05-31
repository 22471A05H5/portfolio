import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const { name, email, message } = formData;

      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitError(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-blue-300">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">{/* text-blue-300 inherited from parent */}Contact Me</h2>
        <div className="w-20 h-1 bg-blue-300 mx-auto mt-2 mb-4"></div>
        <p className="max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to get in touch!
        </p>
      </div>

      {/* Centered Form */}
      <div className="max-w-2xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="bg-black p-8 rounded-lg shadow-md border border-blue-300">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-blue-900 text-blue-300 rounded-lg">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-900 text-red-400 rounded-lg">
              {submitError}
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                errors.name ? 'border-red-500' : 'border-blue-300'
              } text-blue-300 placeholder-blue-400`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                errors.email ? 'border-red-500' : 'border-blue-300'
              } text-blue-300 placeholder-blue-400`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg bg-black text-blue-300 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Subject"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                errors.message ? 'border-red-500' : 'border-blue-300'
              } text-blue-300 placeholder-blue-400`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
          >
            <Send className="mr-2" size={18} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Footer */}
      
    </section>
  );
};

export default Contact;
