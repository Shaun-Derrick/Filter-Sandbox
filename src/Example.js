import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./index.css";

const options = [
  {
    key: "softwaredevelopment",
    text: "Software Development",
    value: "software development",
  },
  { key: "webdevelopment", text: "Web Development", value: "webdevelopment" },
  { key: "hardware", text: "Hardware", value: "hardware" },
  { key: "it", text: "Information Technology", value: "it" },
  { key: "ip", text: "Information Processing", value: "ip" },
  { key: "is", text: "Information Systems", value: "is" },
  { key: "design", text: "Design", value: "design" },
  { key: "uxui", text: "UX & UI", value: "uxui" },
  { key: "animation", text: "Animation", value: "animation" },
  {
    key: "gamedevelopment",
    text: "Game Development",
    value: "gamedevelopment",
  },
  { key: "startup", text: "Start Up", value: "Start Up" },
  { key: "entrepreneurial", text: "Entrepreneurial", value: "entrepreneurial" },
  { key: "investment", text: "Investment", value: "investment" },
  {
    key: "educationandtraining",
    text: "Education and Training",
    value: "educationandtraining",
  },
  {
    key: "productmanagement",
    text: "Product Management",
    value: "productmanagement",
  },
  {
    key: "projectmanagement",
    text: "Project Management",
    value: "projectmanagement",
  },
  { key: "funding", text: "Funding", value: "funding" },
  {
    key: "customerserviceandengagement",
    text: "Customer Service and Engagement",
    value: "customerserviceandengagement",
  },
  { key: "marketing", text: "Marketing", value: "marketing" },
  {
    key: "qualityassurance",
    text: "Quality Assurance",
    value: "qualityassurance",
  },
  { key: "security", text: "Security", value: "security" },
  { key: "ai", text: "Artificial Intelligence", value: "ai" },
  { key: "vr", text: "Virtual Reality", value: "vr" },
  { key: "nanotechnology", text: "Nano-Technology", value: "nanotechnology" },
  { key: "innovation", text: "Innovation", value: "innovation" },
  { key: "networking", text: "Networking", value: "networking" },
  { key: "social", text: "Social", value: "social" },
  {
    key: "networkadministration",
    text: "Network Administration",
    value: "networkadministration",
  },
  { key: "womenintech", text: "Women in Tech", value: "womenintech" },
  { key: "fintech", text: "Fintech", value: "fintech" },
];

const DropdownExampleMultipleSelection = () => (
  <Dropdown
    placeholder="Filter Categories"
    style={{
      color: "limeGreen",
      borderColor: "limeGreen",
      borderWidth: 4,
      width: "40vw",
    }}
    fluid
    multiple={true}
    selection
    options={options}
    // className="overrideCss"
  />
);

export default DropdownExampleMultipleSelection;
