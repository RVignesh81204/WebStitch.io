// import React from "react";
// import { useTheme } from "next-themes";

// const stats = [
//   {
//     icon: (isDark) => (
//       <svg width="48" height="48" fill="none">
//         <rect
//           width="48"
//           height="48"
//           rx="12"
//           fill={isDark ? "url(#a)" : "#f0f0f0"}
//         />
//         <path
//           d="M24 18c1.47 0 2.67-1.2 2.67-2.67S25.47 12.67 24 12.67 21.33 13.87 21.33 15.33 22.53 18 24 18zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.67v-1.33c0-1.78-3.55-2.67-5.34-2.67z"
//           fill={isDark ? "#fff" : "#333"}
//         />
//         <defs>
//           <linearGradient
//             id="a"
//             x1="0"
//             y1="0"
//             x2="48"
//             y2="48"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#090909ff" />
//             <stop offset="1" stopColor="#161516ff" />
//           </linearGradient>
//         </defs>
//       </svg>
//     ),
//     value: "150+",
//     label: "Projects Delivered",
//   },
// {
//   icon: (isDark) => (
//     <svg width="48" height="48" fill="none">
//       <rect
//         width="48"
//         height="48"
//         rx="12"
//         fill={isDark ? "url(#b)" : "#e8e8e8"}
//       />
//       <path
//         d="M24 16l2.83 5.73 6.33.92-4.58 4.47 1.08 6.3L24 29.47l-5.66 2.95 1.08-6.3-4.58-4.47 6.33-.92L24 16z"
//         fill={isDark ? "#fff" : "#222"}
//       />
//       <defs>
//         <linearGradient
//           id="b"
//           x1="0"
//           y1="0"
//           x2="48"
//           y2="48"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#050505ff" />
//           <stop offset="1" stopColor="#171718ff" />
//         </linearGradient>
//       </defs>
//     </svg>
//   ),
//   value: "98%",
//   label: "Client Satisfaction",
// },
// {
//   icon: (isDark) => (
//     <svg width="48" height="48" fill="none">
//       <rect
//         width="48"
//         height="48"
//         rx="12"
//         fill={isDark ? "url(#c)" : "#efefef"}
//       />
//       <path
//         d="M18.67 29.33v-1.33c1.67-1.67 4.33-1.67 6 0v1.33M24 24l2-2 2 2"
//         stroke={isDark ? "#fff" : "#444"}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <defs>
//         <linearGradient
//           id="c"
//           x1="0"
//           y1="0"
//           x2="48"
//           y2="48"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#0e0e0fff" />
//           <stop offset="1" stopColor="#171617ff" />
//         </linearGradient>
//       </defs>
//     </svg>
//   ),
//   value: "96/100",
//   label: "Average Performance",
// },
// {
//   icon: (isDark) => (
//     <svg width="48" height="48" fill="none">
//       <rect
//         width="48"
//         height="48"
//         rx="12"
//         fill={isDark ? "url(#d)" : "#f3f3f3"}
//       />
//       <path
//         d="M24 18.67v10.66M18.67 24h10.66"
//         stroke={isDark ? "#fff" : "#555"}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <defs>
//         <linearGradient
//           id="d"
//           x1="0"
//           y1="0"
//           x2="48"
//           y2="48"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#080808ff" />
//           <stop offset="1" stopColor="#0a0a0aff" />
//         </linearGradient>
//       </defs>
//     </svg>
//   ),
//   value: "12+",
//   label: "Industries Served",
// },
// ];

