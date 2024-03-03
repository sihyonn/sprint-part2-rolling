import React, { useState } from 'react';
import styled from 'styled-components';

import upIcon from '@/assets/dropUpIcon.svg';
import downIcon from '@/assets/dropDownIcon.svg';

const Styled = {
  Select: styled.div`
    width: 100%;
    max-width: 32rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    justify-content: space-between;

    position: relative;
    border-radius: 0.8rem;
    border: ${({ $isOpen, theme }) =>
      $isOpen ? theme.border.gr3 : theme.border.gr1};

    color: ${({ theme }) => theme.color.btnGr};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */

    cursor: pointer;

    &:active {
      border: ${({ theme }) => theme.border.gr3};
    }
    &:focus {
      border: ${({ theme }) => theme.border.gr3};
    }
    &:hover {
      border: ${({ $isOpen, theme }) =>
        $isOpen ? theme.border.gr3 : theme.border.gr2};
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
    margin-top: 0.6rem;
    display: ${({ $isOpen }) => ($isOpen ? 'inline-flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    z-index: 1;

    background: ${({ theme }) => theme.color.white};

    border-radius: 0.8rem;
    border: ${({ theme }) => theme.border.gr1};
    box-shadow: ${({ theme }) => theme.boxShadow.card};
  `,
  Item: styled.li`
    width: 31.6rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${({ theme }) => theme.color.textGr};

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem; /* 162.5% */
    letter-spacing: -0.016rem;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.lightGr};
    }
  `,
};

const Dropdown = ({ data, onSelect, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(data['DEFAULT']);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div style={{ maxWidth: '72rem', width: '100%' }}>
      <Styled.Select $isOpen={isOpen} onClick={toggleDropdown}>
        {selectedOption}
        <Styled.Button>
          <img src={isOpen ? upIcon : downIcon} alt="dropdown-button" />
        </Styled.Button>
      </Styled.Select>

      <Styled.List $isOpen={isOpen} {...props}>
        {data['OPTIONS'].map((option, idx) => (
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
