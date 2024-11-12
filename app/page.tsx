export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-5 text-center">
      <div>
        <h1 className="lg:text-7xl text-3xl font-bold">ITWizrd!</h1>
        <p className="text-2xl">The IT Wizard to solve it all!</p>
      </div>
      <h2 className="lg:text-9xl text-7xl font-bold">Coming Soon!</h2>

      <small className="text-xl text-gray-500">
        Want to help? Visit us on{" "}
        <a href="https://github.com/ITWizrd-App/ITWizrd" className="underline">
          GitHub
        </a>
      </small>
    </div>
  );
}
