//Emmanuel Torres Malena 2021-1097

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = ({ part }) => {
  // console.log(part)
  return(
    <>
      <p>{part.name} {part.exercise}</p>
    </> 
  )
}

const Content = (props) => {
  // console.log(props.parts)
  return (
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  // console.log(props.parts)
  let sum = 0
  props.parts.forEach(element => {
    sum += element.exercise
  });

  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10,
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App


//ETM