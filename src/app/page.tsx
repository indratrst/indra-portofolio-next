import Main from "@/components/Pages/Main";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Main />
      </ThemeProvider>
    </>
  );
}
