import { PageContainer } from '@ant-design/pro-components';
import { Input, Divider, Button, Row, Col } from 'antd';
import { useIntl, useModel } from 'umi';

const Base64Converter: React.FC = () => {
  const { TextArea } = Input;
  const intl = useIntl();
  const inputPlaceholder: string = intl.formatMessage({
    id: 'base64.inputPlaceholder',
  });
  const outputPlaceholder: string = intl.formatMessage({
    id: 'base64.outputPlaceholder',
  });
  const { input, setInput, output, setOutput } = useModel('base64Model');

  const convert = (
    inputString: string,
    inputFormat: BufferEncoding,
    outputFormat: BufferEncoding,
  ) => {
    const str: string = new Buffer(input, inputFormat).toString(outputFormat);
    setOutput(str);
  };
  const switchText = () => {
    const tempIn = input;
    setInput(output);
    setOutput(tempIn);
  };
  return (
    <PageContainer ghost>
      <TextArea
        autoSize={{ minRows: 5, maxRows: 12 }}
        placeholder={inputPlaceholder}
        onChange={(v) => setInput(v.target.value)}
        value={input}
      />
      <div style={{ marginTop: 20 }}>
        <Row gutter={12}>
          <Col>
            <Button onClick={() => convert(input, 'base64', 'ascii')}>
              Decode
            </Button>
          </Col>
          <Col>
            <Button onClick={() => convert(input, 'ascii', 'base64')}>
              Encode
            </Button>
          </Col>
          <Col>
            <Button onClick={() => switchText()}>Switch</Button>
          </Col>
        </Row>
      </div>
      <br />
      <Divider />
      <br />
      <TextArea
        autoSize={{ minRows: 5, maxRows: 12 }}
        value={output}
        placeholder={outputPlaceholder}
        onChange={(v) => setOutput(v.target.value)}
      />
    </PageContainer>
  );
};

export default Base64Converter;
