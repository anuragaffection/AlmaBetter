
import { useQuery, gql } from '@apollo/client'

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user{
        id
        name
      }
    }
  }
`

function App() {
  const { data, loading } = useQuery(query);

  if (loading) {
    return (
      <div>Loading....</div>
    )
  }

  // null checking , ?
  return (
    <>
      <div>
        <table>
          <tbody>
            {
              data.getTodos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td> {todo.title} </td>
                    <td> {todo?.user?.name} </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
