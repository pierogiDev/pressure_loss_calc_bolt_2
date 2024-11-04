import PressureLossForm from '../Calculator/PressureLossForm';

export default function CalculatorPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            配管圧力損失計算
          </h1>
          <p className="text-lg text-default-500">
            配管システムの圧力損失を簡単に計算
          </p>
        </header>

        <PressureLossForm />

        <footer className="mt-12 text-center text-default-400">
          <p>Darcy-Weisbach式とColebrook-White式を使用して計算</p>
        </footer>
      </div>
    </main>
  );
}