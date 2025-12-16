import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Customcard(props) {
    
  return (
    <Card style={{ width: '18rem' }}
    bg={"success".toLowerCase()}
          key={"success"}
          text={"success".toLowerCase() === 'light' ? 'dark' : 'white'}
          
          className="mb-2 ">
      <Card.Img success="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>
          {props.item.description}
        </Card.Text>
        <Button success="primary">{props.item.category}</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;