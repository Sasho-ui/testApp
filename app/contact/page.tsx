export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-gray-600">
          Email:{" "}
          <a href="mailto:info@contact.com" className="text-blue-600 hover:underline">
            info@contact.com
          </a>
        </p>
      </div>
    </div>
  );
}
