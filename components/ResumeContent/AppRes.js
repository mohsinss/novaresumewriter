import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding, faLocationArrow, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function AppRes({ selectedTemplate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Jane Douglas');
  const [position, setPosition] = useState('Product Manager');
  const [email, setEmail] = useState('janed.alshammari@gmail.com');
  const [phone, setPhone] = useState('8859978644');
  const [linkedin, setLinkedin] = useState('jane.douglas');
  const [twitter, setTwitter] = useState('@janedouglas');
  const [address, setAddress] = useState('San Francisco, CA USA');
  const [editName, setEditName] = useState(name);
  const [editPosition, setEditPosition] = useState(position);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phone);
  const [editLinkedin, setEditLinkedin] = useState(linkedin);
  const [editTwitter, setEditTwitter] = useState(twitter);
  const [editAddress, setEditAddress] = useState(address);
  const [hasMounted, setHasMounted] = useState(false);
  const [summary, setSummary] = useState('');
  const [editSummary, setEditSummary] = useState('');
  const [experienceTitle, setExperienceTitle] = useState('EXPERIENCE');
  const [editExperienceTitle, setEditExperienceTitle] = useState('EXPERIENCE');
  const [summaryTitle, setSummaryTitle] = useState('SUMMARY');
  const [editSummaryTitle, setEditSummaryTitle] = useState('SUMMARY');
  const [experienceItems, setExperienceItems] = useState([
    {
      positionTitle: 'Founder',
      companyName: 'Magical Resume',
      location: 'San Francisco,CA',
      from: '2022',
      to: 'Present',
      responsibilities: [
        'Collaborated with key stakeholders in Supply Chain, Marketing, Site Merchandising, and Affiliates to consistently achieve operational goals and drive growth opportunities for Magical Resume',
        'Led two product teams focused on algorithmic pricing and business intelligence, utilizing GPT3 and AI technologies to enhance resume writing software capabilities',
        'Oversaw a $10+ million P&L for beauty subcategories, increasing revenue by 30% YoY through strategic product pricing, positioning, and roadmap planning',
        'Evaluated promotional plans to ensure alignment with product line strategy while effectively conveying the message to target audiences',
        'Gained hands-on experience in product management by working closely with AR designers, engineers, data scientists, and user researchers',
      ],
    },
  ]);

  const [editExperienceItems, setEditExperienceItems] = useState(experienceItems.map(item => ({ ...item })));


  useEffect(() => {
    setHasMounted(true);
    const savedName = localStorage.getItem('name') || name;
    const savedPosition = localStorage.getItem('position') || position;
    const savedEmail = localStorage.getItem('email') || email;
    const savedPhone = localStorage.getItem('phone') || phone;
    const savedLinkedin = localStorage.getItem('linkedin') || linkedin;
    const savedTwitter = localStorage.getItem('twitter') || twitter;
    const savedAddress = localStorage.getItem('address') || address;
    const savedSummary = localStorage.getItem('summary') || 'As an experienced Product Manager, I have a proven track record of successfully launching and managing products from ideation to market. My expertise in product strategy, development, and launch has resulted in significant revenue growth for my previous employers. With strong leadership skills and the ability to collaborate cross-functionally with teams, I am confident in my ability to drive innovation and deliver results. My passion for technology and customer-centric approach make me a valuable asset to any organization seeking a dynamic Product Manager.';
    const savedSummaryTitle = localStorage.getItem('summaryTitle') || 'SUMMARY';
    const savedExperienceTitle = localStorage.getItem('experienceTitle') || 'EXPERIENCE';
    const savedExperienceItems = JSON.parse(localStorage.getItem('experienceItems')) || experienceItems;

    // Check if savedExperienceItems is an array of objects with the expected properties
    const isValidExperienceItems = Array.isArray(savedExperienceItems) &&
      savedExperienceItems.every(item =>
        typeof item === 'object' &&
        item.hasOwnProperty('positionTitle') &&
        item.hasOwnProperty('companyName') &&
        item.hasOwnProperty('location') &&
        item.hasOwnProperty('from') &&
        item.hasOwnProperty('to') &&
        item.hasOwnProperty('responsibilities')
      );

    const experienceItemsToUse = isValidExperienceItems ? savedExperienceItems : experienceItems;

    setName(savedName);
    setPosition(savedPosition);
    setEmail(savedEmail);
    setPhone(savedPhone);
    setLinkedin(savedLinkedin);
    setTwitter(savedTwitter);
    setAddress(savedAddress);
    setEditName(savedName);
    setEditPosition(savedPosition);
    setEditEmail(savedEmail);
    setEditPhone(savedPhone);
    setEditLinkedin(savedLinkedin);
    setEditTwitter(savedTwitter);
    setEditAddress(savedAddress);
    setSummary(savedSummary);
    setEditSummary(savedSummary);
    setSummaryTitle(savedSummaryTitle);
    setEditSummaryTitle(savedSummaryTitle);
    setExperienceTitle(savedExperienceTitle);
    setEditExperienceTitle(savedExperienceTitle);
    setExperienceItems(experienceItemsToUse);
    setEditExperienceItems(experienceItemsToUse.map(item => ({ ...item })));
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

  useEffect(() => {
    setEditLinkedin(linkedin);
  }, [linkedin]);

  useEffect(() => {
    setEditTwitter(twitter);
  }, [twitter]);

  useEffect(() => {
    setEditAddress(address);
  }, [address]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setName(editName);
    setPosition(editPosition);
    setEmail(editEmail);
    setPhone(editPhone);
    setLinkedin(editLinkedin);
    setTwitter(editTwitter);
    setAddress(editAddress);
    setSummary(editSummary);
    setSummaryTitle(editSummaryTitle);
    setExperienceTitle(editExperienceTitle);
    setExperienceItems(editExperienceItems.map(item => ({ ...item })));

    localStorage.setItem('name', editName);
    localStorage.setItem('position', editPosition);
    localStorage.setItem('email', editEmail);
    localStorage.setItem('phone', editPhone);
    localStorage.setItem('linkedin', editLinkedin);
    localStorage.setItem('twitter', editTwitter);
    localStorage.setItem('address', editAddress);
    localStorage.setItem('summary', editSummary);
    localStorage.setItem('summaryTitle', editSummaryTitle);
    localStorage.setItem('experienceTitle', editExperienceTitle);
    localStorage.setItem('experienceItems', JSON.stringify(editExperienceItems));

    setIsEditing(false);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="a4-document flex flex-col p-4 bg-white text-black" style={{ margin: '20px' }}>
      <div className="relative">
        {isEditing ? (
          <div className="absolute right-0 top-0">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white p-1 border border-blue-500 rounded"
              style={{ marginRight: '10px', marginTop: '10px', width: '150px', height: '50px' }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center mt-4 cursor-pointer">
  {isEditing ? (
    <div>
      <input
        type="text"
        className="text-4xl font-bold text-center"
        style={{ color: selectedTemplate }}
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
    </div>
  ) : (
    <h3
      className="text-4xl font-bold text-center"
      style={{ color: selectedTemplate }}
      onClick={handleEdit}
    >
      {name}
    </h3>
  )}
  {isEditing ? (
    <div>
      <input
        type="text"
        className="text-2xl text-center ml-8"
        value={editPosition}
        onChange={(e) => setEditPosition(e.target.value)}
      />
    </div>
  ) : (
    <p className="text-2xl text-center ml-8" onClick={() => setIsEditing(true)}>
      {position}
    </p>
  )}
<div className="flex text-xs mt-2">
  {isEditing ? (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-1" />
      <input
        type="text"
        className="mr-2"
        value={editEmail}
        onChange={(e) => setEditEmail(e.target.value)}
      />
    </div>
  ) : (
    <div className="flex items-center mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
      <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-1" />
      <p>{email}</p>
    </div>
  )}

  {isEditing ? (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-1" />
      <input
        type="text"
        className="mr-2"
        value={editPhone}
        onChange={(e) => setEditPhone(e.target.value)}
      />
    </div>
  ) : (
    <div className="flex items-center mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
      <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-1" />
      <p>{phone}</p>
    </div>
  )}

{isEditing ? (
  <div className="flex items-center">
    <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 mr-1" />
    <input
      type="text"
      className="mr-2"
      value={editLinkedin}
      onChange={(e) => setEditLinkedin(e.target.value)}
    />
  </div>
) : (
  <div className="flex items-center mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
    <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 mr-1" />
    <p>{linkedin}</p>
  </div>
)}


{isEditing ? (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faTwitter} className="h-4 w-4 mr-1" />
      <input
        type="text"
        className="mr-2"
        value={editTwitter}
        onChange={(e) => setEditTwitter(e.target.value)}
      />
    </div>
  ) : (
    <div className="flex items-center mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
      <FontAwesomeIcon icon={faTwitter} className="h-4 w-4 mr-1" />
      <p>{twitter}</p>
    </div>
  )}

  {isEditing ? (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faLocationArrow} className="h-4 w-4 mr-1" />
      <input
        type="text"
        value={editAddress}
        onChange={(e) => setEditAddress(e.target.value)}
      />
    </div>
  ) : (
    <div className="flex items-center cursor-pointer" onClick={() => setIsEditing(true)}>
      <FontAwesomeIcon icon={faLocationArrow} className="h-4 w-4 mr-1" />
      <p>{address}</p>
    </div>
  )}
</div>

</div>
      <div className="mt-8 cursor-pointer">
      {isEditing ? (
    <div>
      <input
        type="text"
        className="text-xl font-semibold mb-2"
        style={{ color: selectedTemplate }}
        value={editSummaryTitle}
        onChange={(e) => setEditSummaryTitle(e.target.value)}
      />
    </div>
  ) : (
    <h2 className="text-xl font-semibold mb-2" style={{ color: selectedTemplate }} onClick={() => setIsEditing(true)}>{summaryTitle}</h2>
  )}
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
  {isEditing ? (
    <div>
      <input
        type="text"
        className="text-xl font-semibold mb-2"
        style={{ color: selectedTemplate }}
        value={editExperienceTitle}
        onChange={(e) => setEditExperienceTitle(e.target.value)}
        onClick={() => setIsEditing(true)}
      />
    </div>
  ) : (
    <h2 className="text-xl font-semibold mb-2" style={{ color: selectedTemplate }} onClick={() => setIsEditing(true)}>{experienceTitle}</h2>
  )}
  <div className="mb-4">
    {editExperienceItems.map((item, index) => (
      <div key={index}>
        <div className="flex items-center mb-2">
          {isEditing ? (
            <>
              <input
                type="text"
                className="mr-2 w-auto min-w-[20px] max-w-[200px]"
                style={{
                  width: item.positionTitle ? 'auto' : '20px',
                  color: selectedTemplate,
                }}
                value={item.positionTitle}
                onChange={(e) => {
                  const updatedItems = [...editExperienceItems];
                  updatedItems[index].positionTitle = e.target.value;
                  setEditExperienceItems(updatedItems);
                }}
              />
              <input
                type="text"
                className="mr-2 w-auto min-w-[20px] max-w-[200px]"
                style={{ width: item.companyName ? 'auto' : '20px' }}
                value={item.companyName}
                onChange={(e) => {
                  const updatedItems = [...editExperienceItems];
                  updatedItems[index].companyName = e.target.value;
                  setEditExperienceItems(updatedItems);
                }}
              />
              <input
                type="text"
                className="mr-2 w-auto min-w-[20px] max-w-[200px]"
                style={{
                  width: item.location ? 'auto' : '20px',
                  color: selectedTemplate,
                }}
                value={item.location}
                onChange={(e) => {
                  const updatedItems = [...editExperienceItems];
                  updatedItems[index].location = e.target.value;
                  setEditExperienceItems(updatedItems);
                }}
              />
              <input
                type="text"
                className="mr-2 w-auto min-w-[20px] max-w-[200px]"
                style={{ width: item.from ? 'auto' : '20px' }}
                value={item.from}
                onChange={(e) => {
                  const updatedItems = [...editExperienceItems];
                  updatedItems[index].from = e.target.value;
                  setEditExperienceItems(updatedItems);
                }}
              />
              <div className="flex items-center">
                <input
                  type="text"
                  className="mr-2 w-auto min-w-[20px] max-w-[200px]"
                  style={{
                    width: item.to ? 'auto' : '20px',
                    color: selectedTemplate,
                  }}
                  value={item.to}
                  onChange={(e) => {
                    const updatedItems = [...editExperienceItems];
                    updatedItems[index].to = e.target.value;
                    setEditExperienceItems(updatedItems);
                  }}
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-1"
                    checked={item.to === 'Present'}
                    onChange={(e) => {
                      const updatedItems = [...editExperienceItems];
                      updatedItems[index].to = e.target.checked ? 'Present' : '';
                      setEditExperienceItems(updatedItems);
                    }}
                  />
                  Present
                </label>
              </div>
            </>
          ) : (
            <>
              <span className="mr-2 font-bold cursor-pointer" style={{ color: selectedTemplate }} onClick={() => setIsEditing(true)}>
                {item.positionTitle}
              </span>
              <span className="mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
                {item.companyName}
              </span>
              <span
                className="mr-2 cursor-pointer"
                style={{ color: selectedTemplate }}
                onClick={() => setIsEditing(true)}
              >
                {item.location}
              </span>
              <span className="mr-2 cursor-pointer" onClick={() => setIsEditing(true)}>
                {item.from}
              </span>
              <span
                className="cursor-pointer"
                style={{ color: selectedTemplate }}
                onClick={() => setIsEditing(true)}
              >
                {item.to === 'Present' ? 'Present' : item.to}
              </span>
            </>
          )}
        </div>
        {item.responsibilities && item.responsibilities.length > 0 && (
  <ul className="text-sm list-disc pl-4">
    {item.responsibilities.map((responsibility, responsibilityIndex) => (
      <li key={responsibilityIndex}>
        {isEditing ? (
          <input
            type="text"
            className="w-full"
            value={responsibility}
            onChange={(e) => {
              const updatedItems = [...editExperienceItems];
              updatedItems[index].responsibilities[responsibilityIndex] = e.target.value;
              setEditExperienceItems(updatedItems);
            }}
          />
        ) : (
          responsibility
        )}
      </li>
    ))}
  </ul>
)}
        {isEditing && (
          <div
            className="flex items-center cursor-pointer mt-2"
            onClick={() => {
              const updatedExperienceItems = [...experienceItems];
              const updatedEditExperienceItems = [...editExperienceItems];
              updatedExperienceItems.splice(index, 1);
              updatedEditExperienceItems.splice(index, 1);
              setExperienceItems(updatedExperienceItems);
              setEditExperienceItems(updatedEditExperienceItems);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill={selectedTemplate}>
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Delete</span>
          </div>
        )}
      </div>
    ))}
  </div>
  {isEditing && (
    <div
      className="flex items-center cursor-pointer mb-4"
      onClick={() => {
        const newExperience = {
          positionTitle: 'Position X',
          companyName: 'Company X',
          location: 'Location X',
          from: '20XX',
          to: '20XX',
          responsibilities: [
            'Responsibility 1',
            'Responsibility 2',
            'Responsibility 3',
          ],
        };
        setExperienceItems([...experienceItems, newExperience]);
        setEditExperienceItems([...editExperienceItems, newExperience]);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill={selectedTemplate}>
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
      <span>Add more experiences</span>
    </div>
  )}
</div>
</div>
  );
}