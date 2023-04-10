import "./index.css";
import { Input, Space } from 'antd';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const { Search } = Input;


function SearchBar(){  
  
  const navigate = useNavigate()

  const onSearch = (value) => {
    if (value) {
      navigate(`search?movieName=${value}`)

    }
    else {
      alert("!!!")
    }

  };

    return (
        <>
            <Space direction="vertical" className="search_bar">
              <Search
                placeholder="Search for a movie, tv show, person......"
                onSearch={onSearch}
                enterButton="Search"
                size="large"
              />
            </Space>
        </>
    )
}

export default SearchBar;