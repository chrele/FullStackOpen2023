const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}: {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  const lists= props.course.parts.map(
    function(list) {
      return (
        <div>
          <Part part = {list.name} exercises = {list.exercises}/>
        </div>
      )
    }
  )
  return lists
}

const Total = (props) => {
  var num = 0

  const lists = props.course.parts.map(
    function(item) {
      num += item.exercises
      return num
    }
  )

  return (
    <div>
      <p>Number of exercises {num}</p>
    </div>
  )
}

const App = () => {
  const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

  return (
    <div>
      <Header course={course.name} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App