// const Portfolio = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       style={{
//         background: isDark ? "#181F2A" : "#ffffff",
//         color: isDark ? "#fff" : "#000",
//         minHeight: "100vh",
//         fontFamily: "Inter, sans-serif",
//         padding: "0",
//         margin: "0",
//         transition: "background 0.3s ease, color 0.3s ease",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1100,
//           margin: "0 auto",
//           textAlign: "center",
//           paddingTop: 32,
//         }}
//       >
//         <h2
//           style={{
//             color: isDark ? "#f8f8faff" : "#1a1a1a",
//             fontSize: "2.5rem",
//             fontWeight: 700,
//             marginBottom: 8,
//             letterSpacing: "-1px",
//           }}
//         >
//           Our Portfolio
//         </h2>
//         <div
//           style={{
//             color: isDark ? "#9799a3ff" : "#555",
//             fontSize: "1.1rem",
//             fontWeight: 500,
//             marginBottom: 4,
//           }}
//         >
//           WebStitch -{" "}
//           <span
//             style={{ color: isDark ? "#b3a7a7ff" : "#777", fontWeight: 400 }}
//           >
//             powered by Trinix Pvt Ltd
//           </span>
//         </div>
//         <div
//           style={{
//             color: isDark ? "#a6aab0ff" : "#666",
//             fontSize: "1.15rem",
//             marginBottom: 36,
//             fontWeight: 400,
//             marginTop: 10,
//           }}
//         >
//           Showcasing our finest work - innovative solutions that drive real
//           business results
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "48px",
//             flexWrap: "nowrap",
//             marginTop: 10,
//           }}
//         >
//           {stats.map((stat, idx) => (
//             <div
//               key={idx}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 minWidth: 150,
//               }}
//             >
//               <div style={{ marginBottom: 10 }}>{stat.icon(isDark)}</div>
//               <div
//                 style={{
//                   color: isDark ? "#fff" : "#1a1a1a",
//                   fontSize: "1.5rem",
//                   fontWeight: 700,
//                   marginBottom: 4,
//                   letterSpacing: "-0.5px",
//                   lineHeight: 1.1,
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div
//                 style={{
//                   color: isDark ? "#A1A7BB" : "#666",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   letterSpacing: "0.1px",
//                   marginTop: 0,
//                 }}
//               >
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";

const stats = [
  // {
  //   icon: (
  //     <svg width="48" height="48" fill="none">
  //       <rect width="48" height="48" rx="12" className="fill-primary" />
  // <path
  //   d="M24 18c1.47 0 2.67-1.2 2.67-2.67S25.47 12.67 24 12.67 21.33 13.87 21.33 15.33 22.53 18 24 18zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.67v-1.33c0-1.78-3.55-2.67-5.34-2.67z"
  //   fill="#fff"
  // />
  //     </svg>
  //   ),
  //   value: "150+",
  //   label: "Projects Delivered",
  // },

  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" className="fill-primary" />
        {/* Example: centered user icon */}
        <circle cx="24" cy="20" r="6" fill="#fff" />
        <rect x="14" y="30" width="20" height="6" rx="3" fill="#fff" />
      </svg>
    ),
    value: "150+",
    label: "Projects Delivered",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <rect width="48" height="48" rx="12" className="fill-primary" />
        <path
          d="M24 18c1.47 0 2.67-1.2 2.67-2.67S25.47 12.67 24 12.67 21.33 13.87 21.33 15.33 22.53 18 24 18zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.67v-1.33c0-1.78-3.55-2.67-5.34-2.67z"
          fill="#fff"
        />
      </svg>
    ),
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <rect width="48" height="48" rx="12" className="fill-primary" />
        <path
          d="M24 18c1.47 0 2.67-1.2 2.67-2.67S25.47 12.67 24 12.67 21.33 13.87 21.33 15.33 22.53 18 24 18zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.67v-1.33c0-1.78-3.55-2.67-5.34-2.67z"
          fill="#fff"
        />
      </svg>
    ),
    value: "96/100",
    label: "Average Performance",
  },
  {
    icon: (
      <svg width="48" height="48" fill="none">
        <rect width="48" height="48" rx="12" className="fill-primary" />
        <path
          d="M24 18c1.47 0 2.67-1.2 2.67-2.67S25.47 12.67 24 12.67 21.33 13.87 21.33 15.33 22.53 18 24 18zm0 1.33c-1.78 0-5.33.89-5.33 2.67v1.33h10.67v-1.33c0-1.78-3.55-2.67-5.34-2.67z"
          fill="#fff"
        />
      </svg>
    ),
    value: "12+",
    label: "Industries Served",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-background text-foreground min-h-screen py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Our Portfolio
        </h2>
        <div className="text-muted-foreground text-lg mb-1">
          WebStitch -{" "}
          <span className="text-foreground font-normal">
            powered by Trinix Pvt Ltd
          </span>
        </div>
        <div className="text-muted-foreground text-base mb-10">
          Showcasing our finest work - innovative solutions that drive real
          business results
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px]">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
