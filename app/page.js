import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-sky-400 flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-white drop-shadow-md text-6xl font-semibold ">
          🔒 Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button size="lg" variant="secondary">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
