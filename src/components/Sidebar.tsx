import styled from "styled-components";
import {
  FiHome,
  FiUsers,
  FiTrendingUp,
  FiCompass,
  FiMessageCircle,
  FiGrid
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Side = styled.aside`
  width: 230px;
  background: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  border-radius: 6px;

  &.active {
    background: #eef1ff;
    color: #1a237e;
  }

  &:hover {
    background: #f5f5f5;
  }
`;

const Sidebar = () => {
  return (
    <Side>
      <Title>← Gronet</Title>

      <Item to="/">
        <FiHome /> Home
      </Item>

      <Item to="/my-gronetters">
        <FiUsers /> My Gronetters
      </Item>

      <Item to="/popular">
        <FiTrendingUp /> Popular Discussions
      </Item>

      <Item to="/explore">
        <FiCompass /> Explore
      </Item>

      <Item to="/messages">
        <FiMessageCircle /> Messages
      </Item>

      <Item to="/my-gronet">
        <FiGrid /> My Gronet
      </Item>
    </Side>
  );
};

export default Sidebar;
