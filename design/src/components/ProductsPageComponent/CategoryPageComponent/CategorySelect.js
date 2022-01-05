import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
function CategorySelect(Props) {
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
        <Option value="1">Sub-category (Boulangerie)</Option>
        <Option value="2">Sub-category (Boulangerie)2</Option>
        <Option value="3">Sub-category (Boulangerie)3</Option>
        <Option value="4">Sub-category (Boulangerie)4</Option>
      </Select>
        </div>
    )
}

export default CategorySelect
