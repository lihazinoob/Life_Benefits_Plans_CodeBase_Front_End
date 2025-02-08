import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {motion} from "framer-motion"
const faqs = [
  {
    question: "What is Life Insurance?",
    answer: `Life insurance is a contract between an individual and an insurance company, in which the insurer agrees to pay a designated sum of money to the beneficiaries of the policyholder upon their death.There are different types of life insurance, such as:

    1. Term Life Insurance – Provides coverage for a specific period (e.g., 10, 20, or 30 years). If the policyholder dies within the term, the beneficiaries receive the death benefit.
    
    2. Final Expense Insurance - Also known as burial insurance or funeral insurance, covers end-of-life expenses, such as funeral and burial costs, medical bills, and any other final expenses.
    
    3. Whole Life Insurance – Offers lifelong coverage and includes a cash value component that grows over time, in addition to the death benefit.
    
    4. Universal Life Insurance – Provides flexible premiums and death benefits with a cash value component that can be adjusted over time.`,
  },
  {
    question: "How do I buy Life Insurance?",
    answer: `Our website is dedicated to providing you quote from multiple companies in your area to make sure that you receive the best price possible. If you would like to see quotes on life insurance, please enter your information above and we will work to find you the best possible quotes free of charge. Call us now, 1-833-831-4438, to get the best quotes online!!`,
  },
  {
    question: "Do I need Life Insurance?",
    answer: `Having life insurance policy in place is a smart decision that can save your family thousands. In cases of accidental death there is a large chance that your families savings could be completely wiped out by an unexpected funeral. Funerals can lead families into debt and having a safety net will remove that burden. If you're looking to relieve the amount of stress on your family, looking for a life insurance policy is a great way to do it.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-12">
      <h2 className="text-4xl md:text-3xl font-semibold text-center mb-6 tracking-wide">
        Got Questions?
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-white"
            >
              {openIndex === index && (
                <div className="p-5 border-t">
                  <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
