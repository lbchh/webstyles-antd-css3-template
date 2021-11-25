import logo from "./logo.svg";
import "./App.css";
import { Select, Form, Input, Button, Radio } from "antd";

const onChange = (e) => {
  var link_list = document.getElementsByTagName("link");
  if (link_list) {
    for (var i = 0; i < link_list.length; i++) {
      console.log("????????????????????",link_list[i])
      // 要找到所有link中rel属性值包括style的，也就是包括stylesheet和alternate stylesheet;
      if (link_list[i].getAttribute("id") === "theme_link") {
        link_list[i].href = "https://cdn.jsdelivr.net/npm/webstyles-antd-css3-template/dist/" + e.target.value + ".css";
        
        return
      }
    }
  }
};

const onFinish = (values: any) => {
  console.log("onFinish:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("onFinishFailed:", errorInfo);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>webstyles-antd-css3-template</h1>
        {/* <Select defaultValue="default" style={{ width: 120 }} onChange={handleChange}>
          <Option value="default">Default</Option>
          <Option value="dark">Dark</Option>
          <Option value="schneider">Schneider</Option>
        </Select> */}
      </header>
      <div className={"App-content"}>
        <Form
          name="basic"
          className="test_form"
          style={{ padding: "15px", margin: "15px" }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="主题" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
            <Radio.Group onChange={onChange} initialValues={"default@4.17.0"}>
              <Radio value={"default@4.17.0"}>default</Radio>
              <Radio value={"se@4.17.0"}>schneider</Radio>
              <Radio value={"dark@4.17.0"}>dark</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Theme Name"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </div>

      <div className={"App-footer"}>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </div>
    </div>
  );
}

export default App;
