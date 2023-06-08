import Grid from "@mui/material/Grid"
import { AlignToBottom, SubTitle, Element } from "../styled/Styled"

const Technologies = () => {
  const technologies = ['Android', 'Kotlin', 'Java', 'Flutter', 'Java', 'Unity3D', 'C#', 'MySQL', 'PHP']
  const tools = ['Tools', 'Android Studio', 'Unity3D', 'Visual Studio', 'Figma', 'Postman', 'Blender', 'Photoshop']

  return (
    <>
      <AlignToBottom>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SubTitle>Skills</SubTitle>
            {technologies.map((i) => (<Element>{i}</Element>))}
          </Grid>
          <Grid item xs={6}>
            <SubTitle>Tools</SubTitle>
            {tools.map((i) => (<Element>{i}</Element>))}
          </Grid>
        </Grid>
      </AlignToBottom>
    </>
  )
}

export default Technologies