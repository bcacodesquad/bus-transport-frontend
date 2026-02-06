const PptxGenJS = require("pptxgenjs");

// Create presentation
const prs = new PptxGenJS();
prs.defineLayout({ name: 'LAYOUT1', width: 10, height: 7.5 });
prs.defineLayout({ name: 'LAYOUT2', width: 10, height: 7.5 });

// Define color scheme
const colors = {
  primary: "1F4788",
  accent: "FF6B35",
  lightBg: "F0F4F8",
  text: "2C3E50",
  white: "FFFFFF"
};

// Slide 1: Title Slide
let slide = prs.addSlide();
slide.background = { color: colors.primary };
slide.addText("Bus Management System", {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 54, bold: true, color: colors.white, align: "center"
});
slide.addText("Project Presentation", {
  x: 0.5, y: 3.7, w: 9, h: 0.6,
  fontSize: 32, color: colors.accent, align: "center"
});
slide.addText("Frontend Development Overview", {
  x: 0.5, y: 5, w: 9, h: 0.5,
  fontSize: 18, color: colors.white, align: "center", italic: true
});

// Slide 2: Project Overview
slide = prs.addSlide();
slide.background = { color: colors.white };

slide.addText("Project Overview", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const overviewPoints = [
  "Comprehensive bus management solution",
  "Real-time route and schedule tracking",
  "User and admin management modules",
  "Interactive timetable management system",
  "RESTful API backend integration"
];

let yPos = 1.5;
overviewPoints.forEach(point => {
  slide.addText("• " + point, {
    x: 1, y: yPos, w: 8.5, h: 0.5,
    fontSize: 16, color: colors.text
  });
  yPos += 0.6;
});

// Slide 3: Technology Stack
slide = prs.addSlide();
slide.background = { color: colors.lightBg };

slide.addText("Technology Stack", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const techStack = [
  { category: "Frontend Framework", tech: "React 19.2.3" },
  { category: "Routing", tech: "React Router DOM 7.13.0" },
  { category: "HTTP Client", tech: "Axios 1.13.3" },
  { category: "Styling", tech: "CSS3 with Responsive Design" },
  { category: "Backend API", tech: "RESTful Web Services" }
];

yPos = 1.5;
techStack.forEach(item => {
  slide.addText(item.category + ":", {
    x: 1, y: yPos, w: 3.5, h: 0.4,
    fontSize: 14, bold: true, color: colors.primary
  });
  slide.addText(item.tech, {
    x: 4.5, y: yPos, w: 4.5, h: 0.4,
    fontSize: 14, color: colors.text
  });
  yPos += 0.7;
});

// Slide 4: Frontend Features
slide = prs.addSlide();
slide.background = { color: colors.white };

slide.addText("Frontend Features", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const features = [
  "Home Dashboard with Navigation",
  "User Module - Authentication & Profile Management",
  "Admin Module - System Administration",
  "Bus Management - Fleet Management Interface",
  "Route Management - Route Planning & Tracking",
  "Schedule Management - Service Schedule Control",
  "Timetable Management - Dynamic Schedule Updates",
  "Animated Background - Enhanced UX"
];

yPos = 1.5;
let col = 0;
features.forEach((feature, index) => {
  const xPos = col === 0 ? 1 : 5.2;
  slide.addText("• " + feature, {
    x: xPos, y: yPos, w: 4.2, h: 0.5,
    fontSize: 13, color: colors.text
  });
  
  if (index % 2 === 1) {
    yPos += 0.6;
    col = 0;
  } else {
    col = 1;
  }
});

// Slide 5: Challenges Faced - Part 1
slide = prs.addSlide();
slide.background = { color: colors.lightBg };

slide.addText("Challenges Faced", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const challenges1 = [
  { num: "1", title: "Real-time Data Synchronization", desc: "Ensuring seamless data updates between frontend and backend without delays or inconsistencies" },
  { num: "2", title: "Complex State Management", desc: "Handling complex application state across multiple modules and components efficiently" },
  { num: "3", title: "API Integration Complexity", desc: "Integrating multiple API endpoints for different modules with proper error handling" }
];

yPos = 1.5;
challenges1.forEach(challenge => {
  slide.addShape(prs.ShapeType.rect, {
    x: 0.7, y: yPos, w: 0.5, h: 0.5,
    fill: { color: colors.accent },
    line: { color: colors.accent }
  });
  
  slide.addText(challenge.num, {
    x: 0.7, y: yPos, w: 0.5, h: 0.5,
    fontSize: 18, bold: true, color: colors.white, align: "center", valign: "middle"
  });

  slide.addText(challenge.title, {
    x: 1.4, y: yPos, w: 7.8, h: 0.3,
    fontSize: 14, bold: true, color: colors.primary
  });

  slide.addText(challenge.desc, {
    x: 1.4, y: yPos + 0.35, w: 7.8, h: 0.4,
    fontSize: 11, color: colors.text
  });

  yPos += 0.95;
});

// Slide 6: Challenges Faced - Part 2
slide = prs.addSlide();
slide.background = { color: colors.white };

slide.addText("Challenges Faced (Continued)", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const challenges2 = [
  { num: "4", title: "Responsive Design Implementation", desc: "Creating a responsive UI that works seamlessly across desktop, tablet, and mobile devices" },
  { num: "5", title: "Performance Optimization", desc: "Optimizing component rendering and API calls to ensure fast load times and smooth user interactions" },
  { num: "6", title: "User Authentication & Authorization", desc: "Implementing secure user authentication with role-based access control for different user types" }
];

yPos = 1.5;
challenges2.forEach(challenge => {
  slide.addShape(prs.ShapeType.rect, {
    x: 0.7, y: yPos, w: 0.5, h: 0.5,
    fill: { color: colors.accent },
    line: { color: colors.accent }
  });
  
  slide.addText(challenge.num, {
    x: 0.7, y: yPos, w: 0.5, h: 0.5,
    fontSize: 18, bold: true, color: colors.white, align: "center", valign: "middle"
  });

  slide.addText(challenge.title, {
    x: 1.4, y: yPos, w: 7.8, h: 0.3,
    fontSize: 14, bold: true, color: colors.primary
  });

  slide.addText(challenge.desc, {
    x: 1.4, y: yPos + 0.35, w: 7.8, h: 0.4,
    fontSize: 11, color: colors.text
  });

  yPos += 0.95;
});

// Slide 7: Solutions Implemented
slide = prs.addSlide();
slide.background = { color: colors.lightBg };

slide.addText("Solutions Implemented", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const solutions = [
  "Implemented Axios interceptors for API data consistency",
  "Used React Context API for efficient state management",
  "Structured modular components for better code organization",
  "Applied CSS media queries for responsive design",
  "Optimized component rendering with React.memo and useCallback",
  "Integrated JWT-based authentication with role-based routing"
];

yPos = 1.5;
solutions.forEach(solution => {
  slide.addText("✓ " + solution, {
    x: 1, y: yPos, w: 8.5, h: 0.5,
    fontSize: 14, color: colors.text
  });
  yPos += 0.7;
});

// Slide 8: Project Output
slide = prs.addSlide();
slide.background = { color: colors.white };

slide.addText("Project Output & Deliverables", {
  x: 0.5, y: 0.3, w: 9, h: 0.6,
  fontSize: 44, bold: true, color: colors.primary
});

slide.addShape(prs.ShapeType.rect, {
  x: 0.5, y: 1.1, w: 9, h: 0.05,
  fill: { color: colors.accent },
  line: { type: "none" }
});

const deliverables = [
  { title: "Frontend Application", items: ["9 React Components", "Responsive UI Design", "Real-time Data Binding", "Dynamic Routing"] },
  { title: "Backend Integration", items: ["RESTful API Endpoints", "Error Handling", "Data Validation", "Authentication Layer"] }
];

yPos = 1.5;
deliverables.forEach(section => {
  slide.addShape(prs.ShapeType.rect, {
    x: 0.7, y: yPos - 0.15, w: 8.6, h: 0.4,
    fill: { color: colors.primary }
  });

  slide.addText(section.title, {
    x: 0.85, y: yPos - 0.12, w: 8.3, h: 0.3,
    fontSize: 14, bold: true, color: colors.white
  });

  yPos += 0.5;
  section.items.forEach(item => {
    slide.addText("→ " + item, {
      x: 1.2, y: yPos, w: 8, h: 0.35,
      fontSize: 12, color: colors.text
    });
    yPos += 0.45;
  });

  yPos += 0.3;
});

// Slide 9: Conclusion
slide = prs.addSlide();
slide.background = { color: colors.primary };

slide.addText("Thank You!", {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 54, bold: true, color: colors.white, align: "center"
});

slide.addText("Bus Management System - Frontend Development", {
  x: 0.5, y: 3.8, w: 9, h: 0.6,
  fontSize: 20, color: colors.accent, align: "center"
});

slide.addText("Successfully delivered with challenges overcome and best practices implemented", {
  x: 0.5, y: 4.8, w: 9, h: 0.8,
  fontSize: 14, color: colors.white, align: "center", italic: true
});

// Save presentation
prs.writeFile({ fileName: "Bus_Management_System_Project.pptx" });
console.log("✓ Presentation created successfully: Bus_Management_System_Project.pptx");
