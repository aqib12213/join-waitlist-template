import LogoAndChip from "@/components/LogoAndChip";
import HeaderAndDescription from "@/components/HeaderAndDescription";
import SignUpForm from "@/components/SignUpForm";
import Footer from "@/components/Footer";
import BackgroundImages from "@/components/BackgroundImages";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen lg:p-24">
      <BackgroundImages />
      <div className="flex flex-col max-w-screen-md gap-4 px-4 sm:gap-6 ">
        <LogoAndChip />
        <HeaderAndDescription />
        <SignUpForm />
      </div>
      <Footer className="absolute text-center bottom-5 text-zinc-200" />
    </main>
  );
}
