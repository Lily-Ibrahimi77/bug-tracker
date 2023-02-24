import React ,{useState}from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Card() {

  const [data, setData] = useState({
    description: '',
    priority: '',
  });

  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData((preData)=>{
      return {...preData,[name]:value}
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    setData(
      {
        
      }
    )

  }
  return (<>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" id="description" value={data.description} onChange={handleChange} required />
        </Form.Group>

        <Form.Group as={Row} >
        <Form.Label>Priority</Form.Label>
          <Form.Select defasltValue="Choose..." name="priority" id="priority" value={data.priority}  onChange={handleChange}>
            <option  value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option  value="High">High</option>
          </Form.Select>
        </Form.Group>

      <div className="d-flex mt-3 flex-row gap-5" as={Col} >
        <Button className="w-50 " variant="primary" size="sm" type="submit">add</Button>
        <Button className="w-50 " variant="danger" size="xl" type="button">Delete</Button>
      </div>
      
    </Form>










    </>
  );
}

export default Card;
