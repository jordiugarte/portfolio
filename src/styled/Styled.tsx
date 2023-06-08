import styled from "@emotion/styled"

export const LeftContainer = styled.div`
    align-content: left;
    text-align: left;
    margin: 16px;
`

export const RightContainer = styled.div`
    align-content: right;
    text-align: right;
    background-color: red;
    margin: 16px;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 5em;
    text-align: left;
    color: white;
    margin-bottom: 8px;
`

export const SubTitle = styled.h2`
    font-size: 2em;
    text-align: left;
    color: white;
    margin-bottom: 8px;
    font-weight: bold;
`

export const Aptitudes = styled.h4`
    font-size: 1.2em;
    text-align: left;
    color: white;
    font-weight: 300;
`

export const LargeText = styled.h2`
    font-size: 1.5em;
    text-align: right;
    color: white;
    font-weight: 300;
`

export const BodyText = styled.p`
    font-size: 1em;
    text-align: right;
    color: white;
    font-weight: 200;
`

export const Element = styled.p`
    font-size: 1em;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    color: white;
    font-weight: 200;
`

export const AlignToBottom = styled.div`
    position: absolute;
    padding-right: 1em;
    padding-bottom: 1em;
    bottom: 0;
    right: 0;
`

export const ResonsiveGrid = styled.div`
    color: black;
    width: 0;
    heigh: 0;
    border-right: 100px solid transparent;
    border-top: 100px solid transparent;
    border-left: 100px solid transparent;
    border-bottom: 100px solid #f0ad4e;
    font-size: 30px;
    font-weight: bold;
`
export const BoxContainer = styled.div`
  padding: 2em;
  justifyContent: center;
  alignItems: center;
`

export const CustomImage = styled.img`
  width: 256px;
  height: 256px;
`

export const MainPage = styled.main`
  border-color: white;
  border-width: 1px;
  border-radius: 32px;
  border-style: solid;
  margin: 16px;
`

export const ProjectsBox = styled.div`
  height: 90vh;
  overflow-y: scroll;
`