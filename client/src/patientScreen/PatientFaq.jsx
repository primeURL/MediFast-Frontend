import React, { useState } from 'react';
import '../patientStyles/patientFaq.css'

const PatientFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState('Appointments');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const faqData = [
    {
      id: 1,
      category: 'Appointments',
      question: 'How can I schedule an appointment?',
      answer: 'To schedule an appointment, you can visit our website and click on the "Book Appointment" button. Alternatively, you can call our clinic at (123) 456-7890 to schedule an appointment over the phone.',
    },
    {
      id: 2,
      category: 'Appointments',
      question: 'What should I bring to my appointment?',
      answer: "For your appointment, please bring your identification card, insurance information, and any relevant medical records or test results. It's also a good idea to arrive a few minutes early to complete any necessary paperwork.",
    },
    {
      id: 3,
      category: 'Billing',
      question: 'How can I pay my medical bills?',
      answer: 'We offer multiple payment options for your convenience. You can pay your medical bills online through our secure payment portal, or you can visit our clinic in person to make a payment by cash, credit card, or debit card.',
    },
    {
      id: 4,
      category: 'Billing',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we understand that medical expenses can be a burden for some patients. We provide flexible payment plans to help you manage your bills. Please contact our billing department to discuss the available options.',
    },
    {
      id: 5,
      category: 'Insurance',
      question: 'How can I verify if my insurance covers the services?',
      answer: 'To verify if your insurance covers the services we provide, please contact your insurance provider directly. They will be able to provide you with information on coverage, copayments, deductibles, and any pre-authorization requirements.',
    },
    {
      id: 6,
      category: 'Insurance',
      question: 'What should I do if my insurance claim is denied?',
      answer: 'If your insurance claim is denied, don\'t worry. Our billing department will work with you to resolve any issues. We can help you understand the reason for the denial and guide you through the appeals process if necessary.',
    },
    {
      id: 7,
      category: 'Telemedicine',
      question: 'How does a telemedicine appointment work?',
      answer: 'A telemedicine appointment allows you to consult with our healthcare providers remotely using video conferencing technology. Prior to your appointment, you will receive instructions on how to join the video call through a secure platform.',
    },
    {
      id: 8,
      category: 'Telemedicine',
      question: 'Are telemedicine appointments covered by insurance?',
      answer: "Many insurance plans now cover telemedicine appointments. However, it's best to check with your insurance provider to confirm coverage. Our staff can also assist you in verifying your insurance coverage for telemedicine appointments.",
    }
    
  ];
  

  const filteredFAQs = faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
        <option value="Appointments">Appointments</option>
        <option value="Billing">Billing</option>
        <option value="Insurance">Insurance</option>
        <option value="Telemedicine">Telemedicine</option>
      </select>
      {filteredFAQs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default PatientFaq;
