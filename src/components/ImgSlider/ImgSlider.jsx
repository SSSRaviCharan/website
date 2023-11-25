// import { useEffect, useState } from "react";
// import "./ImgSlider.css";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

// let idx = 0;

// function ImgSlider({ photos }) {
//   const [photo, setPhoto] = useState();

//   useEffect(function () {
//     setPhoto(photos[idx]);
//   }, []);

//   function buttonHandler(direction) {
//     if (direction === "prev" && idx > 0) {
//       idx--;
//       setPhoto(photos[idx]);
//     } else if (direction === "next" && idx < photos.length - 1) {
//       idx++;
//       setPhoto(photos[idx]);
//     }
//   }

//   return (
//     <div id="ImgSlider">
//       <img src={photo} />
//       <div id="ImgSlider-buttons">
//         <button id="prev-button" onClick={() => buttonHandler("prev")}>
//           <IoIosArrowDropleftCircle />
//         </button>
//         <button id="next-button" onClick={() => buttonHandler("next")}>
//           <IoIosArrowDroprightCircle />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ImgSlider;

import { useEffect, useState } from "react";
import "./ImgSlider.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

let idx = 0;

function ImgSlider({ photos }) {
  const [photo, setPhoto] = useState(photos[0]);

  useEffect(function () {
    setPhoto(photos[idx]);
  }, []);

  function buttonHandler(direction) {
    let newIndex;

    if (direction === "prev") {
      newIndex = idx - 1;
      if (newIndex < 0) {
        newIndex = photos.length - 1; // Loop to the last image
      }
    } else if (direction === "next") {
      newIndex = idx + 1;
      if (newIndex >= photos.length) {
        newIndex = 0; // Loop to the first image
      }
    }

    idx = newIndex;
    setPhoto(photos[newIndex]);
  }

  return (
    <div id="ImgSlider">
      <img src={photo} alt={`Slide ${idx + 1}`} />
      <div id="ImgSlider-buttons">
        <button id="prev-button" onClick={() => buttonHandler("prev")}>
          <IoIosArrowDropleftCircle />
        </button>
        <button id="next-button" onClick={() => buttonHandler("next")}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}

export default ImgSlider;
