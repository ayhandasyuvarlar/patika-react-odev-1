import React, { useState } from "react";

function ContentList({ contacts }) {
  const [filter, setFilter] = useState("");
  const filters = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filter.toLowerCase());
    });
  });
  return (
    <div className="list-container">
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          autoComplete="off"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div className="contacts-list">
        {filters &&
          filters.map((item, index) => {
            return (
              <div key={index}>
                <p>
                  {item.full_name} , {item.phone_number}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ContentList;
