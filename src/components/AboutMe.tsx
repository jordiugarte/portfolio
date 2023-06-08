import Grid from '@mui/material/Grid'
import { BodyText, CustomImage } from '../styled/Styled'

const AboutMe = () => {
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7}>
            <CustomImage src='./images/main_image.jpg' />
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <BodyText>Born in 1999 in La Paz, Bolivia. Designing, developing and creating. Three steps to make any idea real and tangible. I am a Software Developer and Artist that produces illustrations, music and videogames in my free time. I put art on everything I do.</BodyText>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AboutMe