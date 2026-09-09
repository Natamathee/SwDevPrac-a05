"use client";

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Dayjs } from "dayjs";

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [venue, setVenue] = useState("");

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Reserve Date"
          value={reserveDate}
          onChange={(newValue) => setReserveDate(newValue)}
          slotProps={{ textField: { variant: "standard", fullWidth: true } }}
        />
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        fullWidth
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        fullWidth
      />

      <Select
        id="venue"
        variant="standard"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        displayEmpty
        fullWidth
      >
        <MenuItem value="" disabled>
          Select Venue
        </MenuItem>
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  );
}
