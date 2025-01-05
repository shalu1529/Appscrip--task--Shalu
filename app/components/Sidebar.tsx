// import React from "react";


// const Sidebar = () => {
//   return (
//     <>
//       <aside
//         style={{
//           width: "380px",
//           minWidth: "380px", // Ensure the sidebar width doesn't collapse
//           padding: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <div
//           style={{ marginBottom: "20px", borderBottom: "1px solid lightgrey" }}
//         >
//           <label
//             style={{
//               display: "flex",
//               alignItems: "center",
//               fontSize: "16px",
//               textTransform: "uppercase",
//               fontWeight: "bold",
//               marginBottom: "20px",
//               marginTop: "10px",
//             }}
//           >
//             <input
//               type="checkbox"
//               style={{ marginRight: "10px", width: "40px", height: "16px" }}
//             />
//             Customizable
//           </label>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             Ideal For
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             occasion
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             work
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             Fabric
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             segment
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             Suitable for
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             raw materials
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//         <div
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             pattern
//           </h3>

//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "18px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "none",
//             }}
//           >
//             <option>All</option>
//             <option>Men</option>
//             <option>Women</option>
//             <option>Kids</option>
//           </select>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;




// import React from "react";

// const filterOptions = [
//   { title: "Ideal For", options: ["All", "Men", "Women", "Kids"] },
//   { title: "Occasion", options: ["All", "Casual", "Formal", "Party"] },
//   { title: "Work", options: ["All", "Embroidered", "Printed", "Plain"] },
//   { title: "Fabric", options: ["All", "Cotton", "Silk", "Linen"] },
//   { title: "Segment", options: ["All", "Premium", "Economy", "Luxury"] },
//   { title: "Raw Materials", options: ["All", "Organic", "Synthetic"] },
//   { title: "Pattern", options: ["All", "Striped", "Checked", "Solid"] },
// ];

// const Sidebar = () => {
//   return (
//     <aside
//       style={{
//         width: "380px",
//         minWidth: "380px",
//         padding: "20px",
//         boxSizing: "border-box",
//         borderRight: "1px solid #e0e0e0",
//       }}
//     >
      
//       {/* Customizable Checkbox */}
//       <div
//         style={{
//           marginBottom: "20px",
//           borderBottom: "1px solid lightgrey",
//           paddingBottom: "10px",
//         }}
//       >
//         <label
//           style={{
//             display: "flex",
//             alignItems: "center",
//             fontSize: "16px",
//             textTransform: "uppercase",
//             fontWeight: "bold",
//           }}
//         >
//           <input
//             type="checkbox"
//             style={{ marginRight: "10px", width: "16px", height: "16px" }}
//           />
//           Customizable
//         </label>
//       </div>

//       {/* Filters */}
//       {filterOptions.map((filter, index) => (
//         <div
//           key={index}
//           style={{
//             marginBottom: "20px",
//             paddingBottom: "20px",
//             borderBottom: "1px solid lightgrey",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "18px",
//               marginBottom: "10px",
//               textTransform: "uppercase",
//               fontWeight: "700",
//             }}
//           >
//             {filter.title}
//           </h3>
//           <select
//             style={{
//               width: "100%",
//               padding: "8px",
//               fontSize: "16px",
//               color: "darkgrey",
//               fontWeight: "500",
//               border: "1px solid #ddd",
//               borderRadius: "4px",
//             }}
//           >
//             {filter.options.map((option, idx) => (
//               <option key={idx} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;





import React from "react";
import "../pages/products.css";

const filterOptions = [
  { title: "Ideal For", options: ["All", "Men", "Women", "Kids"] },
  { title: "Occasion", options: ["All", "Casual", "Formal", "Party"] },
  { title: "Work", options: ["All", "Embroidered", "Printed", "Plain"] },
  { title: "Fabric", options: ["All", "Cotton", "Silk", "Linen"] },
  { title: "Segment", options: ["All", "Premium", "Economy", "Luxury"] },
  { title: "Raw Materials", options: ["All", "Organic", "Synthetic"] },
  { title: "Pattern", options: ["All", "Striped", "Checked", "Solid"] },
];

const Sidebar = () => {
  return (
    <aside className="sidebar"
      // style={{
      //   width: "300px",
      //   minWidth: "380px",
      //   padding: "20px",
      //   boxSizing: "border-box",
      //   borderRight: "1px solid #e0e0e0",
      
      // }}
    >
      {/* Customizable Checkbox */}
      <div
        style={{
          marginBottom: "20px",
          borderBottom: "1px solid lightgrey",
          paddingBottom: "10px",
        }}
      >
        <label
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          <input
            type="checkbox"
            style={{ marginRight: "10px", width: "16px", height: "16px" }}
          />
          Customizable
        </label>
      </div>

      {/* Filters */}
      {filterOptions.map((filter, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            {filter.title}
          </h3>
          <select
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              color: "darkgrey",
              fontWeight: "500",
              border: "none", // Removed the border
              borderRadius: "4px", // Kept some radius for better look
              backgroundColor: "transparent", // Transparent background
              outline: "none", // Removed focus outline
            }}
          >
            {filter.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

