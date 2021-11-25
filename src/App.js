import logo from "./logo.svg";
import "./App.css";
import { Select, Form, Input, Button, Radio } from "antd";
import "antd/dist/antd.less"; // or 'antd/dist/antd.less'
const { Option } = Select;

const onChange = (e) => {
  var link_list = document.getElementsByTagName("link");
  if (link_list) {
    for (var i = 0; i < link_list.length; i++) {
      // 要找到所有link中rel属性值包括style的，也就是包括stylesheet和alternate stylesheet;
      if (link_list[i].getAttribute("rel").indexOf("style") != -1) {
        link_list[i].href = "http://localhost:8000/" + e.target.value + ".css";
      }
    }
  }
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="testClass">
          当然最原始的你还可以使用window.setTimout()或者window.setInterval()通过不断更新元素的状态位置等来实现动画，前提是画面的更新频率要达到每秒60次才能让肉眼看到流畅的动画效果。现在又多了一种实现动画的方案，那就是还在草案当中的
          window.requestAnimationFrame()方法。
        </p>
        <p className="testClass2">
          当然最原始的你还可以使用window.setTimout()或者window.setInterval()通过不断更新元素的状态位置等来实现动画，前提是画面的更新频率要达到每秒60次才能让肉眼看到流畅的动画效果。现在又多了一种实现动画的方案，那就是还在草案当中的
          window.requestAnimationFrame()方法。
        </p>

        {/* <Select defaultValue="default" style={{ width: 120 }} onChange={handleChange}>
          <Option value="default">Default</Option>
          <Option value="dark">Dark</Option>
          <Option value="schneider">Schneider</Option>
        </Select> */}

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
          <Form.Item
            label="主题"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Radio.Group onChange={onChange}>
              <Radio value={"default"}>default</Radio>
              <Radio value={"dark"}>dark</Radio>
              <Radio value={"schneider"}>schneider</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Username"
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

        <div style={{ margin: "10px" }}></div>
        <Button type="primary">Primary Button</Button>
      </header>
    </div>
  );
}

export default App;
