import { Aptitudes, Title } from '../styled/Styled'
import Chip from '@mui/material/Chip'
import { Link } from 'react-router-dom'

const Header = () => {
    const routes = 
  [
    {
      label: 'Home',
      route: '/'
    },
    {
      label: 'About me',
      route: '/about-me'
    },
    {
      label: 'Technologies',
      route: '/technologies'
    },
    {
      label: 'Projects',
      route: '/projects'
    },
    {
      label: 'Contact',
      route: '/contact'
    },
  ]
  return (
    <>
        <Title>Jordi Ugarte Yaffar</Title>
        <Aptitudes>Software Engineer • Game Developer</Aptitudes>
        {routes.map(route => <Chip label={route.label} variant="outlined" sx={{ color: 'white', margin: '4px' }} clickable component={Link} to={route.route}/>)}
    </>
  )
}

export default Header