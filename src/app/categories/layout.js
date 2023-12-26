import CategoryList from '@/components/ui/CategoryList/CategoryList';
import SideBar from '@/components/ui/SideBar/SideBar';
import { Box, Container, Grid } from '@mui/material';

const CategoriesLayout = ({ children }) => {
  return (
    <div className='mt-5 w-10/12 mx-auto'>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <CategoryList></CategoryList>
            </Grid>
            <Grid item xs={12} lg={9}>
              <h1>{children}</h1>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default CategoriesLayout;
