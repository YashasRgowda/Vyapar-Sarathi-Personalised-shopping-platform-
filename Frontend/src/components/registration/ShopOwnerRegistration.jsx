import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const ShopOwnerRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gstin: '',
    shopAddress: '',
    documents: null,
    aadhaar: '',
    aadhaarImage: null,
    otp: ''
  });

  const steps = [
    { number: 1, title: 'Business Info' },
    { number: 2, title: 'Aadhaar Verification' },
    { number: 3, title: 'OTP Verification' },
    { number: 4, title: 'Complete' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-100 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Vyapar sarathi</span>
          <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            Need help? Contact support
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Form */}
          <div>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100"
              >
                <div className="mb-12 border-b border-blue-100 pb-6 bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-4xl font-bold mb-4 text-blue-900">Business Details</h2>
                  <p className="text-gray-600 text-lg">Let's start with your shop information</p>
                </div>
                <div className="space-y-8 bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="relative p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">GSTIN</label>
                    <input
                      type="text"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your GSTIN"
                    />
                  </div>
                  <div className="relative p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Shop Address</label>
                    <textarea
                      name="shopAddress"
                      value={formData.shopAddress}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-4 text-lg bg-white border border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="Enter your shop's complete address"
                    />
                  </div>
                  <div className="relative p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <label className="text-sm font-medium text-blue-800 mb-2 block">Business Documents</label>
                    <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-blue-200 bg-gradient-to-b from-blue-50 to-white p-8 transition-all hover:border-blue-400">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'documents')}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="document-upload"
                      />
                      <label htmlFor="document-upload" className="flex flex-col items-center cursor-pointer">
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                          <Upload className="w-12 h-12 text-blue-600 mb-4" />
                        </div>
                        <span className="text-lg font-medium text-blue-900 mb-2">Upload Business Documents</span>
                        <span className="text-sm text-blue-600">Click to upload or drag and drop</span>
                        <span className="text-xs text-blue-400 mt-1">PDF, DOC up to 10MB</span>
                      </label>
                      {formData.documents && (
                        <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-600">
                          ✓ {formData.documents.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8 bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm border border-purple-100"
              >
                <div className="mb-12 border-b border-purple-100 pb-6 bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-4xl font-bold mb-4 text-purple-900">Identity Verification</h2>
                  <p className="text-gray-600 text-lg">Secure your account with Aadhaar</p>
                </div>
                <div className="space-y-8 bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                  <div className="relative p-4 bg-purple-50/50 border border-purple-100 rounded-xl">
                    <label className="text-sm font-medium text-purple-800 mb-2 block">Aadhaar Number</label>
                    <input
                      type="text"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg bg-white border border-purple-200 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                      placeholder="Enter your 12-digit Aadhaar number"
                    />
                  </div>
                  <div className="mt-8">
                    <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-purple-200 bg-gradient-to-b from-purple-50 to-white p-8 transition-all hover:border-purple-400">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'aadhaarImage')}
                        accept="image/*"
                        className="hidden"
                        id="aadhaar-upload"
                      />
                      <label htmlFor="aadhaar-upload" className="flex flex-col items-center cursor-pointer">
                        <div className="relative">
                          <div className="absolute inset-0 bg-purple-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                          <Upload className="w-12 h-12 text-purple-600 mb-4" />
                        </div>
                        <span className="text-lg font-medium text-purple-900 mb-2">Upload Aadhaar Card</span>
                        <span className="text-sm text-purple-600">Click to upload or drag and drop</span>
                        <span className="text-xs text-purple-400 mt-1">PNG, JPG up to 10MB</span>
                      </label>
                      {formData.aadhaarImage && (
                        <div className="mt-4 p-3 bg-purple-50 border border-purple-100 rounded-lg text-sm text-purple-600">
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
                className="space-y-8 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm border border-green-100"
              >
                <div className="mb-12 border-b border-green-100 pb-6 bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-4xl font-bold mb-4 text-green-900">Verify Your Identity</h2>
                  <p className="text-gray-600 text-lg">Enter the OTP sent to your Aadhaar-linked number</p>
                </div>
                <div className="p-8 bg-white border border-green-100 rounded-xl shadow-sm">
                  <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                    <div className="flex justify-center space-x-4">
                      {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-12 h-12 text-center text-2xl font-bold bg-white border-2 border-green-200 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-100"
                          onChange={(e) => {
                            const otp = formData.otp.split('');
                            otp[index] = e.target.value;
                            setFormData(prev => ({ ...prev, otp: otp.join('') }));
                            if (e.target.value && e.target.nextSibling) {
                              e.target.nextSibling.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-center mt-6">
                      <button className="text-green-600 hover:text-green-800 transition-colors font-medium">
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
                className="text-center py-12 bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-sm border border-teal-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mx-auto mb-8 border border-teal-200"
                >
                  <Check className="w-10 h-10 text-teal-600" />
                </motion.div>
                <div className="bg-white p-8 rounded-xl border border-teal-100 shadow-sm">
                  <h2 className="text-4xl font-bold mb-4 text-teal-900">Welcome Aboard!</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    Your Shop's UCI has been generated successfully
                  </p>
                  <div className="bg-gradient-to-r from-teal-50 to-white rounded-xl p-6 max-w-sm mx-auto border border-teal-100">
                    <p className="text-sm text-teal-600 mb-2">Your Shop's Unique ID</p>
                    <p className="text-2xl font-mono font-bold text-teal-600">VS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              {step > 1 && step < 4 && (
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  onClick={() => setStep(s => s + 1)}
                  className={`ml-auto inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm ${
                    step === 1 ? 'w-full justify-center' : ''
                  }`}
                >
                  {step === 1 ? 'Start Verification' : 'Continue'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Progress & Info */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              {/* Progress Indicator */}
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                {steps.map((s, i) => (
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
                        {s.number === 1 && "Enter your business details"}
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
                    <p className="text-sm text-gray-600">Your GSTIN helps us verify your business credentials</p>
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
                    <p className="text-sm text-gray-600">Business documents help us understand your shop better</p>
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

export default ShopOwnerRegistration;