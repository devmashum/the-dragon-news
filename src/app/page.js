import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
<> 
<div className="pt-5">
<Grid container spacing={2}>
  <Grid xs={8}>
<LatestNews></LatestNews>
  </Grid>
  <Grid xs={4}>
<SideBar></SideBar>
  </Grid>
</Grid>
</div>
</>


  );
};

export default HomePage;