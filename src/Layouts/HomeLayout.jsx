import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function HomeLayout({ children }) {   // ✅ props.children accept karna

 const dispatch = useDispatch();
 const navigate = useNavigate();

 // for checking if user logged in 
 const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

 //for displaying the options acc to role
 const role = useSelector((state) => state?.auth?.role);
    
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    if (drawerSide.length > 0) {
      drawerSide[0].style.width = 'auto';
    }
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    if (element.length > 0) {
      element[0].checked = false;
    }
    const drawerSide = document.getElementsByClassName("drawer-side");
    if (drawerSide.length > 0) {
      drawerSide[0].style.width = "0";
    }
  }

  function handleLogout(e){
    e.preventDefault();

    // const res = await dispatch(logout());

  //  if(res?.payload?.success)
    navigate("/");

  }

  return (
    <div className="min-h-[90vh] flex flex-col">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>

        <div className="drawer-side w-0 transition-all duration-300">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            <li><Link to="/">Home</Link></li>
            
            {isLoggedIn && role === 'ADMIN' && (
              <li>
                <Link to ="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}

            <li><Link to="/ScreeningTest">Screening Test</Link></li>
            <li><Link to="/AIChatbot">AI Chatbot</Link></li>
            <li><Link to="/Resources">Health Resources</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>

           {!isLoggedIn && (
            <li className="absolute bottom-4 w-[90%]">
             <div className="flex items-center justify-between gap-4 w-full">
    
                <Link to="/login" className="flex-1">
                <button className="btn btn-primary w-full py-2 font-semibold rounded-md">
                   Login
                 </button>
               </Link>

                  <Link to="/signup" className="flex-1">
                 <button className="btn btn-secondary w-full py-2 font-semibold rounded-md">
                  Signup
                 </button>
                  </Link>
    
                 </div>
                 </li>
 
             )}

              {isLoggedIn && (
            <li className="absolute bottom-4 w-[90%]">
             <div className="flex items-center justify-between gap-4 w-full">
    
                <Link to="/user/profile" className="flex-1">
                <button className="btn btn-primary w-full py-2 font-semibold rounded-md">
                   Profile
                 </button>
               </Link>

                  <Link onClick={handleLogout} className="flex-1">
                 <button className="btn btn-secondary w-full py-2 font-semibold rounded-md">
                  Logout
                 </button>
                  </Link>
    
                 </div>
                 </li>
 
             )}




          </ul>
        </div>
      </div>

      {/* ✅ yahan children render hoga */}
      {children}


    </div>
  );
}

export default HomeLayout;
