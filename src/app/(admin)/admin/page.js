export default function Home() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/image.png')" }} 
    >
      {/* Overlay with blur + dark tint */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content sits above the blur */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Oxygen Foundation Admin
        </h1>
        <p className="text-gray-200 mb-6">
          Please sign in or sign up to continue.
        </p>
        <a
          href="/auth"
          className="px-6 py-2 bg-yellow-600 text-white rounded-full shadow hover:bg-yellow-700 transition"
        >
          Go to Auth Page
        </a>
      </div>
    </main>
  );
}
