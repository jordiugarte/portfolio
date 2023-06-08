import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material';
import Header from './Header';
import { BoxContainer } from '../styled/Styled';
import AnimatedModule from '../AnimatedModule';

const Frontend = () => {
  return (
    <>
      <div>
        <main>
          <Grid container spacing={2} style={{ width: "100vw", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} sm={6} md={5}>
              <BoxContainer>
                <Header />
              </BoxContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <BoxContainer>
                <AnimatedModule>
                  <Outlet />
                </AnimatedModule>
              </BoxContainer>
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  )
}

export default Frontend