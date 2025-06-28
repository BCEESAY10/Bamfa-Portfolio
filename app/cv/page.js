"use client";

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">My CV</h1>
      {/* <div className="mb-8">
        <a
          href="/Bamfa_CV-June_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          Download CV (PDF)
        </a>
      </div> */}
      <div className="w-full max-w-4xl aspect-[8.5/11] shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-900">
        <iframe
          src="/Bamfa_CV-June_2025.pdf"
          title="CV PDF"
          className="w-full h-[80vh] min-h-[500px] border-0"
        />
      </div>
    </div>
  );
}