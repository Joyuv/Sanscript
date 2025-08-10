"use client";
import React, { useState } from "react";

export default function Likes() {
  const { likes, setLikes } = React.useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return <button onClick={handleClick}>likes ({likes})</button>;
}
