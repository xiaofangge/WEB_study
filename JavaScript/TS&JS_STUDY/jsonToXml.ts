function jsonToXml(json: any): string {
    let xml = '';

    for (const key in json) {
        xml += `<${key}>`;

        if (typeof json[key] === 'object') {
            xml += jsonToXml(json[key]);
        } else {
            xml += json[key];
        }

        xml += `</${key}>`;
    }

    return xml;
}

// 示例 JSON 数据
const jsonData = {
    person: {
        name: 'Alice',
        age: 30,
        address: {
            city: 'New York',
            zip: 10001
        }
    }
};

// 转换为 XML 格式
const xmlData = jsonToXml(jsonData);
console.log(xmlData);