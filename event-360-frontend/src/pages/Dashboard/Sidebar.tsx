import { cn } from "@/lib/utils";
import {
  FilePenLine,
  Home,
  ListChecks,
  ListOrdered,
  ListTodo,
  Pencil,
  PencilRuler,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-gray-300 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-4">
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/services-list"
        >
          <ListChecks className="shrink-0" />
          <span className="truncate">Services List</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/events-list"
        >
          <ListOrdered className="shrink-0" />
          <span className="truncate">Events List</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/recent-events-list"
        >
          <ListTodo className="shrink-0" />
          <span className="truncate">Recent Events List</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/add-services"
        >
          <FilePenLine className="shrink-0" />
          <span className="truncate">Add Services</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/add-events"
        >
          <PencilRuler className="shrink-0" />
          <span className="truncate">Add Events</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
              "bg-gray-500 text-white": isActive,
            })
          }
          to="/dashboard/add-recent-events"
        >
          <Pencil className="shrink-0" />
          <span className="truncate">Add Recent Events</span>
        </NavLink>

        <div className="my-5 border-t-2">
          <NavLink
            className={({ isActive }) =>
              cn(" p-3 rounded-md transition-all duration-300 flex gap-2", {
                "bg-gray-500 text-white": isActive,
              })
            }
            to="/"
          >
            <Home className="shrink-0" />
            <span className="truncate">Home</span>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
