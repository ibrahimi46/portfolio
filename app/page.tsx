import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-100">
        <Image
          src={"/background_dark.jpg"}
          fill
          alt="background"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <main className="relative min-h-screen flex items-center justify-center">
        <div>main page</div>
      </main>
    </>
  );
}
