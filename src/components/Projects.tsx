import { IconButton } from "@mui/material"
import { SubTitle, Element, ProjectsBox } from "../styled/Styled"
import { Carousel, CarouselItem } from "./Carousel"
import LinkIcon from '@mui/icons-material/Link';

const Projects = () => {
  const projects = 
  [
    {
      title: 'Ánima - Immersive architecture software',
      description: 'Ánima is an immersive architectural virtualization software for real-time demonstrations of buildings and interiors for clients such as construction or real estate companies.',
      video: 'https://www.youtube.com/embed/XQwSSOno8Ag',
      date: '2020'
    },
    {
      title: 'Empleapp',
      description: 'With Empleapp it is very easy to search for talented personnel or the right job through your computer or smartphone. Our personnel search and selection tools help employers who want to save time, reduce the list of applications and increase the probability of hiring personnel aligned with their company. On the other hand, our intelligent job search engine helps talented people who want a job, alleviate the feeling of frustration, increasing the opportunities to get a job. Using the application you can be instantly notified when a new job is published on our platform.',
      images: 
      [
        './images/app/empleapp0.webp',
        './images/app/empleapp1.webp',
        './images/app/empleapp2.webp',
        './images/app/empleapp3.webp',
        './images/app/empleapp4.webp',
        './images/app/empleapp5.webp',
      ],
      date: '2021',
      url: 'https://play.google.com/store/apps/details?id=com.rjc.empleapp&hl=es_419&gl=US',
    },
    {
      title: 'Beastley Overload',
      description: 'The Zombie Apocalypse has just begun. He plays as Tyron, a convict who escaped from an infected prison and is now trying to escape from the zombie-infected city. However, in the attempt to escape from him he finds himself trapped and surrounded by the entire Zombie population of the city. He is the last survivor and the only one who can clean the whole city from Zombies.',
      images: 
      [
        './images/app/beastley0.webp',
        './images/app/beastley1.webp',
        './images/app/beastley2.webp',
        './images/app/beastley3.webp',
        './images/app/beastley4.webp',
      ],
      date: '2017',
      url: 'https://play.google.com/store/apps/details?id=com.DigitalString.BeastleyOverload',
    },
    {
      title: 'Numerology Calculator',
      description: 'If you want to calculate your number according to numerology and know what it means, use this simple and fast application. Numerology Calculator is a completely free and interactive application that allows you to calculate the Pythagorean numerology for any date that is entered in the application. Whether it is the birthday of your friend, brother, dog, etc., you will be able to discover the meaning of their numbers and their meaning in their personality and way of being.',
      images: 
      [
        './images/app/numerology0.webp',
        './images/app/numerology1.webp',
        './images/app/numerology2.webp',
        './images/app/numerology3.webp',
      ],
      date: '2019',
      url: 'https://play.google.com/store/apps/details?id=com.digistring.numbercalculator',
    }
  ]

  return (
    <>
      <ProjectsBox>
        {projects.map((project) => (
          <div>
            <SubTitle>{project.title}{project.url != null ? <IconButton color="primary" href={project.url}><LinkIcon /></IconButton> : <></>}</SubTitle>
            <Element>{project.date}</Element>
            <p>{project.description}</p>
            {project.video != null ? <iframe width="100%" height="315" src={project.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" /> : <div></div>}
            {project.images != null ? <div>
              <Carousel
                items={project.images}
                renderItem={({ item, isSnapPoint }) => (
                  <CarouselItem isSnapPoint={isSnapPoint}>
                    <img src={item} width="auto" height="512px" alt="Placeholder" />
                  </CarouselItem>
                )}
              />
            </div> : <div></div>}
          </div>
        ))}
      </ProjectsBox>
    </>
  )
}

export default Projects