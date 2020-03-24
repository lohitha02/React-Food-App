import React from 'react'
import { Card } from 'semantic-ui-react'
import img1 from './images/img1.webp'

const CardUI = () => (
  <Card.Group itemsPerRow={2}>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
      <Card.Header>Matthew Harris</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card raised image={img1} />
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
  </Card.Group>
);

export default CardUI 