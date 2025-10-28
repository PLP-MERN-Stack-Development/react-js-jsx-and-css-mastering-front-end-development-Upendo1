 {/* Task 2  and 5*/}
export default function Card({ title, children }) {
  return (
    <div
      className="
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-2xl shadow-md hover:shadow-lg
        p-4 sm:p-6
        transition-all duration-300 ease-in-out
        transform hover:-translate-y-1
        animate-fadeIn
      "
    >
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
}
