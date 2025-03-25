// src/pages/Help.tsx
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const Help = () => {
  const [activeTab, setActiveTab] = useState<string>('faq');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // FAQ list
  const faqs = [
    {
      id: 'faq1',
      question: 'How do I create my first interview?',
      answer: 'To create your first interview, navigate to the Interviews page and click on the "New Interview" button. You can then set up the interview details including participant information, scheduling, and language preferences.'
    },
    {
      id: 'faq2',
      question: 'What languages does fabskill support?',
      answer: 'fabskill currently supports interviews in multiple languages including English, French, Spanish, Kinyarwanda, and Swahili.'
    },
    {
      id: 'faq3',
      question: 'How do I invite team members?',
      answer: 'You can invite team members through the Settings > Team Management page. Click on the "Invite Member" button and enter their email address.'
    },
    {
      id: 'faq4',
      question: 'How long can an interview be?',
      answer: 'Interviews can be up to 2 hours long. For longer interviews, we recommend breaking them into multiple sessions for optimal processing and analysis.'
    },
    {
      id: 'faq5',
      question: 'What audio file formats are supported?',
      answer: 'fabskill supports multiple audio formats including MP3, WAV, WMA, AAC, and AIFF. For optimal results, we recommend using WAV or MP3 formats.'
    },
    {
      id: 'faq6',
      question: 'How accurate is the transcription?',
      answer: 'Our transcription service has an accuracy rate of approximately 95% depending on audio quality and clarity.'
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;
  
  // Support ticket initial state
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    description: '',
    email: 'yvladimir@andrew.cmu.edu'
  });
  
  // Handle form changes
  const handleTicketFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicketForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Submit support ticket
  const submitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Support ticket submitted successfully!');
    setTicketForm({
      subject: '',
      description: '',
      email: 'yvladimir@andrew.cmu.edu'
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Header title="Help Center" />
        
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="p-6 bg-[#6a3de8] text-white rounded-t-lg">
              <h2 className="text-xl font-bold mb-2">How can we help you?</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="border-b flex">
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'faq' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('faq')}
              >
                FAQs
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'support' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('support')}
              >
                Contact Support
              </button>
            </div>
            
            <div className="p-6">
              {/* FAQs Tab */}
              {activeTab === 'faq' && (
                <div>
                  {filteredFAQs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFAQs.map((faq) => (
                        <details key={faq.id} className="border rounded-lg overflow-hidden">
                          <summary className="px-4 py-3 bg-gray-50 cursor-pointer font-medium flex justify-between items-center">
                            {faq.question}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="px-4 py-3">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                      <p className="text-gray-500">Try using different keywords</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Support Ticket Tab */}
              {activeTab === 'support' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Submit a Support Ticket</h3>
                  
                  <form onSubmit={submitTicket}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={ticketForm.subject}
                        onChange={handleTicketFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Brief summary of your issue"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={ticketForm.description}
                        onChange={handleTicketFormChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Please provide details about your issue"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={ticketForm.email}
                        onChange={handleTicketFormChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit"
                        className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]"
                      >
                        Submit Ticket
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                    
                    <div className="flex gap-4">
                      <div className="border rounded-lg p-4 flex-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-[#6a3de8]/20 text-[#6a3de8] rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Email Support</p>
                            <a href="mailto:support@fabskill.com" className="text-[#6a3de8] text-sm">support@fabskill.com</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-[#6a3de8]/20 text-[#6a3de8] rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Phone Support</p>
                            <a href="tel:+18005551234" className="text-[#6a3de8] text-sm">+1 (800) 555-1234</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;