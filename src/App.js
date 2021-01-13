import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.dark.css';
import { Analysis } from './Analysis';
import { API_SERVER } from './config';

function App() {

  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const onFinish = (value) => {
    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    };
    fetch(`${API_SERVER}/api/v1/analyser/html`, requestOptions)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(e => {message.error(e)})
      .finally(()=>setLoading(false));
  }

  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form onFinish={onFinish}>
          <Form.Item name="data" label="URL">
            <Input placeholder="Enter a valid URL" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Analyse</Button>
        </Form>
        <Analysis loading={loading} data={data}/>
      </body>
    </div>
  );
}

export default App;
