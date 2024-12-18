import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Brandon 👋</span>
            </h1>
            <span className="text-xl">Sophomore at the National University of Singapore</span>
            <p className="max-w-[500px] md:max-w-[600px] mt-5 mb-9 text-white/80">
              With my passion for science and technology, I aspire to further strengthen my knowledge, and develop innovative and integrated solutions to real world problems. I am interested in backend development, data engineering and intelligent systems and I am eager to learn and expand my skills in these areas.
            </p>
            { /* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/resume.pdf"
                download="resume.pdf"
              >
                <Button
                  variants="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          { /* photo */ }
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;