import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CreatePostModalProps {
  show: boolean;
  onHide: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ show, onHide }) => {
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [availabilityDateTime, setAvailabilityDateTime] = useState<Date | null>(null);
  const [category, setCategory] = useState('Produce'); 
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: Number(price),
          title,
          location,
          availability: availabilityDateTime ?? new Date(), 
          category,
          image,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response for posting item was not ok :(');
      }

      const data = await response.json();
      console.log('Post was successful:', data);
      window.location.reload(); 
    } catch (error) {
      console.error('There was a problem with the fetch operation for posting items :(', error);
    } finally {
      onHide(); // Close the form after submission
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Availability Date & Time</Form.Label>
            <DatePicker
              selected={availabilityDateTime}
              onChange={(date: Date | null) => setAvailabilityDateTime(date)}
              showTimeSelect
              dateFormat="Pp"
              className="form-control"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Food Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Produce">Produce</option>
              <option value="Ready made">Ready made</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Create Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePostModal;
