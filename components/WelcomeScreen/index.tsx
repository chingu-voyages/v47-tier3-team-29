import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react";
import Footer from "@/components/Footer";

export default function WelcomeScreen() {
  return (
    <main>
      <section className="text-center px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 h-12 flex justify-center">
            <Logo/>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to next level <span className="text-indigo-800">Project Management</span>
          </h2>
          <p className="mb-8">Get your projects organized and streamlined with our tool.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button variant="secondary">
               Get Started
            </Button>
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Log In with Email
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full">
          <img src="/ws-team.webp" alt="Group Image" className="w-full h-auto" />
        </div>
      </section>

      <section className="text-center px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Where <span className="text-purple-600">management</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-purple-600">breezy success!</span>
        </h2>
        <p>We simplify management, you grow. We're responsive. Don’t wait, start today.</p>
      </section>
      
      <section>
        <div className="p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img src="/ws-homeDesktop.webp" alt="home" className="max-w-full h-auto mx-auto" />
            </div>
            <div className="w-full md:w-1/2">
              <h2>Streamline tasks, boost collaboration, and conquer deadlines effortlessly.</h2>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h2>We make management a breeze, so you can focus on what truly matters – growth, innovation, and enjoying the journey.</h2>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/ws-project.webp" alt="home" className="max-w-full h-auto mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We simplify <span className="text-purple-600">management</span>, you <span className="text-purple-600">grow</span>. We're <span className="text-purple-600">responsive</span> Don’t wait, <span className="text-purple-600">start today.</span></h2>
      </section>

      <section className="flex flex-row justify-center items-center gap-4 p-4">
        <div>
          <img src="/ws-iPad_Pro_2020.webp" alt="Image 1" className="max-w-full h-auto" />
        </div>
        <div>
          <img src="/ws-iPhone_13.webp" alt="Image 2" className="max-w-full h-auto" />
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
          <p className="self-center">Get Started</p>
          <Button className="self-center">
            <Mail />  Log In with Email
          </Button>
        </div>
      </section>
      <div className="mt-20">&nbsp;</div>

      <Footer />
    </main>
  );

}