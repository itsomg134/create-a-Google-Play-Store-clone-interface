import React, { useState } from 'react';
import { Search, Star, Download, TrendingUp, Gamepad2, Film, Music, Book, ShoppingBag, Home, Menu, Smartphone, Grid3x3 } from 'lucide-react';

export default function PlayStoreClone() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredApps = [
    { id: 1, name: 'Photo Editor Pro', category: 'Photography', rating: 4.5, downloads: '10M+', icon: '📸', featured: true },
    { id: 2, name: 'Fitness Tracker', category: 'Health', rating: 4.7, downloads: '50M+', icon: '💪', featured: true },
    { id: 3, name: 'Language Learn', category: 'Education', rating: 4.6, downloads: '100M+', icon: '🎓', featured: true },
  ];

  const categories = [
    { name: 'Games', icon: Gamepad2, color: 'bg-green-500' },
    { name: 'Entertainment', icon: Film, color: 'bg-red-500' },
    { name: 'Music', icon: Music, color: 'bg-purple-500' },
    { name: 'Books', icon: Book, color: 'bg-blue-500' },
    { name: 'Shopping', icon: ShoppingBag, color: 'bg-orange-500' },
  ];

  const topApps = [
    { id: 4, name: 'Social Connect', category: 'Social', rating: 4.3, downloads: '1B+', icon: '💬' },
    { id: 5, name: 'Video Stream', category: 'Entertainment', rating: 4.4, downloads: '500M+', icon: '🎬' },
    { id: 6, name: 'Music Player', category: 'Music', rating: 4.6, downloads: '100M+', icon: '🎵' },
    { id: 7, name: 'News Reader', category: 'News', rating: 4.2, downloads: '50M+', icon: '📰' },
    { id: 8, name: 'Weather Pro', category: 'Weather', rating: 4.5, downloads: '10M+', icon: '🌤️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-gray-600" />
            <div className="flex-1 flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2">
              <Search className="w-5 h-5 text-gray-600" />
              <input
                type="text"
                placeholder="Search for apps & games"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            {[
              { id: 'home', label: 'For you', icon: Home },
              { id: 'games', label: 'Games', icon: Gamepad2 },
              { id: 'apps', label: 'Apps', icon: Grid3x3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Featured Apps Carousel */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredApps.map((app) => (
              <div key={app.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">{app.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{app.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{app.category}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{app.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{app.downloads}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Top categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-2"
              >
                <div className={`w-12 h-12 ${cat.color} rounded-full flex items-center justify-center`}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Top Charts */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-semibold">Top charts</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {topApps.map((app, index) => (
              <div key={app.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-bold text-gray-400 w-6">{index + 1}</span>
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg flex items-center justify-center text-3xl">
                  {app.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.category}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{app.rating}</span>
                    </div>
                    <span>{app.downloads}</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700 transition-colors">
                  Install
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {[
              { icon: Gamepad2, label: 'Games' },
              { icon: Smartphone, label: 'Apps' },
              { icon: Film, label: 'Movies' },
              { icon: Book, label: 'Books' },
            ].map((item) => (
              <button key={item.label} className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-green-600 transition-colors">
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}