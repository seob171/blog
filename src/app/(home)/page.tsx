"use client";
export default function Home() {
  const getAirlineDomestic = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/airline/domestic");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getAirlineOverseas = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/airline/overseas");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col max-w-screen-sm mx-auto bg-slate-400"></main>
  );
}
