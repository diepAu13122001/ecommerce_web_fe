import React from 'react'

export default function Showroom_comment() {
  return (
    <div>Showroom
        <Card className='rounded-0 border-0'>
            <ListGroup className="list-group-flush mh-100" style={{ textAlign: "left" }}>
              <ListGroup.Item className='border-0'>
                <Card.Title>Showroom in HCMcity</Card.Title>
              </ListGroup.Item>
              {Array.from({ length: 4 }).map((_, idx) => (
                <ListGroup.Item className='border-0'>
                  <Card.Title><small>Card Title {idx}</small></Card.Title>
                  <Card.Text><small>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </small></Card.Text>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
    </div>
  )
}
