import {Link} from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import one from "../Assets/Images/one.png";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-3xl font-semibold">
                        Welcome to SAKSHAM MINDS -                   
                          <span className="text-yellow-400 font-bold">
                         Your digital partner for stress-free living.
                        </span>
                    </h1>

                    <p className="text-ellipsis text-gray-200">
                                 At SAKSHAM MINDS, we care about your mental well-being. Our platform helps you track emotions, reduce stress, and find the right support to build a healthier and stronger mind.               
                                 </p>

                    <div className="space-x-6">
                        <Link to="/Resources">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore Resources
                            </button>
                        </Link>

                         <Link to="/AI Chatbot">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Chat with SAKSHAM MINDS
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center ">
                    <img alt="homepage image" src={one} />

                </div>

            </div>
        </HomeLayout>

    );
}

export default HomePage;