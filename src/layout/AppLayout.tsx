import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet, useNavigate } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pushAdmin } from "../store/adminSlice";

const LayoutContent: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const fetchAdmin = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/veiw", {
        withCredentials: true,
      });

      dispatch(pushAdmin(res.data.data));

    } catch (err) {
      navigate('/');
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 max-lg:p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
