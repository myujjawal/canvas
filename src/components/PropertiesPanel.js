import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@material-ui/core/Box";

import "./properties.css";

const PropertiesPanel = ({ x, y }) => {
  const [color, setcolor] = React.useState("");

  const handleChange = (event) => {
    setcolor(event.target.value);
  };
  return (
    <div className="panel">
      <div className="item">X : {x}</div>
      <div className="item">Y : {y}</div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Color </InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value={color}
            label="Color"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default PropertiesPanel;
