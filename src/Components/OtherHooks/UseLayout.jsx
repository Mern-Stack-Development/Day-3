// import React, { useLayoutEffect, useRef, useState } from 'react';

// export default function UseLayoutEffect() {
//   const [width, setWidth] = useState(100); // Width in pixels
//   const boxRef = useRef(null);

//   useLayoutEffect(() => {
//     if (boxRef.current) {
//       const currentWidth = boxRef.current.offsetWidth;
//       if (currentWidth > 500) {
//         setWidth(500);
//       }
//     }
//   }, [width]);

//   return (
//     <div>
//       <h1>useLayoutEffect Example</h1>
//       <div ref={boxRef} 
//           style={{ 
//             width: `${width}px`, 
//             backgroundColor: 'lightblue', 
//             padding: '10px' 
//           }}>
//         Resize me if width greater than 500!
//       </div>
//       <button onClick={() => setWidth(width + 100)}>Increase Width</button>
//       <button onClick={() => setWidth(width - 100)}>Decrease Width</button>
//     </div>
//   );
// }


import React, { useLayoutEffect, useRef, useState } from 'react';

export default function UseLayoutEffect() {
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 }); // Width and height in pixels
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const currentWidth = boxRef.current.offsetWidth;
      const currentHeight = boxRef.current.offsetHeight;

      // Adjust width
      if (currentWidth > 500) {
        setDimensions((prevDimensions) => ({
          ...prevDimensions,
          width: 500,
        }));
      }

      // Adjust height
      if (currentHeight > 300) {
        setDimensions((prevDimensions) => ({
          ...prevDimensions,
          height: 300,
        }));
      }
    }
  }, [dimensions.width, dimensions.height]);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <div
        ref={boxRef}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          backgroundColor: 'lightblue',
          padding: '10px',
        }}
      >
        Resize me if width greater than 500 or height greater than 300!
      </div>
      <button onClick={() => setDimensions((prev) => ({ ...prev, width: prev.width + 100 }))}>
        Increase Width
      </button>
      <button onClick={() => setDimensions((prev) => ({ ...prev, width: prev.width - 100 }))}>
        Decrease Width
      </button>
      <button onClick={() => setDimensions((prev) => ({ ...prev, height: prev.height + 50 }))}>
        Increase Height
      </button>
      <button onClick={() => setDimensions((prev) => ({ ...prev, height: prev.height - 50 }))}>
        Decrease Height
      </button>
    </div>
  );
}
