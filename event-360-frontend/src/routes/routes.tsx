import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";
import AddEvents from "@/pages/Dashboard/components/Add/AddEvents";
import AddRecentEvents from "@/pages/Dashboard/components/Add/AddRecentEvents";
import AddServices from "@/pages/Dashboard/components/Add/AddServices";
import EventsList from "@/pages/Dashboard/components/List/EventsList";
import RecentEventsList from "@/pages/Dashboard/components/List/RecentEventsList";
import ServiceList from "@/pages/Dashboard/components/List/ServiceList";
import Home from "@/pages/Home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
import EditService from "@/pages/Dashboard/components/Edit/EditService";
import EditRecentEvents from "@/pages/Dashboard/components/Edit/EditRecentEvents";
import EditEvents from "@/pages/Dashboard/components/Edit/EditEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/services-list"}></Navigate>,
      },
      // service
      {
        path: "services-list",
        element: <ServiceList />,
      },
      {
        path: "add-services",
        element: <AddServices />,
      },
      {
        path: "services-list/edit/:id",
        element: <EditService />,
      },
      // Recent events
      {
        path: "recent-events-list",
        element: <RecentEventsList />,
      },
      {
        path: "add-recent-events",
        element: <AddRecentEvents />,
      },
      {
        path: "recent-events-list/edit/:id",
        element: <EditRecentEvents />,
      },
      // Events
      {
        path: "events-list",
        element: <EventsList />,
      },
      {
        path: "add-events",
        element: <AddEvents />,
      },
      {
        path: "events-list/edit/:id",
        element: <EditEvents />,
      },
    ],
  },
]);
