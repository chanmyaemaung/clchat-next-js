import { MainLogin } from "./components/Button";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto border rounded-lg p-10 mt-32">
      <h1 className="text-4xl font-semibold text-center">Login to use chat!</h1>

      <div className="mt-8">
        <MainLogin />
      </div>
    </div>
  );
}
