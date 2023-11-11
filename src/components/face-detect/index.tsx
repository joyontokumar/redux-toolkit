import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import {
  createDetector,
  SupportedModels,
} from "@tensorflow-models/face-detection";

const ImageFaceDetectionComponent = () => {
  const imageRef: any = useRef();
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend("webgl");
        await createDetector(SupportedModels.MediaPipeFaceDetector, {
          runtime: "tfjs",
        });
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, []);

  const handleImageLoad = async () => {
    try {
      // Set the src attribute to the selected image file
      const file = imageRef.current?.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        imageRef.current.src = imageUrl;

        const detector = await createDetector(
          SupportedModels.MediaPipeFaceDetector
        );
        const predictions = await (detector as any)?.detect(imageRef.current);

        setDetections(predictions);
      }
    } catch (error) {
      console.error("Error detecting faces:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        onChange={handleImageLoad}
      />
      <img ref={imageRef} alt="Selected" />

      <div>
        {detections.map((detection: any, index) => (
          <div key={index}>
            {detection.topLeft
              ? `Face ${index + 1}: X: ${detection.topLeft[0]}, Y: ${
                  detection.topLeft[1]
                }`
              : "Face position not available"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageFaceDetectionComponent;
