import  Episode  from "./Episode";

export default function ListEpisode(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)


  arrayOfElement.forEach(e => {

    element.querySelector('div').appendChild(Episode(e))
  });

  return element
}