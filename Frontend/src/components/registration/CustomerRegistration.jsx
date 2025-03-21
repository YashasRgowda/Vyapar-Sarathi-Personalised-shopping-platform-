import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateCustomerUCI } from '../../utils/uciUtils';

const CustomerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    aadhaar: '',
    aadhaarImage: null,
    otp: '',
    birthYear: '',
    uci: ''
  });

  const steps = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Aadhaar Verification' },
    { number: 3, title: 'OTP Verification' },
    { number: 4, title: 'Complete' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, aadhaarImage: file }));
  };

  // Generate UCI when moving to the final step
  const handleNextStep = () => {
    if (step === 3) {
      // Extract birth year from Aadhaar number (fictional - for demonstration)
      // In a real app, you would extract this from a verified source
      const birthYear = formData.birthYear || '1972';
      const customerUCI = generateCustomerUCI(birthYear);
      setFormData(prev => ({ ...prev, uci: customerUCI }));
    }
    setStep(s => s + 1);
  };

  // For OTP input handling
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const otp = formData.otp.split('');
      otp[index] = value;
      setFormData(prev => ({ ...prev, otp: otp.join('') }));
      
      // Auto focus to next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`cust-otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-100 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Vyapar sarathi</span>
          <div className="text-xs sm:text-sm text-gray-500 bg-gray-50 px-2 sm:px-4 py-2 rounded-full border border-gray-100">
            Need help? Contact support
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-gradient-to-br from-blue-50 to-white p-4 sm:p-8 rounded-2xl shadow-sm border border-blue-100"
              >
                <div className="mb-8 sm:mb-12 border-b border-blue-100 pb-6 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-blue-900">Welcome to Future</h2>
                  <p className="text-gray-600 text-base sm:text-lg">Let's start with your basic details</p>
                </div>
                <div className="space-y-6 sm:space-y-8 bg-white p-4 sm:p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="relative p-3 sm:p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="relative p-3 sm:p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="relative p-3 sm:p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="relative p-3 sm:p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Year of Birth</label>
                    <input
                      type="text"
                      name="birthYear"
                      value={formData.birthYear}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your birth year (e.g., 1990)"
                      maxLength="4"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-gradient-to-br from-purple-50 to-white p-4 sm:p-8 rounded-2xl shadow-sm border border-purple-100"
              >
                <div className="mb-8 sm:mb-12 border-b border-purple-100 pb-6 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-purple-900">Identity Verification</h2>
                  <p className="text-gray-600 text-base sm:text-lg">Secure your account with Aadhaar</p>
                </div>
                <div className="space-y-6 sm:space-y-8 bg-white p-4 sm:p-6 rounded-xl border border-purple-100 shadow-sm">
                  <div className="relative p-3 sm:p-4 bg-purple-50/50 border border-purple-100 rounded-xl">
                    <label className="text-sm font-medium text-purple-800 mb-2 block">Aadhaar Number</label>
                    <input
                      type="text"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg bg-white border border-purple-200 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="Enter your Aadhaar number"
                      maxLength="12"
                    />
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-purple-200 bg-gradient-to-b from-purple-50 to-white p-4 sm:p-8 transition-all hover:border-purple-400">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                        id="aadhaar-upload"
                      />
                      <label htmlFor="aadhaar-upload" className="flex flex-col items-center cursor-pointer">
                        <div className="relative">
                          <div className="absolute inset-0 bg-purple-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                          <Camera className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mb-2 sm:mb-4" />
                        </div>
                        <span className="text-base sm:text-lg font-medium text-purple-900 mb-1 sm:mb-2">Upload Aadhaar Card</span>
                        <span className="text-xs sm:text-sm text-purple-600">Click to upload or drag and drop</span>
                        <span className="text-xs text-purple-400 mt-1">PNG, JPG up to 10MB</span>
                      </label>
                      {formData.aadhaarImage && (
                        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-purple-50 border border-purple-100 rounded-lg text-xs sm:text-sm text-purple-600">
                          ✓ {formData.aadhaarImage.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-gradient-to-br from-green-50 to-white p-4 sm:p-8 rounded-2xl shadow-sm border border-green-100"
              >
                <div className="mb-8 sm:mb-12 border-b border-green-100 pb-6 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-green-900">Verify Your Identity</h2>
                  <p className="text-gray-600 text-base sm:text-lg">Enter the OTP sent to your Aadhaar-linked number</p>
                </div>
                <div className="p-4 sm:p-8 bg-white border border-green-100 rounded-xl shadow-sm">
                  <div className="bg-green-50/50 p-4 sm:p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center space-x-2 sm:space-x-4">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          id={`cust-otp-${index}`}
                          type="text"
                          maxLength="1"
                          className="w-8 h-10 sm:w-12 sm:h-12 text-center text-xl sm:text-2xl font-bold bg-white border-2 border-green-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-100"
                          value={formData.otp[index] || ''}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                        />
                      ))}
                    </div>
                    <div className="text-center mt-4 sm:mt-6">
                      <button className="text-green-600 hover:text-green-800 transition-colors font-medium text-sm sm:text-base">
                        Resend OTP
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8 sm:py-12 bg-gradient-to-br from-teal-50 to-white p-4 sm:p-8 rounded-2xl shadow-sm border border-teal-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-teal-200"
                >
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
                </motion.div>
                <div className="bg-white p-4 sm:p-8 rounded-xl border border-teal-100 shadow-sm">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-teal-900">Welcome Aboard!</h2>
                  <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                    Your UCI has been generated successfully
                  </p>
                  <div className="bg-gradient-to-r from-teal-50 to-white rounded-xl p-4 sm:p-6 max-w-sm mx-auto border border-teal-100">
                    <p className="text-sm text-teal-600 mb-1 sm:mb-2">Your Unique Customer ID</p>
                    <p className="text-xl sm:text-2xl font-mono font-bold text-teal-600 break-all">{formData.uci}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Navigation Buttons */}
            <div className="mt-8 sm:mt-12 flex justify-between items-center bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-100 text-sm sm:text-base"
                >
                  <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  onClick={handleNextStep}
                  className={`ml-auto inline-flex items-center px-4 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm ${
                    step === 1 ? 'w-full justify-center' : ''
                  }`}
                >
                  {step === 1 ? 'Start Verification' : 'Continue'}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Progress & Info */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              {/* Progress Indicator */}
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                {steps.map((s) => (
                  <div key={s.number} className={`flex items-center p-4 rounded-xl ${
                    step >= s.number ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50 border border-gray-100'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= s.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{s.title}</h3>
                      <p className="text-sm text-gray-500">
                        {s.number === 1 && "Enter your personal details"}
                        {s.number === 2 && "Verify your Aadhaar information"}
                        {s.number === 3 && "Confirm with OTP verification"}
                        {s.number === 4 && "Registration complete"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Information Card */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Why we need your information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">Your details help us create a secure and verified account for you</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">Aadhaar verification ensures compliance with regulatory requirements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600">We protect your data with industry-standard security measures</p>
                  </li>
                </ul>
              </div>

              {/* Help Section */}
              <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Need assistance?</h3>
                    <p className="text-sm text-gray-500">Our support team is here to help</p>
                  </div>
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 rounded-lg border border-blue-100 transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;