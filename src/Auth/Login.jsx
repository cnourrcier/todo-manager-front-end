import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.jpg';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { loading, error, loginUser } = useLogin();
    const handleLogin = async (values) => {
        await loginUser(values);
    };
    return (
        <Card className={'form-container'}>
            <Flex gap='large' align='center'>
                {/* image */}
                <Flex flex={1}>
                    <img src={loginImage} className='auth-image' />
                </Flex>
                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Login
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className="slogan">
                        Own your day!
                    </Typography.Text>
                    <Form
                        layout='vertical'
                        onFinish={handleLogin}
                        autoComplete="off"
                    >

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
                                {loading ? <Spin /> : 'Login'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/api/users/signup'>
                                <Button size='large' className='btn'>
                                    Create an account
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>


            </Flex>
        </Card>
    );
};

export default Login;