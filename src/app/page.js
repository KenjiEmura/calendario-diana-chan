"use client"; // This component renders only on the client side

import { useState } from "react";
import { DateTime } from "luxon";
import Calendar from "react-calendar";

export default function Home() {
  const now = DateTime.now();

  const [selectedWeek, setSelectedWeek] = useState([
    now.startOf("week").toISODate(),
    now.endOf("week").toISODate(),
  ]);

  const parseRange = (date) => {
    const selectedDate = DateTime.fromJSDate(date);
    setSelectedWeek([
      selectedDate.startOf("week").toISODate(),
      selectedDate.endOf("week").toISODate(),
    ]);
  };

  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Para Diana con cariño 💕</h1>

      <Calendar onChange={parseRange} value={selectedWeek} locale="ja-JP" />
    </div>
  );
}
