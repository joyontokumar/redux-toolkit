import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { reactFormHookSchema } from "../../validation/react-form-hook-schema";
import * as faceapi from "face-api.js";

const ReactFormHook = () => {
  const [faceError, setFaceError] = useState<string>("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(reactFormHookSchema()),
  });
  useEffect(() => {
    // Load the face-api.js models
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      await faceapi?.nets?.faceExpressionNet?.loadFromUri("/models");
      await faceapi?.nets?.mtcnn?.loadFromUri("/models");
      await faceapi?.nets?.ssdMobilenetv1?.loadFromUri("/models");
      await faceapi?.nets?.ageGenderNet?.loadFromUri("/models");
    };

    loadModels();
  }, []);
  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    console.log("get file", file);
    const image = await faceapi?.bufferToImage(file);
    const detections = await faceapi
      .detectAllFaces(image)
      .withFaceLandmarks()
      .withFaceDescriptors();
    // const detections = await faceapi
    //   .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
    //   .withFaceLandmarks()
    //   .withFaceDescriptors();
    console.log("get detection", detections);
    if (detections.length > 0) {
      setFaceError("face found");
    } else {
      setFaceError("face not found");
    }

    const imageContainer = document.getElementById("image-container"); // Replace with the actual element
    if (imageContainer) {
      imageContainer.innerHTML = ""; // Clear previous content
      imageContainer.appendChild(image);
      // You can remove the following lines to prevent drawing bounding boxes and scores
      const canvas = faceapi.createCanvasFromMedia(image);
      faceapi.matchDimensions(canvas, image);
      faceapi.draw.drawFaceLandmarks(canvas, detections);
      imageContainer.appendChild(canvas);
    }
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="m-3 p-3 bg-[#ddd]">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div className="single-field">
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input {...field} placeholder="Enter email" />
              )}
            />
            {errors?.email?.message && (
              <span className="error">{errors?.email?.message}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div
              id="image-container"
              style={{ height: "100px", width: "100px" }}
            ></div>
          </div>
        </div>
        <div className="grid">
          {faceError && <p className="text-red">{faceError}</p>}
        </div>
        <div className="grid grid-cols-1">
          <button className="primary-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactFormHook;
