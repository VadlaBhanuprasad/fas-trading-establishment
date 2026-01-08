import { useState, useEffect } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [statusMessage, setStatusMessage] = useState('');

  // useEffect(() => {
  //   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Public Key
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // const response = await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     subject: formData.subject,
      //     message: formData.message,
      //     time: new Date().toLocaleString(),
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );

      // console.log('EmailJS Response:', response);

      setSubmitStatus('success');
      setStatusMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
        Send Us a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>

        {/* Status */}
        {submitStatus !== 'idle' && (
          <div
            className={`flex items-center space-x-2 p-3 sm:p-4 rounded-lg ${
              submitStatus === 'success'
                ? 'bg-emerald-500/20 border border-emerald-400/30'
                : 'bg-red-500/20 border border-red-400/30'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
            ) : (
              <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-300" />
            )}
            <span
              className={
                submitStatus === 'success'
                  ? 'text-emerald-200'
                  : 'text-red-200'
              }
            >
              {statusMessage}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
