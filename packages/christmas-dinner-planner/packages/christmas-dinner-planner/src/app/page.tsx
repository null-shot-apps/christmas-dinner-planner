'use client';

import { useState } from 'react';

export default function ChristmasDinnerPlanner() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-700 mb-3">🎄 Christmas Dinner Planning</h1>
          <p className="text-gray-600 text-lg">Let&apos;s organize your family gathering!</p>
        </div>

        {/* Extracted from Chat */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Extracted from Chat</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">🍽️ Food Ideas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Biryani</li>
                <li>• Pizza</li>
                <li>• Pasta</li>
                <li>• Christmas special dish</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3">🚫 Constraints</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Budget concerns</li>
                <li>• No cooking (mentioned)</li>
                <li>• Home food only (mentioned)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">❤️ Preferences</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Order online (mentioned)</li>
                <li>• Home food only (conflicts with ordering)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 Practical Options */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🎯 3 Practical Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div 
              onClick={() => setSelectedOption(1)}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                selectedOption === 1 ? 'ring-4 ring-green-500' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Option 1: Biryani Feast</h3>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-2">🍽️ Menu</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chicken/Veg Biryani (ordered)</li>
                  <li>• Raita &amp; salad</li>
                  <li>• Simple dessert (store-bought)</li>
                </ul>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">⏱️ Effort:</span> <span className="text-green-600 font-medium">Low</span></p>
                <p><span className="font-semibold">💸 Budget:</span> <span className="text-yellow-600 font-medium">Medium</span></p>
                <p><span className="font-semibold">🎄 Holiday Feel:</span> <span className="text-yellow-600 font-medium">Medium</span></p>
              </div>
            </div>

            {/* Option 2 */}
            <div 
              onClick={() => setSelectedOption(2)}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                selectedOption === 2 ? 'ring-4 ring-green-500' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Option 2: Pasta &amp; Pizza Combo</h3>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-2">🍽️ Menu</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2-3 pizzas (variety)</li>
                  <li>• Pasta (Alfredo/marinara)</li>
                  <li>• Garlic bread</li>
                  <li>• Simple salad</li>
                </ul>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">⏱️ Effort:</span> <span className="text-green-600 font-medium">Low</span></p>
                <p><span className="font-semibold">💸 Budget:</span> <span className="text-yellow-600 font-medium">Medium</span></p>
                <p><span className="font-semibold">🎄 Holiday Feel:</span> <span className="text-red-600 font-medium">Low</span></p>
              </div>
            </div>

            {/* Option 3 */}
            <div 
              onClick={() => setSelectedOption(3)}
              className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl ${
                selectedOption === 3 ? 'ring-4 ring-green-500' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Option 3: Home-Cooked Christmas Special</h3>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-2">🍽️ Menu</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Roast chicken or baked ham</li>
                  <li>• Mashed potatoes</li>
                  <li>• Roasted vegetables</li>
                  <li>• Gravy</li>
                  <li>• Christmas pudding/cake</li>
                </ul>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">⏱️ Effort:</span> <span className="text-red-600 font-medium">High</span></p>
                <p><span className="font-semibold">💸 Budget:</span> <span className="text-orange-600 font-medium">Medium-High</span></p>
                <p><span className="font-semibold">🎄 Holiday Feel:</span> <span className="text-green-600 font-medium">High</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="bg-gradient-to-r from-green-600 to-red-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">✅ Recommended: Option 1 – Biryani Feast</h2>
          <p className="text-lg font-semibold mb-3">Why?</p>
          <ul className="space-y-2">
            <li>• Low stress (order online, minimal prep)</li>
            <li>• Budget-friendly (one main dish feeds many)</li>
            <li>• Festive and shareable</li>
            <li>• Balances &quot;home food&quot; feel with &quot;no cooking&quot; constraint</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Next Steps for Execution</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">1. Order Biryani (2-3 days before)</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Choose restaurant (check reviews, portion sizes)</li>
                <li>• Order quantity: 1 serving per person + 2 extra</li>
                <li>• Confirm delivery time: 1-2 hours before dinner</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">2. Prep Simple Sides (day of)</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Raita: yogurt + cucumber + spices (10 min)</li>
                <li>• Salad: pre-washed greens + dressing (5 min)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">3. Dessert (day before or morning of)</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Buy: cake, cookies, or ice cream from store</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">4. Timing</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 2 hours before: Set table, prep sides</li>
                <li>• 1 hour before: Biryani delivery arrives</li>
                <li>• Serve warm with sides</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">5. Backup Plan</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Have pizza place number ready in case biryani order fails</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Editable Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>🛠️ <strong>Need to adjust?</strong> Click any option to select it, or edit the sections above to match your needs!</p>
        </div>
      </div>
    </div>
  );
}

