import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "120K+",
      label: "Active Users",
      image: "https://images.unsplash.com/photo-1671097027085-77ebeb8f67d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBub21hZHxlbnwwfHwwfHx8MA==", 
    },
    {
      value: "$5B+",
      label: "Transactions",
      image: "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?q=80&w=2696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 👥 User icon
    },
    {
      value: "99.99%",
      label: "Uptime",
      image: "https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    {
      value: "4.8/5",
      label: "User Rating",
      image: "https://plus.unsplash.com/premium_photo-1681486778237-af14e624069d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-[#20a987]" />,
      title: "Real-Time Reports",
      description:
        "Visualize your expenses and income instantly with live reports",
    },
    {
      icon: <Receipt className="h-8 w-8 text-[#20a987]" />,
      title: "Instant Bill Capture",
      description:
        "Snap and store bills with auto-tagging and cloud storage",
    },
    {
      icon: <PieChart className="h-8 w-8 text-[#20a987]" />,
      title: "Smart Budgeting",
      description: "Plan smarter with predictive budgeting tools",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#20a987]" />,
      title: "Unified Dashboard",
      description: "View all your cards and bank accounts in one dashboard",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#20a987]" />,
      title: "Global Access",
      description: "Use anywhere with built-in exchange rates and currency sync",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#20a987]" />,
      title: "Smart Alerts",
      description: "Receive intelligent alerts based on your spending behavior",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-[#20a987]" />,
      title: "1. Sign Up Easily",
      description:
        "Create your account quickly and start managing money right away",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#20a987]" />,
      title: "2. Monitor Expenses",
      description:
        "Keep track of your spending without any manual input needed",
    },
    {
      icon: <PieChart className="h-8 w-8 text-[#20a987]" />,
      title: "3. Optimize Finances",
      description:
        "Utilize AI tools to enhance savings and improve financial health",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Ava Thompson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "NetWealth AI gave me total control over my company’s finances. The real-time tracking is a total game-changer.",
    },
    {
      name: "David Lee",
      role: "Remote Developer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote:
        "With NetWealth AI, managing receipts and reimbursements is effortless. It's a must-have for freelancers like me.",
    },
    {
      name: "Isabella Garcia",
      role: "Wealth Manager",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      quote:
        "I trust NetWealth AI for both personal and client financial management. It’s efficient, accurate, and insightful.",
    },
  ];
  