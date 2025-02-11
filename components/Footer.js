// components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-6 px-4 md:fixed bottom-0 left-0 w-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">BC Tech</div>
        <div className="text-gray-600 dark:text-gray-400">
          © {currentYear} Bamfa Ceesay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
