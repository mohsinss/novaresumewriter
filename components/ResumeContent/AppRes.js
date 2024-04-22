import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function AppRes({ selectedTemplate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Jane Douglas');
  const [position, setPosition] = useState('Product Manager');
  const [email, setEmail] = useState('janed.alshammari@gmail.com');
  const [phone, setPhone] = useState('8859978644');
  const [editName, setEditName] = useState(name);
  const [editPosition, setEditPosition] = useState(position);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);
  const [hasMounted, setHasMounted] = useState(false);
  const [summary, setSummary] = useState('');
const [editSummary, setEditSummary] = useState('');
const [experience, setExperience] = useState('');
const [editExperience, setEditExperience] = useState('');

  useEffect(() => {
    setHasMounted(true);
    const savedName = localStorage.getItem('name') || 'Jane Douglas';
    const savedPosition = localStorage.getItem('position') || 'Product Manager';
    const savedEmail = localStorage.getItem('email') || 'janed.alshammari@gmail.com';
    const savedPhone = localStorage.getItem('phone') || '8859978644';
    const savedSummary = localStorage.getItem('summary') || 'As an experienced Product Manager, I have a proven track record of successfully launching and managing products from ideation to market. My expertise in product strategy, development, and launch has resulted in significant revenue growth for my previous employers. With strong leadership skills and the ability to collaborate cross-functionally with teams, I am confident in my ability to drive innovation and deliver results. My passion for technology and customer-centric approach make me a valuable asset to any organization seeking a dynamic Product Manager.';
    const savedExperience = localStorage.getItem('experience') || 'Experience content goes here';
    // ..
    setName(savedName);
    setPosition(savedPosition);
    setEmail(savedEmail);
    setPhone(savedPhone);
    setEditName(savedName);
    setEditPosition(savedPosition);
    setEditEmail(savedEmail);
    setEditPhone(savedPhone);
    setSummary(savedSummary);
    setExperience(savedExperience);
    setEditSummary(savedSummary);
    setEditExperience(savedExperience);
  }, []);

  useEffect(() => {
    setEditName(name);
  }, [name]);

  useEffect(() => {
    setEditPosition(position);
  }, [position]);

  useEffect(() => {
    setEditEmail(email);
  }, [email]);

  useEffect(() => {
    setEditPhone(phone);
  }, [phone]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setName(editName);
    setPosition(editPosition);
    setEmail(editEmail);
    setPhone(editPhone);
    setSummary(editSummary);
    setExperience(editExperience);

    localStorage.setItem('name', editName);
    localStorage.setItem('position', editPosition);
    localStorage.setItem('email', editEmail);
    localStorage.setItem('phone', editPhone);
    localStorage.setItem('summary', editSummary);
    localStorage.setItem('experience', editExperience);
    setIsEditing(false);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex flex-col p-4 bg-white text-black" style={{ margin: '20px' }}>
      <div className="relative">
        {isEditing ? (
          <div className="absolute right-0 top-0">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-1 border border-blue-500 rounded"
              style={{ marginRight: '10px', marginTop: '10px' }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex justify-between items-start mt-4">
        <div className="flex flex-col">
          {isEditing ? (
            <div>
              <input
                type="text"
                className="text-2xl font-bold"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
          ) : (
            <h3 className="text-2xl font-bold" onClick={handleEdit}>
              {name}
            </h3>
          )}
{isEditing ? (
  <div>
    <input
      type="text"
      className="text-lg"
      style={{ color: selectedTemplate }}
      value={editPosition}
      onChange={(e) => setEditPosition(e.target.value)}
    />
  </div>
) : (
  <p className="text-lg" style={{ color: selectedTemplate }} onClick={() => setIsEditing(true)}>
    {position}
  </p>
)}

{isEditing ? (
  <div>
    <input
      type="text"
      className="text-sm"
      value={editEmail}
      onChange={(e) => setEditEmail(e.target.value)}
    />
  </div>
) : (
  <p className="text-sm" onClick={() => setIsEditing(true)}>{email}</p>
)}

{isEditing ? (
  <div>
    <input
      type="text"
      className="text-sm"
      value={editPhone}
      onChange={(e) => setEditPhone(e.target.value)}
    />
  </div>
) : (
  <p className="text-sm" onClick={() => setIsEditing(true)}>{phone}</p>
)}
        </div>
        <Avatar className="w-24 h-24">
          <AvatarImage alt="Profile picture" src="/placeholder.svg?height=96&width=96" />
        </Avatar>
      </div>
      <div className="mt-8">
  <h2 className="text-xl font-semibold mb-2" onClick={() => setIsEditing(true)}>SUMMARY</h2>
  {isEditing ? (
    <div>
      <textarea
        className="text-sm w-full"
        value={editSummary}
        onChange={(e) => setEditSummary(e.target.value)}
      />
    </div>
  ) : (
    <p className="text-sm">{summary}</p>
  )}
</div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Founder | Magical Resume |San Francisco, California, United States| 2022-/ Present</h3>
          <ul className="text-sm list-disc pl-4">
            <li>
              Collaborated with key stakeholders in Supply Chain, Marketing, Site Merchandising, and Affiliates to consistently
              achieve operational goals and drive growth opportunities for Magical Resume
            </li>
            <li>
              Led two product teams focused on algorithmic pricing and business intelligence, utilizing GPT3 and AI technologies
              to enhance resume writing software capabilities
            </li>
            <li>
              Oversaw a $10+ million P&L for beauty subcategories, increasing revenue by 30% YoY through strategic product
              pricing, positioning, and roadmap planning
            </li>
            <li>
              Evaluated promotional plans to ensure alignment with product line strategy while effectively conveying the
              message to target audiences
            </li>
            <li>
              Gained hands-on experience in product management by working closely with AR designers, engineers, data
              scientists, and user researchers
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Product Manager | Claimyr |San Francisco, California, United States| 2021-/2021</h3>
          <ul className="text-sm list-disc pl-4">
            <li>
              Spearheaded go-to-market initiatives across digital programs for Claimyr, executing integrated marketing plans and
              measuring results (ROI, conversion) using ATS keywords and API integration
            </li>
            <li>
              Designed and implemented A/B tests that improved conversion rates by optimizing user experience based on
              quantitative analysis and statistical insights
            </li>
            <li>
              Managed all aspects of in-life products including customer feedback gathering, requirements gathering, spec
              writing, wireframes creation, workflows development, cross-functional coordination
            </li>
            <li>
              Coordinated cross-functional teams to ensure alignment on project goals while fostering effective communication
              skills among team members
            </li>
            <li>
              Empowered team members by providing transparency between measurable outcomes, plans delivered work while
              coaching them towards success
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Product Manager | Network Operation Telecom CO. |Riyadh, Saudi Arabia| 2019-/2021</h3>
          <ul className="text-sm list-disc pl-4">
            <li>
              Owned the product roadmap for Network Operation Telecom CO., executing product strategy in alignment with
              market trends and competitive landscape analysis
            </li>
            <li>
              Collaborated with the team to increase knowledge sharing while accelerating development environment
              automation through agile practices implementation
            </li>
            <li>
              Developed a solid understanding of the company's roadmap and overall product strategy while demonstrating
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}