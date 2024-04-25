import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import signupImage from '../assets/signup.jpg';
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const { loading, error, signupUser } = useSignup();
    const handleSignup = (values) => {
        signupUser(values);
    };

    return (
        <Card className={'form-container'}>
            <Flex gap='large' align='center'>
                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Create an account
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className="slogan">
                        Join for free!
                    </Typography.Text>
                    <Form
                        layout='vertical'
                        onFinish={handleSignup}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!'
                                }
                            ]}>
                            <Input size='large' placeholder='Enter your full name' />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'please input your email!'
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not a valid email!'
                                }
                            ]}>
                            <Input size='large' placeholder='Enter your email' />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'please input your password!'
                                }
                            ]}
                        >
                            <Input.Password
                                size='large'
                                placeholder='Enter your password'
                            />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'please confirm your password!'
                                }
                            ]}
                        >
                            <Input.Password
                                size='large'
                                placeholder='Confirm your password'
                            />
                        </Form.Item>

                        {error && (
                            <Alert
                                description={error}
                                type='error'
                                showIcon
                                closable
                                className='alert'
                            />
                        )}
                        <Form.Item>
                            <Button
                                type={`${loading ? '' : 'primary'}`}
                                htmlType='submit'
                                size='large'
                                className='btn'
                            >
                                {loading ? <Spin /> : 'Create Account'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/api/users/login'>
                                <Button size='large' className='btn'>Login</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>

                {/* image */}
                <Flex flex={1}>
                    <img src={signupImage} className='auth-image' />
                </Flex>
            </Flex>
        </Card>
    );
};

export default Signup;