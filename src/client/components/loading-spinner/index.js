import React from "react";
import { ScaleLoader } from "react-spinners";

/**
 * LoaderSpinner Component
 *
 * Displays a placeholder for loading process.
 *
 * @param {Object} props
 * @param {string} props.color - The color of the loader.
 * @param {number} props.height - The height of the loader.
 * @param {boolean} props.loading - Indicates if the loader should be displayed.
 * @param {number} props.margin - The margin between the loader elements.
 * @param {number} props.radius - The border radius of the loader.
 * @param {number} props.speedMultiplier - The speed multiplier for the loader animation.
 * @param {number} props.width - The width of the loader.
 *
 * @returns {JSX.Element}
 */
const LoaderSpinner = (props) => {
  const { color, height, loading, margin, radius, speedMultiplier, width } =
    props;

  return (
    <div className="loader-spinner-container">
      <ScaleLoader
        color={color}
        height={height}
        loading={loading}
        margin={margin}
        radius={radius}
        speedMultiplier={speedMultiplier}
        width={width}
      />
    </div>
  );
};

// Set default props
LoaderSpinner.defaultProps = {
  color: "#343148ff",
  height: 30,
  loading: true,
  margin: 2,
  radius: 2,
  speedMultiplier: 2,
  width: 4,
};

export default LoaderSpinner;
