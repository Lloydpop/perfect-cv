import {
  ArrowLeftOnRectangleIcon,
  BookOpenIcon,
  CogIcon,
  DocumentChartBarIcon,
  Square3Stack3DIcon,
  TableCellsIcon,
  UserPlusIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export const navData = [
  {
    name: "Resume",
    icon: Square3Stack3DIcon,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    name: "Build CV",
    icon: TableCellsIcon,
    href: "/templates",
    color: "text-green-500",
  },
  {
    name: "Settings",
    icon: CogIcon,
    href: "/settings",
  },
  {
    name: "Logout",
    icon: ArrowLeftOnRectangleIcon,
    href: "/",
  },
];
