import { Card, Descriptions, Spin } from "antd";



export function Analysis({ data, loading }) {

    if (loading)
        return <Spin style={{marginTop: 30}} />
    if (data === undefined)
        return <></>
    
    return <Card loading={loading} bodyStyle={{ textAlign: "center" }} style={{ marginTop: 20 }}>
        <Descriptions bordered={true} title="General Info">
            <Descriptions.Item label="Title">{data.Info.Title}</Descriptions.Item>
        </Descriptions>
        <Descriptions bordered={true} title="Forms" style={{ marginTop: 10 }}>
            <Descriptions.Item label="Has Login Form">{data.Form.HasLoginForm ? "Yes" : "No"}</Descriptions.Item>
        </Descriptions>
        
        <Descriptions bordered={true} title="Headings" style={{ marginTop: 10 }}>
            {Object.keys(data.Headers).map(value => (<Descriptions.Item key={value} label={value}>{data.Headers[value]}</Descriptions.Item>))}
        </Descriptions>
        
        <Descriptions bordered={true} title="Anchor" style={{ marginTop: 10 }}>
            <Descriptions.Item label="Links">{data.Anchor.Links}</Descriptions.Item>
            <Descriptions.Item label="Inaccessible Links">{data.Anchor.InaccessibleLinks}</Descriptions.Item>
            <Descriptions.Item label="Accessible Links">{data.Anchor.AccessibleLinks}</Descriptions.Item>
            <Descriptions.Item label="Internal Links">{data.Anchor.InternalLinks}</Descriptions.Item>
            <Descriptions.Item label="External Links">{data.Anchor.ExternalLinks}</Descriptions.Item>
        </Descriptions>
    </Card>
}