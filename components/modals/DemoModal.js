import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DemoModal = ({ showModal, selectedProject, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* API Demo */}
              {selectedProject.apiDemo && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      API Endpoints
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.apiDemo.endpoints.map(
                        (endpoint, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-3 py-1 rounded text-sm font-semibold ${
                                  endpoint.method === "GET"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                    : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                }`}>
                                {endpoint.method}
                              </span>
                              <code className="text-sm text-gray-700 dark:text-gray-300">
                                {endpoint.path}
                              </code>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {endpoint.description}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.apiDemo.features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Screenshots */}
              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      Project Screenshots
                    </h3>
                    <div className="grid gap-4">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                          <img
                            src={screenshot}
                            alt={`${selectedProject.title} screenshot ${
                              index + 1
                            }`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* No demo content */}
              {!selectedProject.apiDemo &&
                (!selectedProject.screenshots ||
                  selectedProject.screenshots.length === 0) && (
                  <div className="text-center py-12">
                    <ImageIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Demo content coming soon. Please check the GitHub
                      repository for more details.
                    </p>
                    {!selectedProject.isPrivate && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all">
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
