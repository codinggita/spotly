import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricingFAQ = () => {
  const faqs = [
    {
      question: "When do I get paid as an owner?",
      answer: "Payouts are processed automatically 24 hours after the booking is completed. Depending on your bank, funds typically arrive in your account within 3-5 business days."
    },
    {
      question: "Are there any cancellation fees?",
      answer: "Cancellations made more than 24 hours before the booking starts are 100% refundable. Cancellations within 24 hours may incur a partial fee to compensate the space owner."
    },
    {
      question: "What payment methods are supported?",
      answer: "We accept all major credit and debit cards, Apple Pay, and Google Pay through our secure, encrypted payment partner, Stripe."
    },
    {
      question: "Is the owner fee deductible?",
      answer: "In many regions, platform service fees for income-generating property can be tax-deductible. We provide a year-end summary of all earnings and fees for your records."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Common Payment Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all hover:border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-5 pt-0 bg-white text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      )}
    </div>
  );
};

export default PricingFAQ;
