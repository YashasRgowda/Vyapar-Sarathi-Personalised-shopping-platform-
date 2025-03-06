import React from 'react';
import { UserCircle, Store, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegistrationChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-100 z-50 backdrop-blur-lg bg-white/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Vyapar sarathi
          </span>
          <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            Need help? Contact support
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Options */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100"
            >
              <div className="mb-12 border-b border-blue-100 pb-6 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">Welcome to Future</h2>
                <p className="text-gray-600 text-lg">Choose how you'd like to join us</p>
              </div>

              <div className="space-y-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('/register/customer')}
                  className="w-full bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <UserCircle className="w-12 h-12 text-blue-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">Customer Registration</h3>
                      <p className="text-gray-600">Start your unified shopping experience</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('/register/shop-owner')}
                  className="w-full bg-white p-6 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <Store className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-semibold mb-2 text-purple-900">Business Registration</h3>
                      <p className="text-gray-600">Join our network of trusted retailers</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-purple-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Info */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              {/* Benefits Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Why Choose Vyapar Sarathi?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Unified Shopping Experience</h4>
                      <p className="text-sm text-gray-600">Connect with multiple shops through a single platform</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-1 mr-4">
                      <span className="text-purple-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Secure Transactions</h4>
                      <p className="text-sm text-gray-600">Verified shops and secure payment methods</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-1 mr-4">
                      <span className="text-teal-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Easy Management</h4>
                      <p className="text-sm text-gray-600">Streamlined tools for both customers and businesses</p>
                    </div>
                  </div>
                </div>
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

export default RegistrationChoice;