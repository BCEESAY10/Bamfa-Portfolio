// components/Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-3xl font-bold text-primary">BC Tech</div>
            <div className="text-gray-600 dark:text-gray-400">
              © {currentYear} Bamfa Ceesay. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    )
  }