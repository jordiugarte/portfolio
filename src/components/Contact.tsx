import { AlignToBottom } from "../styled/Styled"

const Contact = () => {
  const email = 'jordi.ugarte@outlook.com'
  const links = 
  [
    {
      label: 'Email me',
      url: `mailto:${email}`
    },
    {
      label: 'Github',
      url: 'https://jordiugarte.github.io/'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jordi-ugarte/'
    },
    {
      label: 'Behance',
      url: 'https://www.behance.net/jordiugarte'
    }
  ]

  return (
    <>
      <AlignToBottom>
        {links.map(link => <p><a href={link.url}>{link.label}</a></p>)}
      </AlignToBottom>
    </>
  )
}

export default Contact