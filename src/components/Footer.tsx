"use client";


export default function Footer() {
  return (
    <footer className="bg-primary-cream">
      <div className="container mx-auto px-4 py-16">
        {/* Centered Logo */}
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-forest-green rounded-full"></div>
            <span className="text-2xl font-bold text-forest-green">Lighthause</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
