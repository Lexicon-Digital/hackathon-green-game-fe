import Progress from "../Progress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Points() {
  return (
    <Box sx={{ width: "80%", marginLeft: "10%", height: "360px" }}>
      <h2>Points</h2>
      <Progress />
      <h3>You have 15'800 points!</h3>
      <p>Earn another 4'200 points to reach Silver Status</p>

      <Button href="#" variant="contained">
        Ideas for Improvement
      </Button>
    </Box>
  );
}
