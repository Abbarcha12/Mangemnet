import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
function ProductSelect(Props) {
    return (
        <div>
        <Select
        showSearch
        style={{ width: 200,borderRadius:"8px" }}
        placeholder={Props.sel}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option value="1">Member1</Option>
        <Option value="2">Member2</Option>
        <Option value="3">Member3</Option>
        <Option value="4">Member4</Option>
      </Select>
        </div>
    )
}

export default ProductSelect
