 {/* Task 2  */}
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center mt-8">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="space-x-3 mt-2">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}
