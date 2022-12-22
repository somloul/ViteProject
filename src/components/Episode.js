import createElement from "../utils/createElement";

const Episode = ({ textTitle = 'Bonjour', textDate = 'test', tagName = 'div' } = {}) => createElement(
  {
    tagName,
    children: [
      {
        tagName: 'table',
        children: [
          {
            tagName: 'tr',
            children: [
              {
                tagName: 'h4',
                text: textTitle
              }
            ],
          },
          {
            tagName: 'tr',
            text: textDate
          }
        ]
      },
    ]
  }
)

export default Episode