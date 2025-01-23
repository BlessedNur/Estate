import React from 'react'
import { Shield } from 'lucide-react'

const BuyerProtection = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300">
      <div className="flex items-start gap-4">
        <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Buyer Protection</h3>
          <p className="text-gray-600 leading-relaxed">
            Our transparent pricing includes no hidden fees, and we offer a straightforward 
            return policy for added peace of mind. Additionally, all transactions are 
            processed through secure payment gateways, safeguarding your personal 
            information. Our dedicated customer service team is always available to assist 
            you, ensuring that any questions or concerns are promptly addressed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BuyerProtection