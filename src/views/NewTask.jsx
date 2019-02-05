import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class NewTask extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="title">Create A New Task</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Task Title</label>
                                                    <Input
                                                        defaultValue=""
                                                        disabled
                                                        placeholder="Laundry Pick - Dog Walking  - Item Pick Up"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="2">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Task Created Date
                          </label>
                                                    <Input placeholder="" type="email" />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="2">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Task Due Date
                          </label>
                                                    <Input placeholder="" type="email" />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="2">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Task Time Deadline
                          </label>
                                                    <Input placeholder="" type="email" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>

                                        </Row>
                                        <Row>
                                            <Col md="12">

                                            </Col>

                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>City</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="City"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Country</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Country"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label>Postal Code</label>
                                                    <Input placeholder="ZIP Code" type="number" />
                                                </FormGroup>
                                            </Col>
                                        </Row>



                                        <Row>
                                            <Col md="12">

                                            </Col>

                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Pick Up Location</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Pick Up Location"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Drop Off Location</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Drop Off Location"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label>Payout Amount</label>
                                                    <Input placeholder="$0.00" type="number" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Col className="px-md-1" md="12">
                                            <FormGroup>
                                                <label>Task Details</label>
                                                <Input
                                                    cols="80"
                                                    defaultValue=""
                                                    placeholder="What are you doing?     Where do you have to go?"
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <ButtonToolbar>
                                    <DropdownButton id="dropdown-item-button" title="Priority Level">
                                        <Dropdown.Item as="button">High</Dropdown.Item>
                                        <Dropdown.Item as="button">Medium</Dropdown.Item>
                                        <Dropdown.Item as="button">Low</Dropdown.Item>
                                    </DropdownButton>
                                    <Button className="btn-fill" color="primary" type="submit">
                                        Create
                                    </Button>
                                    


                                    </ButtonToolbar>
                                </CardFooter>
                     
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default NewTask;
