export default function Home() {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Welcome to Richter Restorations</h1>
      <img
        src="/Main/MainPhoto.jpeg"
        alt="Hank, Gus and Eddie"
        className="mx-auto rounded-2xl shadow-lg w-1/2"
      />
      {/* <p className="mt-6 text-lg text-gray-700">
        We bring your dream renovations to life with elegance and precision.
      </p> */}
    </div>
  );
}