import HomeLayout  from "../Layouts/HomeLayout";
import about from "../Assets/Images/about.png";
import Sigmund_Freud from "../Assets/Images/Sigmund_Freud.jpg";
import jung from "../Assets/Images/jung.jpg";
import  bf from "../Assets/Images/bf.jpg";
import AlbertBanduraFeatured from "../Assets/Images/AlbertBanduraFeatured.jpg";
import jeanpiaget from "../Assets/Images/jeanpiaget.jpg";






function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                             Empowering You Towards Mental Wellbeing
                        </h1>

                        <p className="text-xl text-gray-200">
                            At Saksham Minds, our goal is to make mental health support simple and accessible.
                            We are building this platform to help students, professionals, and anyone dealing with stress or workload. 
                            Life can feel overwhelming, and we want to provide a safe space where you find guidance, positivity, and tools to manage your well-being.
                            This is not just a website, it's a step towards stronger minds and healthier lives.
                        </p>

                    </section>

                    <div className="w-1/2">
                         <img 
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"

                            }}
                            alt="about us"
                              className="drop-shadow-2xl"
                               src={about}
                         
                         />
                         

                    </div>

                </div>

          <div className="carousel w-1/2 m-auto my-16">
                <div id="slide1" className="carousel-item relative w-full flex justify-center">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                     <img src={Sigmund_Freud} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">
                        {"Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways."}
                     </p>
                     <h3 className="text-2xl font-semibold"> Sigmund Freud </h3>
                     <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide5" className="btn btn-circle">❮</a>
                     <a href="#slide2" className="btn btn-circle">❯</a>
                     </div>
                 </div> 

                 </div>

                 <div id="slide2" className="carousel-item relative w-full flex justify-center">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                     <img src={jung} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">
                        {"Until you make the unconscious conscious, it will direct your life and you will call it fate."}
                     </p>
                     <h3 className="text-2xl font-semibold"> Carl Jung </h3>
                     <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide1" className="btn btn-circle">❮</a>
                     <a href="#slide3" className="btn btn-circle">❯</a>
                     </div>
                 </div> 

                 </div>

                 <div id="slide3" className="carousel-item relative w-full flex justify-center">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                     <img src={jeanpiaget} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">
                        {"The principal goal of education is to create men who are capable of doing new things, not simply repeating what other generations have done"}
                     </p>
                     <h3 className="text-2xl font-semibold"> Jean Piaget </h3>
                     <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide2" className="btn btn-circle">❮</a>
                     <a href="#slide4" className="btn btn-circle">❯</a>
                     </div>
                 </div> 
                 </div>

                 <div id="slide4" className="carousel-item relative w-full flex justify-center">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                     <img src={bf} className="w-40 h-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">
                        {"The way positive reinforcement is carried out is more important than the amount."}
                     </p>
                     <h3 className="text-2xl font-semibold"> B.F. Skinner </h3>
                     <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide3" className="btn btn-circle">❮</a>
                     <a href="#slide5" className="btn btn-circle">❯</a>
                     </div>
                 </div> 
                 </div>

                 <div id="slide5" className="carousel-item relative w-full flex justify-center">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                     <img src={AlbertBanduraFeatured} className="w-40  h-40 rounded-full border-2 border-gray-400" />
                     <p className="text-xl text-gray-200">
                        {"People’s beliefs about their abilities have a profound effect on those abilities."}
                     </p>
                     <h3 className="text-2xl font-semibold"> Albert Bandura </h3>
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                     <a href="#slide4" className="btn btn-circle">❮</a>
                     <a href="#slide1" className="btn btn-circle">❯</a>
                     </div>
                 </div> 
                 </div>
          </div>
            </div>
        </HomeLayout>
    );
}


export default AboutUs;

