import React from 'react'
import { Input, Button, Form, Checkbox } from 'antd';
import DefaultLayout from '../../DefaultLayout'
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const handleSignIn = useCallback(() => {
    fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=ec65c7958beee32ce8074bd45dacf4b2`)
    .then((res) => res.json())
    .then((res) => {
      if(res){
        localStorage.setItem("token", res?.request_token);
        navigate("/");
      }
    });
  }, [navigate]);

  return (
        <DefaultLayout>
            <div className='login-page'>
                <h2>Login to your account</h2>
                <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.</p>
                <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSignIn}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
        </DefaultLayout>

);
  }

export default LoginPage