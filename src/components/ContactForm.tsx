import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 sm:w-5 h-4 sm:h-5 text-emerald-300" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
        >
          <Send className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>

        {submitStatus !== 'idle' && (
          <div
            className={`flex items-center space-x-2 p-3 sm:p-4 rounded-lg text-xs sm:text-sm ${
              submitStatus === 'success'
                ? 'bg-emerald-500/20 border border-emerald-400/30'
                : 'bg-red-500/20 border border-red-400/30'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-300 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-300 flex-shrink-0" />
            )}
            <span
              className={`${
                submitStatus === 'success' ? 'text-emerald-200' : 'text-red-200'
              }`}
            >
              {statusMessage}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}