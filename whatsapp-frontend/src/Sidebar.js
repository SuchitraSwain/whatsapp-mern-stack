import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          alt="Suchitra Swain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_pyC5_qp2mW9mfyk1TBR_2KlmW96Qh4S1Q&usqp=CAU"
        />
        {/* <Avatar /> */}
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        {/* {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))} */}
      </div>
    </div>
  );
}

export default Sidebar;
