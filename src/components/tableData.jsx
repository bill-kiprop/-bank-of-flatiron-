

export default function Tabledata({  date, description, category, amount}) {
  return (
    
    <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
    </tr>
    
  )
}
