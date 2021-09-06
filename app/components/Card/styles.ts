import styled from 'styled-components';

import { Calendar3, Trash } from '@styled-icons/bootstrap';

export const Container = styled.div`
  background: #e6e6e6;
  color: #312e38;
  min-height: 200px;
  max-height: 400px;
  border-radius: 10px;
  font-weight: 500;
  border: 2px solid #C3E8C9;
  box-shadow: 0 2px 10px black;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Name = styled.div`
  font-size: 26px;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
`;

export const CreatedAt = styled.div`
  font-size: 17px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: #333;
  margin-bottom: 12px;
`;

export const Task = styled.label`
  span[data-type="name"] {
    margin-left: 5px;
    font-size: 16x;
  }

  span[data-type="owner"] {
    margin-left: 5px;
    font-size: 16x;
    color: #747573;
  }

  span[data-type="expire_at"] {
    margin-left: 5px;
    font-size: 16x;
    color: #747573
  }

  input[type="checkbox"]:checked + span {
    + span {
      text-decoration: line-through;  
    }

    text-decoration: line-through;
    color: #666;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 3px solid #A9ABA7;
  margin: 10px 0px;
`;

export const CalendarIcon = styled(Calendar3)`
  width: 1.2em;
  color: #312E38;
  margin-right: 10px;
`;

export const NewTask = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px dashed black;
`

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

export const TrashIcon = styled(Trash)`
  width: 1.2em;
  color: #312E38;
`;

export const TrashButton = styled(Trash)`
  background: transparent;
  border: none;
  width: 20px;
  margin-left: 15px;
  cursor: pointer;
`;