import React from 'react';

const faqs = [
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, most spots offer free cancellation up to 24 hours before your booking starts.'
  },
  {
    question: 'How do I access gated parking?',
    answer: 'Your digital pass includes access codes or a Bluetooth trigger for compatible gates.'
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Common Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
