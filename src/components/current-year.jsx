"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <time dateTime={String(year ?? "")}>{year}</time>;
}
