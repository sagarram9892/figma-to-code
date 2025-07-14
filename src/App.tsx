import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";

import rightArrow from "./assets/rightArrow.png";
import dots from "./assets/dots.png";
import whiteS from "./assets/whiteS.png";
import job from "./assets/job.png";
import submit from "./assets/submitted.png";
import status from "./assets/status.png";
import submitter from "./assets/submitter.png";
import url from "./assets/url.png";
import assigned from "./assets/assigned.png";
import abc from "./assets/abc.png";
import image from "./assets/Ellipse 1.png";
import hash from "./assets/hash.png";

// Types
interface Task {
  id: string;
  taskName: string;
  submittedDate: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked" | "";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Medium" | "High" | "Low" | "";
  dueDate: string;
  estValue: number | "";
}

// Sample data
const initialTasks: Task[] = [
  {
    id: "1",
    taskName: "Launch social media campaign for pro...",
    submittedDate: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: 6200000,
  },
  {
    id: "2",
    taskName: "Update press kit for company redesign",
    submittedDate: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: 3500000,
  },
  {
    id: "3",
    taskName: "Finalize user testing feedback for app...",
    submittedDate: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: 4750000,
  },
  {
    id: "4",
    taskName: "Design new features for the website",
    submittedDate: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: 5900000,
  },
  {
    id: "5",
    taskName: "Prepare financial report for Q4",
    submittedDate: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: 2800000,
  },
  {
    id: "6",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  // Empty rows added below (7-24 with empty status, priority and estValue)
  {
    id: "7",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "8",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "9",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "10",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "11",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "12",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "13",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "14",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "15",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "16",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "17",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "18",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "19",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "20",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "21",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "22",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "23",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
  {
    id: "24",
    taskName: "",
    submittedDate: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  },
];

const SpreadsheetPrototype = () => {
  const [tasks] = useState<Task[]>(initialTasks);
  const [activeTab, setActiveTab] = useState("All Orders");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Task;
    direction: "asc" | "desc";
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Add state to track selected cell
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    column: string;
  } | null>(null);

  // Check for mobile view on mount and resize
  useState(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  });

  // Status components
  const StatusBadge = ({ status }: { status: Task["status"] }) => {
    if (!status) return null;

    const config = {
      "In-process": { color: "bg-yellow-100 text-yellow-800" },
      "Need to start": { color: "bg-[#E2E8F0] text-[#475569]" },
      Complete: { color: "bg-green-100 text-green-800" },
      Blocked: { color: "bg-red-100 text-red-800" },
    };

    const { color } = config[status];

    return (
      <div
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}
      >
        {!isMobile && status}
      </div>
    );
  };

  const PriorityBadge = ({ priority }: { priority: Task["priority"] }) => {
    if (!priority) return null;

    const colors = {
      High: " text-red-600 ",
      Medium: " text-yellow-600",
      Low: " text-blue-600",
    };

    return (
      <div
        className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-bold ${colors[priority]}`}
      >
        {!isMobile && priority}
      </div>
    );
  };

  // Format estValue display
  const formatEstValue = (value: number | "") => {
    if (value === "") return "";
    return value.toLocaleString();
  };

  // Handlers
  const handleSort = (key: keyof Task) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle cell click
  const handleCellClick = (row: number, column: string) => {
    setSelectedCell({ row, column });
  };

  // Filtered and sorted tasks
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks.filter(
      (task) =>
        task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.submitter.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assigned.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === "" || bValue === "") return 0;

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }

        return 0;
      });
    }

    return filtered;
  }, [tasks, searchTerm, sortConfig]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center space-x-2 overflow-x-auto">
            {/* <img src={workspace} alt="" /> */}
            <img
              className="w-[24px] h-[24px]"
              src="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.75%200C18.5449%200%2020%201.45507%2020%203.25V12.75C20%2014.5449%2018.5449%2016%2016.75%2016H3.25C1.45507%2016%200%2014.5449%200%2012.75V3.25C0%201.45507%201.45507%200%203.25%200H16.75ZM3.25%201.5C2.2835%201.5%201.5%202.2835%201.5%203.25V12.75C1.5%2013.7165%202.2835%2014.5%203.25%2014.5H12.5V1.5H3.25Z'%20fill='%23618666'/%3e%3c/svg%3e"
              alt="side icon"
            ></img>
            <span className="text-gray-400">Workspace</span>
            <img src={rightArrow} alt="" />
            <span className="text-gray-400">Folder 2</span>
            <img src={rightArrow} alt="" />
            <span className="font-medium">Spreadsheet 3</span>
            <img src={dots} alt="" />
          </div>
          <div className="flex items-center space-x-4 gap-1">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search within sheet"
                className="pl-10 py-3 w-[180px] bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.99622C16.0499 1.99622 19.3567 5.19097 19.4958 9.24528L19.5 9.49622V13.5932L20.88 16.7492C20.949 16.9071 20.9847 17.0776 20.9847 17.25C20.9847 17.9404 20.425 18.5 19.7347 18.5L15 18.5015C15 20.1583 13.6568 21.5015 12 21.5015C10.4023 21.5015 9.09633 20.2526 9.00508 18.6778L8.99954 18.4992L4.27485 18.5C4.10351 18.5 3.93401 18.4648 3.77685 18.3965C3.14365 18.1215 2.8533 17.3852 3.12834 16.752L4.49999 13.5941V9.49612C4.50059 5.34132 7.85208 1.99622 12 1.99622ZM13.4995 18.4992L10.5 18.5015C10.5 19.3299 11.1716 20.0015 12 20.0015C12.7797 20.0015 13.4204 19.4066 13.4931 18.646L13.4995 18.4992ZM12 3.49622C8.67983 3.49622 6.00047 6.17048 5.99999 9.49622V13.9059L4.65601 17H19.3525L18 13.9068L18.0001 9.50908L17.9964 9.28388C17.8853 6.0504 15.2416 3.49622 12 3.49622Z"
                    fill="#121212"
                  ></path>
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 pr-[2px] py-[2px] pl-[2px] bg-green-700 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="hidden ml-3  w-full h-8 rounded-full sm:flex items-center justify-center">
              <span className="flex gap-1.5 w-25 sm:w-30 items-center text-sm font-medium">
                <img src={image} alt="" className="h-8 w-8 rounded-full" />{" "}
                <p className="">
                  <span className="text-zinc-800">John Doe</span>{" "}
                  <p className="text-xs text-zinc-500">john.Doe...</p>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Tool bar</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.91665 3.31766C7.07259 3.16117 7.32585 3.16072 7.48234 3.31665L11.8699 7.68864C12.0425 7.86059 12.0425 8.14004 11.8699 8.312L7.48234 12.684C7.32585 12.8399 7.07259 12.8395 6.91665 12.683C6.76072 12.5265 6.76117 12.2732 6.91766 12.1173L11.0493 8.00032L6.91766 3.88334C6.76117 3.72741 6.76072 3.47415 6.91665 3.31766ZM3.71665 3.31766C3.87259 3.16117 4.12585 3.16072 4.28234 3.31665L8.66993 7.68864C8.8425 7.86059 8.8425 8.14004 8.66993 8.312L4.28234 12.684C4.12585 12.8399 3.87259 12.8395 3.71665 12.683C3.56072 12.5265 3.56117 12.2732 3.71766 12.1173L7.84933 8.00032L3.71766 3.88334C3.56117 3.72741 3.56072 3.47415 3.71665 3.31766Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.21175 3.38749C4.09439 3.27054 3.90444 3.27088 3.78749 3.38824C3.67054 3.50561 3.67088 3.69556 3.78825 3.81251L7.91991 7.92948C7.93874 7.94825 7.94933 7.97373 7.94933 8.00032C7.94933 8.0269 7.93874 8.05239 7.91991 8.07115L3.78825 12.1881C3.67088 12.3051 3.67054 12.495 3.78749 12.6124C3.90444 12.7298 4.09439 12.7301 4.21175 12.6131L8.59934 8.24116C8.73269 8.10829 8.73269 7.89235 8.59934 7.75947L4.21175 3.38749ZM3.64582 3.24708C3.84073 3.05147 4.15731 3.0509 4.35292 3.24582L8.74051 7.6178C8.9523 7.82884 8.9523 8.1718 8.74051 8.38283L4.35292 12.7548C4.15731 12.9497 3.84073 12.9492 3.64582 12.7536C3.4509 12.558 3.45147 12.2414 3.64708 12.0465L7.70765 8.00032L3.64708 3.95418C3.45147 3.75927 3.4509 3.44269 3.64582 3.24708ZM7.41175 3.38749C7.29439 3.27054 7.10444 3.27088 6.98749 3.38824C6.87054 3.50561 6.87088 3.69556 6.98825 3.81251L11.1199 7.92948C11.1387 7.94825 11.1493 7.97373 11.1493 8.00032C11.1493 8.0269 11.1387 8.05239 11.1199 8.07115L6.98825 12.1881C6.87088 12.3051 6.87054 12.495 6.98749 12.6124C7.10444 12.7298 7.29439 12.7301 7.41175 12.6131L11.7993 8.24116C11.9327 8.10829 11.9327 7.89235 11.7993 7.75947L7.41175 3.38749ZM6.84582 3.24708C7.04073 3.05147 7.35731 3.0509 7.55292 3.24582L11.9405 7.6178C12.1523 7.82884 12.1523 8.1718 11.9405 8.38283L7.55292 12.7548C7.35731 12.9497 7.04073 12.9492 6.84582 12.7536C6.6509 12.558 6.65147 12.2414 6.84708 12.0465L10.9077 8.00032L6.84708 3.95418C6.65147 3.75927 6.6509 3.44269 6.84582 3.24708Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm "
                onClick={() => console.log("Hide fields clicked")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.84972 1.84972C1.62783 2.07161 1.60766 2.41883 1.7892 2.66351L1.84972 2.73361L5.21186 6.09575C3.6102 7.2203 2.41314 8.89993 1.91573 10.887C1.83191 11.2218 2.03541 11.5612 2.37025 11.645C2.7051 11.7289 3.0445 11.5254 3.12832 11.1905C3.56955 9.42789 4.65926 7.94956 6.1118 6.99543L7.61982 8.50354C7.03023 9.10482 6.66666 9.92854 6.66666 10.8372C6.66666 12.6781 8.15905 14.1705 9.99999 14.1705C10.9086 14.1705 11.7324 13.807 12.3336 13.2174L17.2664 18.1503C17.5105 18.3944 17.9062 18.3944 18.1503 18.1503C18.3722 17.9284 18.3923 17.5812 18.2108 17.3365L18.1503 17.2664L13.0557 12.1712L13.0567 12.17L12.0566 11.1718L9.66497 8.78065L9.66666 8.78L7.26564 6.38152L7.26666 6.38L6.32226 5.4379L2.7336 1.84972C2.48953 1.60564 2.0938 1.60564 1.84972 1.84972ZM8.50339 9.38789L11.4493 12.3338C11.0743 12.697 10.5633 12.9205 9.99999 12.9205C8.8494 12.9205 7.91666 11.9878 7.91666 10.8372C7.91666 10.2739 8.14019 9.76287 8.50339 9.38789ZM9.99999 4.58333C9.16644 4.58333 8.35761 4.70672 7.59257 4.9375L8.62338 5.96766C9.06988 5.87943 9.53033 5.83333 9.99999 5.83333C13.2692 5.83333 16.0916 8.06688 16.8726 11.1943C16.9562 11.5292 17.2955 11.7329 17.6304 11.6492C17.9653 11.5656 18.169 11.2263 18.0854 10.8914C17.1661 7.2106 13.8463 4.58333 9.99999 4.58333ZM10.1622 7.50773L13.33 10.675C13.2452 8.9609 11.8727 7.5897 10.1622 7.50773Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {!isMobile && <span>Hide fields</span>}
              </button>
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm "
                onClick={() => console.log("Sort clicked")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3757 3.33334L14.2909 3.33904C13.9858 3.38043 13.7507 3.64192 13.7507 3.95834L13.75 14.535L11.0668 11.8537L10.9966 11.7932C10.7519 11.6117 10.4047 11.6321 10.1829 11.854C9.9389 12.0982 9.93906 12.4939 10.1832 12.7379L13.9364 16.4879L14.0065 16.5484C14.2513 16.7298 14.5985 16.7095 14.8203 16.4875L18.5671 12.7375L18.6276 12.6674C18.8091 12.4227 18.7887 12.0755 18.5668 11.8537L18.4966 11.7932C18.2519 11.6117 17.9047 11.6321 17.6829 11.854L15 14.5383L15.0007 3.95834L14.995 3.87353C14.9536 3.56846 14.6921 3.33334 14.3757 3.33334ZM5.17868 3.51641L1.43304 7.26229L1.37253 7.33239C1.19099 7.57707 1.21118 7.92429 1.43307 8.14617L1.50317 8.20668C1.74786 8.38822 2.09507 8.36804 2.31696 8.14614L4.9975 5.46426L4.99805 16.0458L5.00376 16.1306C5.04514 16.4357 5.30664 16.6708 5.62305 16.6708L5.70786 16.6651C6.01292 16.6237 6.24805 16.3622 6.24805 16.0458L6.2475 5.46593L8.93322 8.14664L9.00338 8.20708C9.24826 8.38835 9.59545 8.36781 9.8171 8.14567C10.0609 7.90133 10.0605 7.5056 9.81614 7.26179L6.06209 3.51591L5.99198 3.45551C5.7473 3.27434 5.40039 3.29468 5.17868 3.51641Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {!isMobile && <span>Sort</span>}
              </button>
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm"
                onClick={() => console.log("Filter clicked")}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 13.3333C11.5952 13.3333 11.875 13.6132 11.875 13.9583C11.875 14.3035 11.5952 14.5833 11.25 14.5833H8.75C8.40482 14.5833 8.125 14.3035 8.125 13.9583C8.125 13.6132 8.40482 13.3333 8.75 13.3333H11.25ZM13.75 9.16667C14.0952 9.16667 14.375 9.44649 14.375 9.79167C14.375 10.1368 14.0952 10.4167 13.75 10.4167H6.25C5.90482 10.4167 5.625 10.1368 5.625 9.79167C5.625 9.44649 5.90482 9.16667 6.25 9.16667H13.75ZM16.25 5C16.5952 5 16.875 5.27982 16.875 5.625C16.875 5.97018 16.5952 6.25 16.25 6.25H3.75C3.40482 6.25 3.125 5.97018 3.125 5.625C3.125 5.27982 3.40482 5 3.75 5H16.25Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {!isMobile && <span>Filter</span>}
              </button>
              {!isMobile && (
                <button
                  className="flex items-center space-x-1 px-3 py-2 text-sm"
                  onClick={() => console.log("Cell view clicked")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0164 5.65096C10.7945 5.42907 10.7743 5.08185 10.9559 4.83717L11.0164 4.76708L12.9893 2.79199C13.094 2.61834 13.3024 2.5 13.5424 2.5C13.7525 2.5 13.9384 2.59072 14.0517 2.72982L14.0956 2.79227L16.0683 4.76708L16.1288 4.83717C16.2902 5.05466 16.2922 5.35318 16.1348 5.57267L16.0683 5.65096L15.9982 5.71147C15.7807 5.87285 15.4822 5.87484 15.2627 5.71745L15.1844 5.65096L14.1667 4.63333V7.78653L14.161 7.86073C14.1195 8.12766 13.858 8.33333 13.5416 8.33333C13.2252 8.33333 12.9637 8.12754 12.9224 7.8606L12.9167 7.78639V4.63333L11.9003 5.65096L11.8302 5.71147C11.5855 5.89302 11.2383 5.87285 11.0164 5.65096ZM11.0188 14.349C11.2407 14.1272 11.5879 14.107 11.8326 14.2885L11.9027 14.349L12.9191 15.3667V12.2136C12.9191 11.9116 13.1989 11.6667 13.544 11.6667C13.8604 11.6667 14.122 11.8723 14.1634 12.1393L14.1691 12.2135V15.3667L15.1869 14.349C15.4088 14.1272 15.756 14.107 16.0007 14.2885L16.0708 14.349C16.2926 14.5709 16.3128 14.9181 16.1313 15.1628L16.0708 15.2329L14.0981 17.2077C13.9934 17.3815 13.785 17.5 13.5449 17.5C13.3049 17.5 13.0964 17.3817 12.9917 17.208L11.0188 15.2329C10.7748 14.9888 10.7748 14.5931 11.0188 14.349ZM5.20834 3.32682C4.17281 3.32682 3.33334 4.16629 3.33334 5.20182V14.7852C3.33334 15.8207 4.17281 16.6602 5.20834 16.6602H8.54168C8.88686 16.6602 9.16668 16.3803 9.16668 16.0352C9.16668 15.69 8.88686 15.4102 8.54168 15.4102H5.20834C4.86317 15.4102 4.58334 15.1303 4.58334 14.7852V5.20182C4.58334 4.85664 4.86317 4.57682 5.20834 4.57682H8.54168C8.88686 4.57682 9.16668 4.297 9.16668 3.95182C9.16668 3.60664 8.88686 3.32682 8.54168 3.32682H5.20834Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Cell view</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto">
            {!isMobile && (
              <button
                className=" flex text-zinc-500 items-center space-x-1 px-3 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50"
                onClick={() => console.log("Import clicked")}
              >
                <ArrowDownToLine className="w-5" />
                <span>Import</span>
              </button>
            )}
            {!isMobile && (
              <button
                className="flex text-zinc-500 items-cente space-x-1 px-3 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50"
                onClick={() => console.log("Export clicked")}
              >
                <ArrowUpToLine className="w-5" />
                <span>Export</span>
              </button>
            )}
            <button
              className="text-zinc-500 flex items-center space-x-1 px-3 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50"
              onClick={() => console.log("Share clicked")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.62231 3.33333H8.50915C8.85433 3.33333 9.13415 3.61316 9.13415 3.95833C9.13415 4.27475 8.89902 4.53624 8.59396 4.57763L8.50915 4.58333H5.62231C4.62993 4.58333 3.81761 5.3543 3.75164 6.32996L3.74731 6.45833V14.375C3.74731 15.3674 4.51828 16.1797 5.49394 16.2457L5.62231 16.25H13.5396C14.532 16.25 15.3443 15.479 15.4103 14.5034L15.4146 14.375V13.9602C15.4146 13.615 15.6944 13.3352 16.0396 13.3352C16.356 13.3352 16.6175 13.5703 16.6589 13.8754L16.6646 13.9602V14.375C16.6646 16.0452 15.3543 17.4094 13.7056 17.4957L13.5396 17.5H5.62231C3.9521 17.5 2.58792 16.1897 2.50165 14.541L2.49731 14.375V6.45833C2.49731 4.78812 3.80762 3.42394 5.45635 3.33767L5.62231 3.33333H8.50915H5.62231ZM12.084 5.43321V3.125C12.084 2.60503 12.673 2.32496 13.0731 2.6165L13.1416 2.67395L18.1371 7.46562C18.3703 7.68924 18.3915 8.04843 18.2008 8.29673L18.1372 8.36765L13.1417 13.1609C12.7665 13.5209 12.1565 13.2897 12.0899 12.7991L12.084 12.7099V10.4388L11.7977 10.4639C9.79799 10.6725 7.88129 11.5732 6.0356 13.1811C5.60301 13.558 4.93374 13.2017 5.00488 12.6324C5.55888 8.19942 7.8771 5.75608 11.8345 5.44959L12.084 5.43321V3.125V5.43321ZM13.334 4.59054V6.04167C13.334 6.38685 13.0542 6.66667 12.709 6.66667C9.48114 6.66667 7.48062 8.06344 6.61625 10.9643L6.55037 11.1965L6.84386 10.9991C8.7076 9.781 10.6654 9.16667 12.709 9.16667C13.0254 9.16667 13.2869 9.4018 13.3283 9.70686L13.334 9.79167V11.244L16.8017 7.91674L13.334 4.59054Z"
                  className="transition-colors duration-150 
                            fill-[#545454] 
                          group-hover:fill-white"
                ></path>
              </svg>
              {!isMobile && <span>Share</span>}
            </button>
            <button
              className="w-[178px] h-10 flex items-center justify-center space-x-1 px-3 text-sm bg-[#4B6A4F] text-white rounded-lg hover:bg-green-700"
              onClick={() => console.log("New Action clicked")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 2.5C10.3452 2.5 10.6251 2.77982 10.6251 3.125V7.91667H12.7046C13.9702 7.91667 14.9963 8.94268 14.9963 10.2083V15.368L16.4334 13.9328C16.6777 13.6888 17.0734 13.6891 17.3173 13.9334C17.5612 14.1776 17.5609 14.5733 17.3167 14.8172L14.8129 17.3177C14.5688 17.5615 14.1733 17.5613 13.9293 17.3174L11.4289 14.8169C11.1848 14.5729 11.1848 14.1771 11.4289 13.9331C11.673 13.689 12.0687 13.689 12.3128 13.9331L13.7463 15.3665V10.2083C13.7463 9.63304 13.2799 9.16667 12.7046 9.16667H7.29165C6.71635 9.16667 6.24998 9.63304 6.24998 10.2083V15.3665L7.68346 13.9331C7.92754 13.689 8.32327 13.689 8.56734 13.9331C8.81142 14.1771 8.81142 14.5729 8.56734 14.8169L6.06692 17.3174C5.82285 17.5614 5.42712 17.5614 5.18304 17.3174L2.68257 14.8169C2.43849 14.5729 2.43849 14.1771 2.68257 13.9331C2.92664 13.689 3.32237 13.689 3.56645 13.9331L4.99998 15.3666V10.2083C4.99998 8.94268 6.026 7.91667 7.29165 7.91667H9.37506V3.125C9.37506 2.77982 9.65488 2.5 10.0001 2.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              {!isMobile && <span>New Action</span>}
            </button>
          </div>
        </div>
      </div>

      <div className="h-10 bg-white border-b border-gray-200 px-4 pl-10">
        <div className="h-full w-full justify-between items-center flex space-x-2 overflow-x-auto">
          <div className="h-full flex items-center w-[720px] bg-[#E2E2E2]">
            <button className="ml-2 px-3 py-1 text-sm bg-[#EEEEEE] text-[#545454]/80 rounded whitespace-nowrap">
              <div className="flex justify-center items-center gap-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.16667 4.66666C6.44281 4.66666 6.66667 4.89052 6.66667 5.16666C6.66667 5.4177 6.48166 5.62553 6.24055 5.66124L6.16667 5.66666H4.66667C3.378 5.66666 2.33333 6.71133 2.33333 8C2.33333 9.24264 3.30471 10.2584 4.52956 10.3294L4.66667 10.3333H6.16667C6.44281 10.3333 6.66667 10.5572 6.66667 10.8333C6.66667 11.0844 6.48166 11.2922 6.24055 11.3279L6.16667 11.3333H4.66667C2.82572 11.3333 1.33333 9.84095 1.33333 8C1.33333 6.21483 2.73664 4.75743 4.5003 4.67074L4.66667 4.66666H6.16667ZM11.3333 4.66666C13.1743 4.66666 14.6667 6.15905 14.6667 8C14.6667 9.78516 13.2634 11.2426 11.4997 11.3293L11.3333 11.3333H9.83333C9.55719 11.3333 9.33333 11.1095 9.33333 10.8333C9.33333 10.5823 9.51834 10.3745 9.75945 10.3388L9.83333 10.3333H11.3333C12.622 10.3333 13.6667 9.28866 13.6667 8C13.6667 6.75736 12.6953 5.74159 11.4704 5.67062L11.3333 5.66666H9.83333C9.55719 5.66666 9.33333 5.44281 9.33333 5.16666C9.33333 4.91563 9.51834 4.7078 9.75945 4.67209L9.83333 4.66666H11.3333ZM4.66667 7.5H11.3333C11.6095 7.5 11.8333 7.72385 11.8333 8C11.8333 8.25313 11.6452 8.46232 11.4012 8.49543L11.3333 8.5H4.66667C4.39052 8.5 4.16667 8.27614 4.16667 8C4.16667 7.74687 4.35477 7.53767 4.59882 7.50456L4.66667 7.5H11.3333H4.66667Z"
                    fill="#1A8CFF"
                  ></path>
                </svg>
                Q3 Financial Overview
              </div>
            </button>
            <div className="pl-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8337 3.45341C10.6663 3.67298 10.7085 3.98673 10.9281 4.15419C12.1203 5.06343 12.8333 6.47214 12.8333 8C12.8333 10.4907 10.9494 12.5413 8.52888 12.8047L8.97978 12.3536C9.17505 12.1583 9.17505 11.8417 8.97978 11.6464C8.80227 11.4689 8.5245 11.4528 8.32876 11.598L8.27268 11.6464L6.93934 12.9798C6.76183 13.1573 6.7457 13.4351 6.89093 13.6308L6.93934 13.6869L8.27268 15.0202C8.46794 15.2155 8.78452 15.2155 8.97978 15.0202C9.1573 14.8427 9.17343 14.5649 9.0282 14.3692L8.97978 14.3131L8.47963 13.8139C11.4769 13.57 13.8333 11.0602 13.8333 8C13.8333 6.15685 12.9721 4.45548 11.5345 3.35905C11.3149 3.19159 11.0012 3.23384 10.8337 3.45341ZM7.02022 0.979782C6.82496 1.17504 6.82496 1.49163 7.02022 1.68689L7.51972 2.18616C4.52273 2.4304 2.16667 4.94006 2.16667 8C2.16667 9.76297 2.95418 11.3983 4.28721 12.4994C4.50011 12.6753 4.81527 12.6452 4.99113 12.4323C5.16699 12.2194 5.13697 11.9043 4.92407 11.7284C3.81863 10.8153 3.16667 9.46147 3.16667 8C3.16667 5.50958 5.05022 3.45908 7.47047 3.19535L7.02022 3.64645C6.82496 3.84171 6.82496 4.15829 7.02022 4.35356C7.21549 4.54882 7.53207 4.54882 7.72733 4.35356L9.06066 3.02022C9.25593 2.82496 9.25593 2.50838 9.06066 2.31312L7.72733 0.979782C7.53207 0.78452 7.21549 0.78452 7.02022 0.979782Z"
                  fill="#FA6736"
                ></path>
              </svg>
            </div>
          </div>
          <div className="h-full flex w-[752px]">
            <button className="w-[144px] border-r-[1px] border-white flex justify-center items-center gap-1.5 px-3  text-sm bg-[#D2E0D4] text-[#383a38] whitespace-nowrap">
              <img src={abc} alt="" />
              ABC
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z"
                  fill="#AFAFAF"
                ></path>
              </svg>
            </button>
            <button className="w-[288px] justify-center border-r-[1px] font-medium border-white flex items-center gap-1.5 px-3 text-sm bg-[#DCCFFC] text-[#463E59] whitespace-nowrap">
              <img src={whiteS} alt="" className="text-white" />
              Answer a question
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z"
                  fill="#AFAFAF"
                ></path>
              </svg>
            </button>
            <button className="w-[145px] flex items-center justify-center gap-1.5 px-3 text-sm bg-[#FAC2AF] text-[#695149] whitespace-nowrap">
              <img src={whiteS} alt="" />
              Extract
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z"
                  fill="#AFAFAF"
                ></path>
              </svg>
            </button>
            <button className="w-[167px] flex items-center justify-center text-gray-700 border-x-2 border-dashed bg-[#EEEEEE] border-gray-300 hover:text-gray-600 ">
              <Plus className="w-6 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Spreadsheet */}
      <div className="flex-1 overflow-auto">
        <div className="min-w-[90%]">
          {!isMobile && (
            <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <div className="flex h-9">
                <div className=" flex items-center justify-center w-10 px-2 py-1 text-center text-lg border-white bg-[#EEEEEE] font-medium text-zinc-400/50">
                  <img src={hash} alt="" />
                </div>
                <div className="w-72 flex justify-between items-center border-x-[1px] border-white bg-[#EEEEEE] px-4 py-3 text-left text-gray-500 uppercase tracking-wider border-l">
                  <button
                    className="flex gap-0.5 items-center space-x-1 hover:text-gray-700"
                    onClick={() => handleSort("taskName")}
                  >
                    <div className="flex gap-1.5 items-center">
                      <img src={job} alt="" className="h-3.5" />
                      <span className="font-bold text-[13px]">Job Request</span>
                    </div>
                  </button>
                  <ChevronDown className="h-3.5 w-4 text-zinc-400" />
                </div>
                <div className="w-36 flex items-center justify-between px-2 py-3 text-left text-xs  border-r-[1px] border-white bg-[#EEEEEE] text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex gap-0.5 items-center space-x-1 hover:text-gray-700"
                    onClick={() => handleSort("submittedDate")}
                  >
                    <img src={submit} alt="" />
                    <span className="font-bold text-[13px]">Submitted</span>
                  </button>
                  <ChevronDown className="h-3.5 w-4 text-zinc-400" />
                </div>
                <div className="w-36 flex items-center justify-between px-4 py-3 text-left text-xs bg-[#EEEEEE] font-medium text-gray-500 uppercase tracking-wider  border-r-[1px] border-white">
                  <button
                    className="flex items-center space-x-1 hover:text-gray-700"
                    onClick={() => handleSort("status")}
                  >
                    <img src={status} alt="" />
                    <span className="font-bold text-[13px]">Status</span>
                  </button>
                  <ChevronDown className="h-3.5 w-4 text-zinc-400" />
                </div>
                <div className="w-36 px-4 py-3 flex items-center justify-between text-left text-xs bg-[#EEEEEE] font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-white">
                  <button
                    className="flex gap-0.5 items-center space-x-1 hover:text-gray-700"
                    onClick={() => handleSort("submitter")}
                  >
                    <img src={submitter} alt="" />
                    <span className="font-bold text-[13px]">Submitter</span>
                  </button>
                  <ChevronDown className="h-3.5 w-4 text-zinc-400" />
                </div>
                <div className="flex items-center justify-between gap-1.5 w-42 px-4 py-3 text-left bg-[#EEEEEE] text-xs font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-white">
                  <div className="flex gap-2 items-center">
                    {" "}
                    <img src={url} alt="" className="h-3.5" />
                    <span className="font-bold text-[13px]">URL</span>
                  </div>
                  <ChevronDown className="h-3.5 w-4 text-zinc-400" />
                </div>
                <div className="w-36 px-4 py-3 text-left text-xs bg-[#E8F0E9] font-medium text-gray-500 uppercase tracking-wider border-r-[1px] border-white">
                  <button
                    className="flex items-center gap-1.5 space-x-1 hover:text-gray-700"
                    onClick={() => handleSort("assigned")}
                  >
                    <img src={assigned} alt="" />
                    <span className="font-bold text-[13px]">Assigned</span>
                  </button>
                </div>
                <div className="w-36 px-4 py-3 text-left text-xs bg-[#EAE3FC] font-medium text-gray-500  tracking-wider border-r-[1px] border-white">
                  <span className="font-bold text-[13px]">Priority</span>
                </div>
                <div className="w-36 px-4 py-3 text-left text-xs bg-[#EAE3FC] font-medium text-gray-500 tracking-wider border-r-[1px] border-white">
                  <span className="font-bold text-[13px]">Due Date</span>
                </div>
                <div className="w-36 px-4 py-3 text-left text-xs bg-[#FFE9E0] font-medium text-gray-500 tracking-wider border-r-[1px] border-white">
                  <span className="font-bold text-[13px]">Est. Value</span>
                </div>
                <div className="h-8 w-42 px-4 text-center text-[40px] font-light text-gray-500 tracking-wider border-dashed border-x-2 border-gray-300">
                  <div className=" font-normal flex justify-center items-center h-full"></div>
                </div>
              </div>
            </div>
          )}

          {/* Table Body */}
          <div className="bg-white">
            {filteredAndSortedTasks.map((task, index) => (
              <div
                key={task.id}
                className={
                  isMobile
                    ? "p-3 border-b border-gray-200 hover:bg-gray-50"
                    : "flex h-10 items-center border-b border-gray-200 hover:bg-gray-50"
                }
              >
                {isMobile ? (
                  <div className="space-y-2">
                    <div
                      className={`flex justify-between border-x-[1px] border-black items-start ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "taskName"
                          ? "border border-black"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "taskName")}
                    >
                      <div className="font-medium">{task.taskName}</div>
                      <div
                        className={`flex justify-center items-center ${
                          selectedCell?.row === index &&
                          selectedCell?.column === "status"
                            ? "border border-black"
                            : ""
                        }`}
                        onClick={() => handleCellClick(index, "status")}
                      >
                        <StatusBadge status={task.status} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "submittedDate"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "submittedDate")}
                      >
                        <div className="text-gray-500">Submitted</div>
                        <div className="">{task.submittedDate}</div>
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "submitter"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "submitter")}
                      >
                        <div className="text-gray-500">Submitter</div>
                        <div>{task.submitter}</div>
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "url"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "url")}
                      >
                        <div className="text-gray-500">URL</div>
                        <a
                          href={`https://${task.url}`}
                          className="text-blue-600 hover:underline"
                        >
                          {task.url}
                        </a>
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "assigned"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "assigned")}
                      >
                        <div className="text-gray-500">Assigned</div>
                        <div>{task.assigned}</div>
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "priority"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "priority")}
                      >
                        <div className="text-gray-500">Priority</div>
                        <PriorityBadge priority={task.priority} />
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "dueDate"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "dueDate")}
                      >
                        <div className="text-gray-500">Due Date</div>
                        <div>{task.dueDate}</div>
                      </div>
                      <div
                        className={
                          selectedCell?.row === index &&
                          selectedCell?.column === "estValue"
                            ? "border border-black"
                            : ""
                        }
                        onClick={() => handleCellClick(index, "estValue")}
                      >
                        <div className="text-gray-500">Est. Value</div>
                        <div>{formatEstValue(task.estValue)}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`w-10 text-center text-sm text-gray-500`}>
                      {index + 1}
                    </div>
                    <div
                      className={`w-72 h-[40px] flex items-center border-[1px] border-zinc-100 px-4 text-sm text-gray-900  ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "taskName"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "taskName")}
                    >
                      <div className="font-medium ">{task.taskName}</div>
                    </div>
                    <div
                      className={`text-end w-36 px-4 text-sm border-[1px] border-zinc-100 text-gray-900 h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "submittedDate"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "submittedDate")}
                    >
                      {task.submittedDate}
                    </div>
                    <div
                      className={`w-36 justify-center border-[1px] border-zinc-100 text-sm h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "status"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "status")}
                    >
                      <StatusBadge status={task.status} />
                    </div>
                    <div
                      className={`w-36 px-4 text-sm border-[1px] border-zinc-100 text-gray-900 h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "submitter"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "submitter")}
                    >
                      {task.submitter}
                    </div>
                    <div
                      className={`w-42 px-4 py-3 text-sm border-[1px] border-zinc-100 text-blue-600 h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "url"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "url")}
                    >
                      <span className="text-black underline">{task.url}</span>
                    </div>
                    <div
                      className={`w-36 px-3 text-sm border-[1px] border-zinc-100 text-black h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "assigned"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "assigned")}
                    >
                      {task.assigned}
                    </div>
                    <div
                      className={`w-36  text-sm border-[1px] border-zinc-100 text-black justify-center h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "priority"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "priority")}
                    >
                      <PriorityBadge priority={task.priority} />
                    </div>
                    <div
                      className={`w-36 px-3 text-sm border-[1px] border-zinc-100 text-black flex justify-end items-center h-[40px] text-end ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "dueDate"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "dueDate")}
                    >
                      {task.dueDate}
                    </div>
                    <div
                      className={`w-36 px-3  text-sm border-[1px] border-zinc-100 flex justify-end text-black h-[40px]${
                        selectedCell?.row === index &&
                        selectedCell?.column === "estValue"
                          ? "border-zinc-900 border-solid border-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "estValue")}
                    >
                      <div className="flex flex-row-reverse items-center   gap-1">
                        {task.estValue ? (
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 7 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.59653 8L0.768531 5.012V4.04H2.86853C3.29253 4.04 3.63253 3.948 3.88853 3.764C4.15253 3.58 4.32053 3.312 4.39253 2.96H0.768531V2.06H4.39253C4.32053 1.708 4.15253 1.444 3.88853 1.268C3.63253 1.084 3.29253 0.991999 2.86853 0.991999L0.768531 0.98V0.0799997H6.62453V1.004L4.71653 0.991999C4.90053 1.064 5.05253 1.196 5.17253 1.388C5.30053 1.58 5.38853 1.804 5.43653 2.06H6.62453V2.96H5.44853C5.40053 3.328 5.26853 3.656 5.05253 3.944C4.84453 4.232 4.57253 4.46 4.23653 4.628C3.90053 4.796 3.50853 4.884 3.06053 4.892H2.26853L6.37253 8H4.59653Z"
                              fill="#AFAFAF"
                            ></path>
                          </svg>
                        ) : (
                          ``
                        )}
                        {formatEstValue(task.estValue)}{" "}
                      </div>
                    </div>

                    <div
                      className={`w-42 px-4 py-3 text-sm text-gray-900 border-zinc-300 border-dashed border-x-2 h-[40px] flex items-center ${
                        selectedCell?.row === index &&
                        selectedCell?.column === "extra"
                          ? "border-zinc-900 border-solid border-y-[1px]"
                          : ""
                      }`}
                      onClick={() => handleCellClick(index, "extra")}
                    >
                      {/* {formatEstValue(task.estValue)} */}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Tabs - Fixed at bottom */}
      <div className="bg-white border-t border-gray-200 px-4 sticky bottom-0">
        <div className="flex space-x-6 overflow-x-auto">
          {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab) => (
            <button
              key={tab}
              className={`py-3 px-1 text-sm font-[500] border-t-2 whitespace-nowrap ${
                activeTab === tab
                  ? "font-bold border-zinc-500 text-zinc-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => {
                setActiveTab(tab);
                console.log(`${tab} tab clicked`);
              }}
            >
              <div className={activeTab === tab ? "font-bold" : ""}> {tab}</div>
            </button>
          ))}
          <button
            className="py-3 px-1 text-gray-400 hover:text-gray-600"
            onClick={() => console.log("Add tab clicked")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetPrototype;
