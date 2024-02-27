import React, { useState } from 'react';
import styled from 'styled-components';

import upIcon from '@/assets/dropUpIcon.svg';
import downIcon from '@/assets/dropDownIcon.svg';

const Styled = {
  Select: styled.div`
    width: 32rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.8rem;
    border: ${({ $isOpen }) =>
      $isOpen
        ? '2px solid var(--gray-500, #555)'
        : '1px solid var(--gray-300, #ccc)'};
    color: var(--gray-500, #555);

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */

    cursor: pointer;
    &:active {
      border: 2px solid var(--gray-500, #555);
    }
    &:focus {
      border: 2px solid var(--gray-500, #555);
    }
    &:hover {
      border: ${({ $isOpen }) =>
        $isOpen
          ? '2px solid var(--gray-500, #555)'
          : '1px solid var(--gray-500, #555)'};
    }
  `,
  Button: styled.button`
    border: none;
    background: none;
    cursor: pointer;
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  `,
  List: styled.ul`
    padding: 1rem 0.1rem;
    display: ${({ $isOpen }) => ($isOpen ? 'inline-flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;

    border-radius: 0.8rem;
    border: 1px solid var(--gray-300, #ccc);
    background: var(--white, #fff);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  `,
  Item: styled.li`
    width: 31.6rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--gray-900, #181818);

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;

    cursor: pointer;
    &:hover {
      background: var(--gray-100, #f6f6f6);
    }
  `,
};

const Dropdown = ({ data, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data['default']);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <Styled.Select $isOpen={isOpen} onClick={toggleDropdown}>
        {selectedOption}
        <Styled.Button>
          <img src={isOpen ? upIcon : downIcon} alt="dropdown-button" />
        </Styled.Button>
      </Styled.Select>

      <Styled.List $isOpen={isOpen}>
        {data['options'].map((option, idx) => (
          <Styled.Item
            key={idx}
            value={option}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </Styled.Item>
        ))}
      </Styled.List>
    </div>
  );
};

export default Dropdown;
