"use client";

export const AlertButton = () => {
  return (
    <button
      onClick={() => {
        alert("Hello");
      }}
    >
      Alert
    </button>
  );
};
